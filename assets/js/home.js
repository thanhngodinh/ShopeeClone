const cart = $(".header__cart-list")
const cartNotice = $(".header__cart-notice")
const cartList = $(".header__cart-list-item");
const cartWrapper = $(".header__cart-list-wrapper")
const category = $(".category-list");
const productList = $(".home-product .row.sm-gutter");
let product = $$(".home-product-item") || [];
let deleteItem = $$(".header__cart-item-remove") || [];

app = {
    currCategory: "",
    currFilter: "",
    currPrice: "",
    currPage: 1,
    itemInCart: JSON.parse(localStorage.getItem("itemInCart")) || [],

    activeClass: function (list, ele, classname) {
        ele.classList.add(classname);
        list.forEach((other) => {
            if (other != ele) {
                other.classList.remove(classname);
            }
        })
    },

    printPrice: function(price) {
        let str = price.toString()
        start = str.length % 3 == 0 ? 2.25 : str.length % 3
        for (let i = start ; i <= str.length - 3; i+=3) {
            if (i + i/ 3 < str.length) {
                str = str.slice(0, i + i/3)  + '.' + str.slice(i + i/3);
            }
        }
        return str
    },
    // category
    loadCategory: function () {
        htmls = categorys.map((category) => {
            if (category.name == "Sản phẩm") {
                return `
            <li class="category-item category-item--active">
                <a class="category-item__link">${category.name}</a>
            </li>
            `
            }
            else {
                return `
            <li class="category-item">
                <a class="category-item__link">${category.name}</a>
            </li>
            `
            }

        })
        category.innerHTML = htmls.join("");
    },

    // product
    loadProduct: function (category = "", filter = "", price = "", page = 1) {
        let productsCheckCate = products.filter((product) => {
            if (category == "" || product.type == category) {
                return product
            }
        })
        let productsSort = productsCheckCate;
        // productsSort = productsCheckCate.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
        if (filter == "Mới nhất") {
            productsSort = productsCheckCate.sort((firstItem, secondItem) => {
                start = new Date(firstItem.date);
                end = new Date(secondItem.date);
                return (end - start);
            });

        }
        else if (filter == "Bán chạy") {
            productsSort = productsCheckCate.sort((firstItem, secondItem) => secondItem.sold - firstItem.sold);
        }

        let productsSortPrice = productsSort;
        if (price == "down") {
            productsSort = productsCheckCate.sort((firstItem, secondItem) => secondItem.price * (1 - secondItem.discount) - firstItem.price * (1 - firstItem.discount));
        }
        else if (price == "up") {
            productsSort = productsCheckCate.sort((firstItem, secondItem) => firstItem.price * (1 - firstItem.discount) - secondItem.price * (1 - secondItem.discount));
        }

        let htmls = productsSortPrice.map((product, index) => {
            let html = ""

            if (15 * (page - 1) <= index && index < 15 * page) {
                html = `
                    <div class="col  l-2-4 m-4 c-6">
                      <a class="home-product-item product-${product.id}" >
                        <div class="home-product-item__img"
                          style="background-image: url(${product.img});">
                        </div>
                        <h4 class="home-product-item__name">${product.name}</h4>
                        <div class="home-product-item__price">
                        `
                if (product.discount == 0) {
                    html += `<span class="home-product-item__price-new">${this.printPrice(product.price)}đ</span>`
                }
                else {
                    html += `
                            <span class="home-product-item__price-old">${this.printPrice(product.price)}đ</span>
                            <span class="home-product-item__price-new">${this.printPrice(product.price * (1 - product.discount))}đ</span>
                            `
                }
                html += `
                        </div>
                        <div class="home-product-item__action">
                          <span class="home-product-item__like">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                          </span>
                          <div class="home-product-item__rating">

                          `
                for (let i = 0; i < 5; i++) {
                    if (i < product.rating) {
                        html += `<i class="home-product-item__rating--gold fas fa-star"></i>`
                    }
                    else {
                        html += `<i class="fas fa-star"></i>`
                    }
                }
                html += `
                    </div>
                          <p class="home-product-item__sold">Đã bán ${product.sold / 1000}k</p>
                        </div>
                        <div class="home-product-item__origin">
                          <span class="home-product-item__brand">${product.brand}</span>
                          <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>
                    `
                if (product.isMall) {
                    html += `<div class="home-product-item__favourite">Mall</div>`
                }
                if (product.discount != 0) {
                    html += `
                        <div class="home-product-item__sale-off">
                          <span class="home-product-item__sale-off-percent">${product.discount * 100}%</span>
                          <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div> 
                    `
                }
                html += `
                    </a>
                </div>  
            `
            }
            return html;
        })
        productList.innerHTML = htmls.join("");
        product = $$(".home-product-item")
        this.direct()
    },

    // Cart
    loadCart: function () {
        if (this.itemInCart.length == 0) {
            cartWrapper.style.display = "none";
            cartNotice.style.display = "none";
        }
        else {
            cart.classList.remove("header__cart-list--no-cart");
            cartWrapper.style.display = "block";
            cartNotice.style.display = "block";
            cartNotice.innerHTML = this.itemInCart.length;
            htmls = this.itemInCart.map((item) => {
                return `
        <li class="header__cart-item product-${item.id}">
            <img
                src=${item.img}
                alt="" class="header__cart-img" />
            <div class="header__cart-item-info">
                <div class="header__cart-item-info-des">
                    <h5 class="header__cart-item-name">
                        ${item.name}
                    </h5>
                    <span class="header__cart-item-price">${item.price * (1 - item.discount)}</span>
                    <span class="header__cart-quantity">x ${item.quantity}</span>
                </div>
            <span class="header__cart-item-remove">Xóa</span>
            </div>
        </li>
            `
            })
            cartList.innerHTML += htmls.join("")

            deleteItem = $$(".header__cart-item-remove")
        }
    },
    handleEvents: function () {
        const _this = this

        // filter by Category
        const categoryItem = $$(".category-item")
        categoryItem.forEach((btn) => {
            btn.onclick = () => {
                _this.activeClass(categoryItem, btn, "category-item--active");
                _this.currCategory = btn.querySelector("a").innerHTML == "Sản phẩm" ? "" : btn.querySelector("a").innerHTML;
                _this.loadProduct(_this.currCategory, _this.currFilter, _this.currPrice, 1);
                _this.activeClass(pageBtn, pageBtn[1], "pagination-item--active");
            }
        })

        // filter by Filters
        const filterItem = $$(".home-filter__btn")
        filterItem.forEach((btn) => {
            btn.onclick = () => {
                _this.activeClass(filterItem, btn, "btn--primary");
                _this.currFilter = btn.innerHTML == "Phổ biến" ? "" : btn.innerHTML;
                _this.loadProduct(_this.currCategory, _this.currFilter, _this.currPrice, 1)
            }
        })

        // filter by Price
        let priceFilter = $$(".select-input__item")
        priceFilter.forEach((btn, index) => {
            btn.onclick = () => {
                if ($(".select-input__label").innerHTML != btn.innerHTML) {
                    $(".select-input__label").innerHTML = btn.innerHTML;
                    _this.currPrice = index == 0 ? "up" : "down";
                }
                else {
                    $(".select-input__label").innerHTML = "Giá"
                    _this.currPrice = ""
                }
                _this.loadProduct(_this.currCategory, _this.currFilter, _this.currPrice, 1)
            }
        })

        // page control
        const filterPageBtn = $$(".home-filter__page-btn")
        filterPageBtn.forEach((btn, index) => {
            btn.onclick = () => {
                if (index == 0) {
                    if (_this.currPage != 1) {
                        _this.currPage--;
                        _this.activeClass(pageBtn, pageBtn[_this.currPage], "pagination-item--active");
                    }
                }
                else {
                    if (_this.currPage != pageBtn.length - 2) {
                        _this.currPage++;
                        _this.activeClass(pageBtn, pageBtn[_this.currPage], "pagination-item--active");
                    }
                }
                $(".home-filter__page-current").innerHTML = _this.currPage;
                _this.loadProduct(_this.currCategory, _this.currFilter, _this.currPrice, _this.currPage);
            }
        })

        const pageBtn = $$(".pagination-item")
        pageBtn.forEach((btn, index) => {
            btn.onclick = () => {
                if (index == 0) {
                    if (_this.currPage != 1) {
                        _this.currPage--;
                        _this.activeClass(pageBtn, pageBtn[_this.currPage], "pagination-item--active");
                    }
                }
                else if (index == pageBtn.length - 1) {
                    if (_this.currPage != pageBtn.length - 2) {
                        _this.currPage++;
                        _this.activeClass(pageBtn, pageBtn[_this.currPage], "pagination-item--active");
                    }
                }
                else {
                    _this.currPage = btn.querySelector("a").innerHTML;
                    _this.activeClass(pageBtn, btn, "pagination-item--active");
                }
                $(".home-filter__page-current").innerHTML = _this.currPage;
                _this.loadProduct(_this.currCategory, _this.currFilter, _this.currPrice, _this.currPage);
            }
        })

    },

    deleteCart: function () {
        deleteItem.forEach((btn, index) => {
            btn.onclick = () => {
                if (this.itemInCart.length == 1) {
                    this.itemInCart.pop();
                    localStorage.setItem("itemInCart", JSON.stringify(this.itemInCart))
                    $(".header__cart-item").remove()
                    // display no cart
                    cartNotice.style.display = "none";
                    cartWrapper.style.display = "none";
                    cart.classList.add("header__cart-list--no-cart");
                }
                else {
                    this.itemInCart = this.itemInCart.filter((item) => {
                        if (item.id != parseInt(btn.parentNode.parentNode.classList[1].slice(8, btn.parentNode.parentNode.classList[1].length))) {
                            return item;
                        }
                    })
                    localStorage.setItem("itemInCart", JSON.stringify(this.itemInCart))
                    cartNotice.innerHTML = this.itemInCart.length;
                    btn.parentNode.parentNode.remove();
                }
            }
        });
    },

    direct: function () {
        let like =  $$(".home-product-item__like")
        product.forEach((item, index) => {
            let isLike = false
            like[index].onclick = (() => {
                like[index].classList.toggle("home-product-item__like--liked")
                isLike = true;
            })
            item.onclick = () => {
                if (isLike) {
                    isLike = false
                }
                else {
                    itemId = item.classList[1].slice(8, item.classList[1].length)
                    sessionStorage.setItem("productId", itemId)
                    window.location.replace("product.html")
                }
            }
        })
    },

    start: function () {
        this.loadCategory();
        this.loadProduct("", "", "", 1);
        this.loadCart();
        this.handleEvents();
        this.deleteCart();
        this.direct();
    }

}

app.start();






