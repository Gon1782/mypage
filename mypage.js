const mypost = document.querySelector('#mypost');
const like = document.querySelector('#like');
const scrab = document.querySelector('#scrab');
const cmypost = document.querySelector('.mypost');
const tab_underline = document.querySelector('.tab_underline');

mypost.addEventListener('click', function() {
    mypost.classList.toggle('active');
    tab_underline.style.left = '0';
}) 

like.addEventListener('click', function() {
    like.classList.toggle('active');
    tab_underline.style.left = '33.3%';
}) 

scrab.addEventListener('click', function() {
    scrab.classList.toggle('active');
    tab_underline.style.left = '66.6%';
}) 