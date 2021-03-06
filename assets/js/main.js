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
    $(".modal__buy-now").style.display = "none";
    $(".modal__signup").style.display = "block";
}

signIn.onclick = () => {
    modal.style.display = "flex";
    $(".modal__buy-now").style.display = "none";
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
        name: "S???n ph???m"
    },
    {
        id: 2,
        name: "Chu???t m??y t??nh"
    },
    {
        id: 3,
        name: "??o nam"
    },
    {
        id: 4,
        name: "Qu???n t??y"
    }
];
products = [
    {
        id: 1,
        name: "Chu???t Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t gaming Fuhlen L102 (??en)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t kh??ng d??y Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "??o thun nam Amarni cao c???p",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Vi???t Nam",
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
        name: "??o thun nam d??i tay xanh c???c ch???t (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Qu???c",
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
        name: "Chu???t Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "Qu???n T??y Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Chu???t Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Qu???c",
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
        name: "??o thun polo nam HIDDLE c??? vest ???n t?????ng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "??o thun polo nam s???c ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "QU???N T??Y (QU???N ??U) BIG SIZE T??? 3XL 4XL 5XL 6XL 7XL 8XL 9XL M?? BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y T???i Gi???n FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Vi???t Nam",
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
        name: "??o thun nam c??? tr??n HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "Qu???n t??y ch???t n???",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "M???",
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
        name: "??o thun nam Amarni cao c???p",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Vi???t Nam",
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
        name: "??o thun nam d??i tay xanh c???c ch???t (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Qu???c",
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
        name: "Chu???t Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "Qu???n T??y Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Chu???t Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Qu???c",
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
        name: "??o thun polo nam s???c ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "??o thun polo nam HIDDLE c??? vest ???n t?????ng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "QU???N T??Y (QU???N ??U) BIG SIZE T??? 3XL 4XL 5XL 6XL 7XL 8XL 9XL M?? BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Vi???t Nam",
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
        name: "Chu???t kh??ng d??y Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "??o thun nam c??? tr??n HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "Qu???n t??y ch???t n???",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "M???",
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
        name: "Qu???n T??y T???i Gi???n FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Vi???t Nam",
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
        name: "Chu???t Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t gaming Fuhlen L102 (??en)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Qu???n T??y Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Chu???t Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Qu???c",
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
        name: "??o thun polo nam HIDDLE c??? vest ???n t?????ng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "??o thun polo nam s???c ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "QU???N T??Y (QU???N ??U) BIG SIZE T??? 3XL 4XL 5XL 6XL 7XL 8XL 9XL M?? BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y T???i Gi???n FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Vi???t Nam",
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
        name: "Chu???t Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t gaming Fuhlen L102 (??en)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t kh??ng d??y Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "??o thun nam Amarni cao c???p",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Vi???t Nam",
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
        name: "??o thun nam d??i tay xanh c???c ch???t (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Qu???c",
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
        name: "Chu???t Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "Qu???n T??y Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "??o thun nam c??? tr??n HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "Qu???n t??y ch???t n???",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "M???",
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
        name: "??o thun polo nam HIDDLE c??? vest ???n t?????ng - ELE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-3-jpeg.jpg?v=1622708607311",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y Nam K61 QTA0015",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_5f73521b15c3439093263d9f1800d8ac_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Chu???t Razer DeathAdder V2 Mini",
        img: "https://anphat.com.vn/media/product/34046_razer_deathadder_v2_mini__1_.jpg",
        price: 1300000,
        discount: 0.25,
        brand: "Razer",
        origin: "Trung Qu???c",
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
        name: "??o thun polo nam s???c ngang HIDDLE",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-2-jpeg.jpg?v=1622708668394",
        price: 440000,
        discount: 0.3,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
        name: "QU???N T??Y (QU???N ??U) BIG SIZE T??? 3XL 4XL 5XL 6XL 7XL 8XL 9XL M?? BS1774",
        img: "https://thoitrangbigsize.vn/wp-content/uploads/2020/12/BS1774-1.jpg",
        price: 485000,
        discount: 0.25,
        brand: "Navy",
        origin: "Vi???t Nam",
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
        name: "Qu???n T??y T???i Gi???n FL02",
        img: "https://cdn2.yame.vn/pimg/quan-tay-nam-no-style-dai-fl02-0018567/337afc6b-ab1d-2300-642d-001661665d26.jpg?w=540&h=756",
        price: 425000,
        discount: 0,
        brand: "YaMe",
        origin: "Vi???t Nam",
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
        name: "Chu???t Funhen",
        img: "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2019/10/chuot-van-phong-fuhlen-102-1.jpg",
        price: 400000,
        discount: 0.1,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "Chu???t gaming Fuhlen L102 (??en)",
        img: "https://lh3.googleusercontent.com/Q9LGJSnb3YWZcYxzeAzf3hcDorJ9VMGlqRW02Z8UlSoULWK36IGDeeEbCdcfIise26oImVJY1P3oH2rePTw=w500-rw",
        price: 129000,
        discount: 0,
        brand: "Funhen",
        origin: "????i Loan",
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
        name: "??o thun nam d??i tay xanh c???c ch???t (ATD-187)",
        img: "https://aothudong.com/upload/product/atd-187/ao-thun-nam-dai-tay-xanh-cuc-chat.jpg",
        price: 400000,
        discount: 0.15,
        brand: "ATD-187",
        origin: "Trung Qu???c",
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
        name: "Chu???t Logitech G502 HERO",
        img: "https://anphat.com.vn/media/product/27290_logitech_g502_hero__1_.jpeg",
        price: 1500000,
        discount: 0,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "Qu???n T??y Nam K93 QTA0024",
        img: "https://product.hstatic.net/1000096703/product/quan-tay-nam-01_793d6eb084054ba385a1ed4df2ea6254_master.jpg",
        price: 280000,
        discount: 0.1,
        brand: "Kenta",
        origin: "Vi???t Nam",
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
        name: "Chu???t kh??ng d??y Logitech MX Anywhere 3 for Mac",
        img: "https://cdn8.web4s.vn/media/products/1540/9techvn-mx-anywhere-3-for-mac-product-gallery-pale-gray-fob.jpg",
        price: 2000000,
        discount: 0.15,
        brand: "Logitech",
        origin: "Trung Qu???c",
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
        name: "??o thun nam Amarni cao c???p",
        img: "https://xuongsiquanao.vn/wp-content/uploads/2018/02/IMG_8187.jpg",
        price: 155000,
        discount: 0,
        brand: "Amarni",
        origin: "Vi???t Nam",
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
        name: "Qu???n t??y ch???t n???",
        img: "https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPPA00263-44_V_1.jpg",
        price: 8000000,
        discount: 0.2,
        brand: "SANDRO",
        origin: "M???",
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
        name: "??o thun nam c??? tr??n HIDDLE Wanderlust",
        img: "https://bizweb.dktcdn.net/100/399/392/files/ao-thun-nam-dep-gia-re-jpeg.jpg?v=1622711670438",
        price: 400000,
        discount: 0.25,
        brand: "HIDDLE",
        origin: "Vi???t Nam",
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
