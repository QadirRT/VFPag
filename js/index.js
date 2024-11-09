

// Menu Mobile
document.addEventListener("DOMContentLoaded", function() {
    var btnMenu = document.getElementById("menubtnMobile");
    btnMenu.addEventListener('click', menuMobile);

    

});

function menuMobile() {
    console.log("Menu mobile clickeado");
    alert('Este es el menu')
}

function menuMobile1() {
    alert("Hola")
}

// Desaparecer div

function menuMobile() {
    var divNavMobile = document.querySelector('.divNavMobile');
    divNavMobile.style.display = 'flex';
}

document.addEventListener('click', function(event) {
    var divNavMobile = document.querySelector('.divNavMobile');
    var navVerticalMobile = document.querySelector('.navVerticalMobile');
    
    if (divNavMobile.style.display === 'flex' && !navVerticalMobile.contains(event.target) && !event.target.matches('#menubtnMobile')) {
        divNavMobile.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var btnMenu = document.getElementById("menubtnMobile");
    btnMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        menuMobile();
    });
});