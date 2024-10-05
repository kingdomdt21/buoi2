function Display()
{
    window.alert("Warning");
}
function doimau()
{
    const flashingText = document.getElementById("txt");
    flashingText.style.animationDuration = '0.5s';
    flashingText.style.animation = 'flash 1s infinite';
}
function tangsize()
{
    const element = document.getElementById("txt");
    let currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    currentSize = parseFloat(currentSize);
    ++currentSize;
    element.style.fontSize = currentSize + 'px';
}
function giamsize()
{
    const element = document.getElementById("txt");
    let currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    currentSize = parseFloat(currentSize);
    --currentSize;
    element.style.fontSize = currentSize + 'px';
}
function macdinh()
{
    const flashingText = document.getElementById("txt");
    flashingText.style.animation = 'none';
    flashingText.style.color = 'black';
}
function xoa()
{
    const flashingText = document.getElementById("txt");
    flashingText.style.animation = 'none';
    flashingText.style.color = 'transparent';
}
let isOn = false;
function switchlight()
{
    const bulb = document.getElementById('bulb-container');
    isOn = !isOn;
    if (isOn) {
        document.getElementById("den").src = "img/batden.jpg"
        document.getElementById("bt5").textContent = "Tắt đèn";
    } else {
        document.getElementById("den").src = "img/dentat.jpg"
        document.getElementById("bt5").textContent = "Bật đèn";
    }
}
let p = 0;
let intervalId = null;

function dichuyenngc() {
    const vb = document.getElementById("txt");

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

    p = window.innerWidth;
    intervalId = setInterval(function () {
        p -= 2;
        if (p < -vb.offsetWidth) {
            p = window.innerWidth;
        }
        vb.style.left = p + "px";
    }, 10);
}

function dichuyen() {
    const vb = document.getElementById("txt");

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

    p = -vb.offsetWidth;
    intervalId = setInterval(function () {
        p += 2;
        if (p > window.innerWidth) {
            p = -vb.offsetWidth;
        }
        vb.style.left = p + "px";
    }, 10);
}
