const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

body = $("body");
signUp = $(".header__navbar-item-signup");
signIn = $(".header__navbar-item-signin");
modal = $(".modal");
overlay = $(".modal__overlay");
modalBack = $$(".auth-form__controls-back");
switchSignIn = $(".auth-form__switch-btn-signin");
switchSignUp = $(".auth-form__switch-btn-signup");
signUpBtn = $(".signup-btn");
signInBtn = $(".signin-btn");
user = $(".header__navbar-user");
logout = $(".header__navbar-user-item-logout");
category = $(".category-list");
productList = $(".home-product .row.sm-gutter");


// SignUp - SignIn
signUp.onclick = () => {
    modal.style.display = "flex";
    $(".modal__signin").style.display = "none";
    $(".modal__signup").style.display = "block";
}

signIn.onclick = () => {
    modal.style.display = "flex";
    $(".modal__signup").style.display = "none";
    $(".modal__signin").style.display = "block";
}

overlay.onclick = () => {
    modal.style.display = "none";
}

for (let x of modalBack) {
    x.onclick = () => {
        modal.style.display = "none";
    };
}

switchSignIn.onclick = () => {
    $(".modal__signup").style.display = "none";
    $(".modal__signin").style.display = "block";
}

switchSignUp.onclick = () => {
    $(".modal__signin").style.display = "none";
    $(".modal__signup").style.display = "block";
}

signUpBtn.onclick = () => {
    modal.style.display = "none";
    signUp.style.display = "none";
    signIn.style.display = "none";
    user.style.display = "inline-block";
}

signInBtn.onclick = () => {
    modal.style.display = "none";
    signUp.style.display = "none";
    signIn.style.display = "none";
    user.style.display = "inline-block";
}

logout.onclick = () => {
    signUp.style.display = "inline-block";
    signIn.style.display = "inline-block";
    user.style.display = "none";
}

// Category
categorys = [
    {
        name: "Sản phẩm"
    },
    {
        name: "Chuột máy tính"
    },
    {
        name: "Áo nam"
    },
    {
        name: "Quần tây"
    }
]

const addCategory = () => {
    htmls = categorys.map((category) => {
        if (category.name == "Sản phẩm") {
            return `
            <li class="category-item category-item--active">
                <a href="#" class="category-item__link">${category.name}</a>
            </li>
            `
        }
        else {
            return `
            <li class="category-item">
                <a href="#" class="category-item__link">${category.name}</a>
            </li>
            `
        }

    })
    category.innerHTML = htmls.join("");
}
addCategory();




// Product
products = [
    {
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        sold: 4100,
        isMall: true,
        date: "05/05/2022",
        category: categorys[1].name
    },
    {
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        sold: 1500,
        isMall: false,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        sold: 4400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        sold: 1500,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        sold: 4000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        sold: 5000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        sold: 1200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        sold: 3300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        sold: 8400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        sold: 6300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        sold: 7400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        sold: 2300,
        isMall: false,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        sold: 2400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        sold: 8200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        sold: 200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        sold: 4100,
        isMall: true,
        date: "05/05/2022",
        category: categorys[1].name
    },
    {
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        sold: 1500,
        isMall: false,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        sold: 4400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        sold: 1500,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        sold: 4000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        sold: 5000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        sold: 1200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        sold: 3300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        sold: 8400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        sold: 6300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        sold: 7400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        sold: 2300,
        isMall: false,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        sold: 2400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        sold: 8200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        sold: 200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    }
];
const addProduct = () => {
    htmls = products.map((product, index) => {
        html = `
                    <div class="col  l-2-4 m-4 c-6">
                      <a class="home-product-item" href="product.html">
                        <div class="home-product-item__img"
                          style="background-image: url(${product.img});">
                        </div>
                        <h4 class="home-product-item__name">${product.name}</h4>
                        <div class="home-product-item__price">
                        `
        if (product.discount == 0) {
            html += `<span class="home-product-item__price-new">${product.price}đ</span>`
        }
        else {
            html += `
                            <span class="home-product-item__price-old">${product.price}đ</span>
                            <span class="home-product-item__price-new">${product.price * (1 - product.discount)}đ</span>
                            `
        }
        html += `
                        </div>
                        <div class="home-product-item__action">
                          <span class="home-product-item__like home-product-item__like--liked">
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
        return html;
    })
    productList.innerHTML = htmls.join("");
}
addProduct();

categoryItem = $$(".category-item")
for (let i of categoryItem) {
    i.onclick = () => {
        i.classList.add("category-item--active");
        for (let j of categoryItem) {
            if (j != i) {
                j.classList.remove("category-item--active");
            }
        }
        for (let product of $$(".home-product-item")) {
            console.log(product, i.name);
            if (product.category != i.name) {
                product.style.display = "none";
            }
        }
    }
}