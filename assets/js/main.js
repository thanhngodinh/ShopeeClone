const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $("body");
const signUp = $(".header__navbar-item-signup");
const signIn = $(".header__navbar-item-signin");
const modal = $(".modal");
const overlay = $(".modal__overlay");
const modalBack = $$(".auth-form__controls-back");
const switchSignIn = $(".auth-form__switch-btn-signin");
const switchSignUp = $(".auth-form__switch-btn-signup");
const signUpBtn = $(".signup-btn");
const signInBtn = $(".signin-btn");
const user = $(".header__navbar-user");
const logout = $(".header__navbar-user-item-logout");



// SignUp - SignIn
const checkIpnutSignUp = () => {
    const email = $(".signup-email");
    const password = $(".signup-password");
    const passwordAgain = $(".signup-password-again");
    if (!email.value || !password.value || !passwordAgain.value) {
        if (!email.value) {
            email.parentNode.classList.add("warning--active");
        }
        if (!password.value) {
            password.parentNode.classList.add("warning--active");
        }
        if (!passwordAgain.value) {
            passwordAgain.parentNode.classList.add("warning--active");
        }
        return false;
    }
    if (password.value != passwordAgain.value) {
        passwordAgain.parentNode.classList.add("warning--active");
        return false;
    }
    for (let x of [email, password, passwordAgain]) {
        x.value = "";
        x.parentNode.classList.remove("warning--active");
    }

    return true;
}

const checkIpnutSignIn = () => {
    const email = $(".signin-email");
    const password = $(".signin-password");
    if (!email.value || !password.value) {
        if (!email.value) {
            email.parentNode.classList.add("warning--active");
        }
        if (!password.value) {
            password.parentNode.classList.add("warning--active");
        }
        return false;
    }
    for (let x of [email, password]) {
        x.value = "";
        x.parentNode.classList.remove("warning--active");
    }

    return true;
}

signUp.onclick = () => {
    modal.style.display = "flex";
    $(".modal__signin").style.display = "none";
    // $(".modal__overlay").style.display = "block"
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
    if (checkIpnutSignUp()) {
        modal.style.display = "none";
        signUp.style.display = "none";
        signIn.style.display = "none";
        user.style.display = "inline-block";
    }
}

signInBtn.onclick = () => {
    if (checkIpnutSignIn()) {
        modal.style.display = "none";
        signUp.style.display = "none";
        signIn.style.display = "none";
        user.style.display = "inline-block";
    }
}

logout.onclick = () => {
    signUp.style.display = "inline-block";
    signIn.style.display = "inline-block";
    user.style.display = "none";
}

categorys = [
    {
        id: 1,
        name: "Sản phẩm"
    },
    {
        id: 2,
        name: "Chuột máy tính"
    },
    {
        id: 3,
        name: "Áo nam"
    },
    {
        id: 4,
        name: "Quần tây"
    }
];
products = [
    {
        id: 1,
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        stock: 1000,
        sold: 4100,
        isMall: true,
        date: "04/05/2022",
        type: categorys[1].name
    },
    {
        id: 2,
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: false,
        date: "06/05/2022",
        type: categorys[1].name
    },
    {
        id: 3,
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4400,
        isMall: true,
        date: "07/05/2022",
        type: categorys[1].name
    },
    {
        id: 4,
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: true,
        date: "04/05/2022",
        type: categorys[2].name
    },
    {
        id: 5,
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4000,
        isMall: true,
        date: "03/05/2022",
        type: categorys[2].name
    },
    {
        id: 6,
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        stock: 1000,
        sold: 5000,
        isMall: true,
        date: "15/05/2022",
        type: categorys[1].name
    },
    {
        id: 7,
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        stock: 1000,
        sold: 1200,
        isMall: true,
        date: "25/05/2022",
        type: categorys[3].name
    },
    {
        id: 8,
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 3300,
        isMall: true,
        date: "15/05/2022",
        type: categorys[3].name
    },
    {
        id: 9,
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8400,
        isMall: true,
        date: "25/05/2022",
        type: categorys[1].name
    },
    {
        id: 10,
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 6300,
        isMall: true,
        date: "25/05/2022",
        type: categorys[2].name
    },
    {
        id: 11,
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        stock: 1000,
        sold: 7400,
        isMall: true,
        date: "05/04/2022",
        type: categorys[2].name
    },
    {
        id: 12,
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        stock: 1000,
        sold: 2300,
        isMall: false,
        date: "05/03/2022",
        type: categorys[3].name
    },
    {
        id: 13,
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        stock: 1000,
        sold: 2400,
        isMall: true,
        date: "13/05/2022",
        type: categorys[3].name
    },
    {
        id: 14,
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8200,
        isMall: true,
        date: "23/05/2022",
        type: categorys[2].name
    },
    {
        id: 15,
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        stock: 1000,
        sold: 200,
        isMall: true,
        date: "12/05/2022",
        type: categorys[3].name
    },
    // page 2
    {
        id: 16,
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: true,
        date: "23/05/2022",
        type: categorys[2].name
    },
    {
        id: 17,
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4000,
        isMall: true,
        date: "12/05/2022",
        type: categorys[2].name
    },
    {
        id: 18,
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        stock: 1000,
        sold: 5000,
        isMall: true,
        date: "21/05/2022",
        type: categorys[1].name
    },
    {
        id: 19,
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        stock: 1000,
        sold: 1200,
        isMall: true,
        date: "29/05/2022",
        type: categorys[3].name
    },
    {
        id: 20,
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 3300,
        isMall: true,
        date: "12/05/2022",
        type: categorys[3].name
    },
    {
        id: 21,
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8400,
        isMall: true,
        date: "23/05/2022",
        type: categorys[1].name
    },
    {
        id: 22,
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        stock: 1000,
        sold: 7400,
        isMall: true,
        date: "05/02/2022",
        type: categorys[2].name
    },
    {
        id: 23,
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 6300,
        isMall: true,
        date: "05/02/2022",
        type: categorys[2].name
    },
    {
        id: 24,
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        stock: 1000,
        sold: 2300,
        isMall: false,
        date: "05/01/2022",
        type: categorys[3].name
    },
    {
        id: 25,
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4400,
        isMall: true,
        date: "05/12/2022",
        type: categorys[1].name
    },
    {
        id: 26,
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8200,
        isMall: true,
        date: "05/11/2022",
        type: categorys[2].name
    },
    {
        id: 27,
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        stock: 1000,
        sold: 200,
        isMall: true,
        date: "05/12/2022",
        type: categorys[3].name
    },
    {
        id: 28,
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        stock: 1000,
        sold: 2400,
        isMall: true,
        date: "05/10/2022",
        type: categorys[3].name
    },
    {
        id: 29,
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        stock: 1000,
        sold: 4100,
        isMall: true,
        date: "05/02/2022",
        type: categorys[1].name
    },
    {
        id: 30,
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: false,
        date: "27/05/2022",
        type: categorys[1].name
    },
    // page 3
    {
        id: 31,
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 3300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 32,
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 33,
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 6300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 34,
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        stock: 1000,
        sold: 7400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 35,
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        stock: 1000,
        sold: 2300,
        isMall: false,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 36,
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        stock: 1000,
        sold: 2400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 37,
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        stock: 1000,
        sold: 4100,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 38,
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: false,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 39,
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 40,
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 41,
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 42,
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        stock: 1000,
        sold: 5000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 43,
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        stock: 1000,
        sold: 1200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 44,
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 45,
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        stock: 1000,
        sold: 200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    // page 4
    {
        id: 46,
        name: "Áo thun polo nam HIDDLE cổ vest ấn tượng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 6300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 47,
        name: "Quần Tây Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 3300,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 48,
        name: "Chuột Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 49,
        name: "Áo thun polo nam sọc ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 4,
        liked: 4500,
        stock: 1000,
        sold: 7400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 50,
        name: "QUẦN TÂY (QUẦN ÂU) BIG SIZE TỪ 3XL 4XL 5XL 6XL 7XL 8XL 9XL MÃ BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Việt Nam",
        rating: 5,
        liked: 3400,
        stock: 1000,
        sold: 2300,
        isMall: false,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 51,
        name: "Quần Tây Tối Giản FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Việt Nam",
        rating: 4,
        liked: 4300,
        stock: 1000,
        sold: 2400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 52,
        name: "Chuột Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 4,
        liked: 3300,
        stock: 1000,
        sold: 4100,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 53,
        name: "Chuột gaming Fuhlen L102 (Đen)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "Đài Loan",
        rating: 3,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: false,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 54,
        name: "Áo thun nam dài tay xanh cực chất (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 55,
        name: "Chuột Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 4200,
        stock: 1000,
        sold: 5000,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 56,
        name: "Quần Tây Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Việt Nam",
        rating: 5,
        liked: 1200,
        stock: 1000,
        sold: 1200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 57,
        name: "Chuột không dây Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Quốc",
        rating: 5,
        liked: 3600,
        stock: 1000,
        sold: 4400,
        isMall: true,
        date: "05/05/2022",
        type: categorys[1].name
    },
    {
        id: 58,
        name: "Áo thun nam Amarni cao cấp",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Việt Nam",
        rating: 4,
        liked: 300,
        stock: 1000,
        sold: 1500,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    },
    {
        id: 59,
        name: "Quần tây chất nỉ",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "Mỹ",
        rating: 5,
        liked: 100,
        stock: 1000,
        sold: 200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[3].name
    },
    {
        id: 60,
        name: "Áo thun nam cổ tròn HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Việt Nam",
        rating: 5,
        liked: 4600,
        stock: 1000,
        sold: 8200,
        isMall: true,
        date: "05/05/2022",
        type: categorys[2].name
    }

];
localStorage.setItem("categorys", JSON.stringify(categorys));
localStorage.setItem("products", JSON.stringify(products));
