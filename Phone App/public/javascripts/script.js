const buttons = document.querySelectorAll('#btn');

function handleClick(event) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const button = event.currentTarget;
    button.classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// галочки для выбора цвета

const checkBoxs = document.querySelectorAll('#checkActive');

function checkBoxsActive(event) {
    checkBoxs.forEach(checkBox => {
        checkBox.textContent = '';
    });

    const checkBox = event.currentTarget;
    checkBox.textContent = '✅'
}

checkBoxs.forEach(checkBox => {
    checkBox.addEventListener('click', checkBoxsActive);
});

// для кнопок YES и NOT

const btns = document.querySelectorAll('#btns');

function chooseBtn(event) {
    btns.forEach(btn => {
        btn.classList.remove('choose_btn');
    });

    const btn = event.currentTarget;
    btn.classList.add('choose_btn');
}

btns.forEach(btn => {
    btn.addEventListener('click', chooseBtn);
})