let count = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.count').onclick = function () {

        count +=1;
    
        document.querySelector('h1').innerHTML = count;

    }

    document.querySelector('.clear').onclick = function () {
        count -= 1;
        document.querySelector('h1').innerHTML = count;
    }
});