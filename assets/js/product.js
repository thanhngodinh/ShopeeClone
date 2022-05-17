const cart = $(".header__cart-list")
const cartNotice = $(".header__cart-notice")
const cartList = $(".header__cart-list-item");
const cartWrapper = $(".header__cart-list-wrapper")
let deleteItem = $$(".header__cart-item-remove") || [];

const app = {
    categorys: JSON.parse(localStorage.getItem("categorys")),
    products: JSON.parse(localStorage.getItem("products")),
    productId: parseInt(sessionStorage.getItem("productId")) || 1,
    itemInCart: JSON.parse(localStorage.getItem("itemInCart")) || [],

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
            cartList.innerHTML = htmls.join("")
            deleteItem = $$(".header__cart-item-remove")
        }
    },
    loadProduct: function () {
        product = this.products.filter((pro) => pro.id == this.productId)[0]
        htmls = `
            <div class="grid wide">
                <div class="row content">
                    <div class="col l-5 m-5 c-12">
                        <nav class="img">
                            <div class="img__main"
                                style="background-image: url(${product.img});">
                            </div>

                            <div class="img__extra">
                                <div class="row sm-gutter">
                                    <div class="col l-2-4 m-4 c-0">
                                        <div class="img__extra-img"
                                            style="background-image: url(${product.img});">
                                        </div>
                                    </div>
                                    <div class="col l-2-4 m-4 c-0">
                                        <div class="img__extra-img"
                                            style="background-image: url(${product.img});">
                                        </div>
                                    </div>
                                    <div class="col l-2-4 m-4 c-0">
                                        <div class="img__extra-img"
                                            style="background-image: url(${product.img});">
                                        </div>
                                    </div>
                                    <div class="col l-2-4 m-4 c-0">
                                        <div class="img__extra-img"
                                            style="background-image: url(${product.img});">
                                        </div>
                                    </div>
                                    <div class="col l-2-4 m-4 c-0">
                                        <div class="img__extra-img"
                                            style="background-image: url(${product.img});">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="img__footer">
                                <div class="row">
                                    <div class="col l-6 m-6 c-0">
                                        <div class="img__social">
                                            <p class="img__social-title">Chia sẻ:</p>

                                        </div>
                                    </div>
                                    <div class="col l-6 m-6 c-0">
                                        <div class="img__like">
                                            <i class="item__like-icon-empty far fa-heart"></i>
                                            <i class="item__like-icon-fill fas fa-heart"></i>
                                            <p class="img__like-count">Đã thích (${product.liked / 1000}k)</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col l-7 m-7 c-12">
                        <nav class="description">
                            <h2 class="description__name">${product.name}</h2>
                            <div class="description__price">
                                <span class="description__price-old">${product.price}đ</span>
                                <span class="description__price-new">${product.price * (1 - product.discount)}đ</span>
                                <span class="description__price-discount">Giảm ${product.discount*100}%</span>
                            </div>
                            <div class="description__discount">
                                <span class="description__discount-title">Mã giảm giá của shop</span>
                            </div>
                            <div class="description__ship">
                                <span class="description__ship-title">Vận chuyển</span>

                            </div>
                            <div class="description__color">
                                <span class="description__color-title">Màu sắc</span>
                                <input type="radio" hidden name="color" id="description__color-black">
                                <label for="description__color-black" class="description__color-radio-black">Đen</label>
                                <input type="radio" hidden name="color" id="description__color-white">
                                <label for="description__color-white" class="description__color-radio-white">Trắng</label>
                                <span class="description__color-warning">Vui lòng chọn màu</span>
                            </div>
                            <div class="description__size">
                                <span class="description__size-title">Size</span>
                                <input type="radio" hidden name="size" id="description__size-s" value="S">
                                <label for="description__size-s" class="description__size-radio-s">S</label>
                                <input type="radio" hidden name="size" id="description__size-m" value="M">
                                <label for="description__size-m" class="description__size-radio-m">M</label>
                                <input type="radio" hidden name="size" id="description__size-l" value="L">
                                <label for="description__size-l" class="description__size-radio-l">L</label>
                                <input type="radio" hidden name="size" id="description__size-xl" value="XL">
                                <label for="description__size-xl" class="description__size-radio-xl">XL</label>
                                <span class="description__size-warning">Vui lòng chọn size</span>
                            </div>
                            <div class="description__quantity">
                                <span class="description__quantity-title">Số lượng</span>
                                <input type="number" name="" id="" min="1" max="100" value="1"
                                    class="description__quantity-input">

                            </div>
                            <div class="description__buy">
                                <button class="description__buy-add-cart btn">
                                    <i class="fas fa-cart-plus"></i>
                                    Thêm vào giỏ hàng
                                </button>
                                <button class="description__buy-now btn">Mua ngay</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            `
        $(".container").innerHTML += htmls

    },

    handleEvents: function () {
        const _this = this;
        addCart = $(".description__buy-add-cart")

        addCart.onclick = () => {
            // Check size, color
            if (!$('input[name="size"]:checked') || !$('input[name="color"]:checked')) {
                if (!$('input[name="size"]:checked')) {
                    $(".description__size-warning").style.display = "inline-block";
                }
                if (!$('input[name="color"]:checked')) {
                    $(".description__color-warning").style.display = "inline-block";
                }
            }
            else {
                // check no cart
                if (_this.itemInCart.length == 0) {
                    cart.classList.remove("header__cart-list--no-cart");
                    cartWrapper.style.display = "block";
                    cartNotice.style.display = "block";
                }
                // add product
                let product = this.products.filter((pro) => pro.id == this.productId)[0]
                // check isInCart
                let isInCart = false
                _this.itemInCart = _this.itemInCart.map((item) => {
                    if (item.id == product.id) {
                        item.quantity += parseInt($(".description__quantity-input").value);
                        isInCart = true;
                        return item;
                    }
                    return item;
                })
                if (isInCart) {
                    localStorage.setItem("itemInCart", JSON.stringify(_this.itemInCart))
                    _this.loadCart()
                }
                else {
                    // not in cart
                    let item = {
                        ...product,
                        quantity: parseInt($(".description__quantity-input").value)
                    }
                    console.log(item);

                    _this.itemInCart.push(item)
                    localStorage.setItem("itemInCart", JSON.stringify(_this.itemInCart))
                    cartNotice.innerHTML = _this.itemInCart.length;
                    html = `
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
                    cartList.innerHTML += html;
                }
                // reset warning
                $(".description__color-warning").style.display = "none";
                $(".description__size-warning").style.display = "none";
                // reset deleteCart
                deleteItem = $$(".header__cart-item-remove");
                _this.deleteCart()

            }

        };


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
                            return item
                        }
                    })
                    localStorage.setItem("itemInCart", JSON.stringify(this.itemInCart))
                    cartNotice.innerHTML = this.itemInCart.length;
                    btn.parentNode.parentNode.remove();
                }
            }
        });
    },

    start: function () {
        this.loadCart();
        this.loadProduct();
        this.handleEvents();
        this.deleteCart();
    }

};

app.start()


