const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

body = $("body")
addCartBtn = $(".description__buy-add-cart")
buyBtn = $(".description__buy-now")
signUp = $(".header__navbar-item-signup")
signIn = $(".header__navbar-item-signin")

addCartBtn.onclick = function () {
    alert("add");
}

buyBtn.onclck = function () {
    alert("add");
}

signUp.onclick = () => {
    console.log('click sign up');
    html = `
    <div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__body">
            <div class="auth-form">
                <div class="auth-form__container">
                    <div class="auth-form__header">
                        <h3 class="auth-form__heading">Đăng ký</h3>
                        <span class="auth-form__switch-btn">Đăng nhập</span>
                    </div>

                    <div class="auth-form__form">
                        <div class="auth-form__group">
                            <input type="text" class="auth-form__input" placeholder="Nhập email của bạn">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" placeholder="Nhập mật khẩu của bạn">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                        </div>
                    </div>

                    <div class="auth-form_aside">
                        <p class="auth-form__policy-text">
                            Bằng việc đăng kí, bạn đã đồng ý với F8-Shop về
                            <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> &
                            <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
                        </p>
                    </div>

                    <div class="auth-form__controls">
                        <button class="btn auth-form__controls-back">TRỞ LẠI</button>
                        <button class="btn btn--primary">ĐĂNG KÝ</button>
                    </div>
                </div>

                <div class="auth-form_socials">
                    <a href="" class="btn--with-icon auth-form_socials--facebook">
                        <i class="fab fa-facebook-square"></i>
                        <span>Kết nối với Facebook</span>
                    </a>

                    <a href="" class="btn--with-icon auth-form_socials--google">
                        <i class="fab fa-google"></i>
                        <span>Kết nối với Google</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    body.innerHTML += html;
}
