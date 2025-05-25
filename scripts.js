document.addEventListener('DOMContentLoaded', () => {
    console.log('scripts.js loaded');
    const seasonalOffersBtn = document.getElementById('seasonal-offers-btn');
    if (seasonalOffersBtn) {
        console.log('Seasonal offers button found');
        seasonalOffersBtn.addEventListener('click', () => {
            console.log('Seasonal offers button clicked');
            window.location.href = 'promotions.html';
        });
    } else {
        console.error('Seasonal offers button not found');
    }
});
// Открытие формы при клике на "Купить"
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('orderModal').style.display = 'flex';
    });
});

// Закрытие окон
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Отправка заявки
function submitOrder() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && phone) {
        document.getElementById('orderModal').style.display = 'none';
        document.getElementById('thankYouModal').style.display = 'flex';
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}
// Открытие формы при клике на "Купить"
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('orderModal').style.display = 'flex';
    });
});

// Закрытие окон
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Отправка заявки
function submitOrder() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && phone) {
        document.getElementById('orderModal').style.display = 'none';
        document.getElementById('thankYouModal').style.display = 'flex';
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

// Только цифры в телефоне
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', maskPhone);
        phoneInput.addEventListener('focus', maskPhone);
        phoneInput.addEventListener('blur', maskPhone);
        phoneInput.addEventListener('keydown', maskPhone);
    }

    function maskPhone(event) {
        let keyCode;
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) : a;
            });
        i = new_value.indexOf("_");
        if (i !== -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
        }
        if (event.type === "blur" && this.value.length < 17) {
            this.value = "";
        }
    }
});
