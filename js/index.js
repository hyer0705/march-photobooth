function showText(n) {
    document.querySelector(`#desc${n}`).classList.remove('hideText');
    document.querySelector(`#desc${n}`).classList.add('showText');
}

function hideText(n) {
    document.querySelector(`#desc${n}`).classList.remove('showText');
    document.querySelector(`#desc${n}`).classList.add('hideText');
}

function alertText(n) {
    alert(`${n}번째 추억이에요! 눌러주셔서 감사합니다:)`);
}