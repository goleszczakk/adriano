var _ = require('lodash');
var array = [1, 2, 3, 4, 5];
console.log('answer:', _.without(array, 3));

var kliknij = document.querySelector('.button');
var input = document.querySelector('.box');

kliknij.addEventListener('click', function() {
input.classList.add('active');
});