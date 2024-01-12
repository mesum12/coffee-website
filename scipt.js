let navbar = document.queryselector('.navbar');

document.queryselector('#menu-btn').onclick = () =>{
    navbar.classlist.toggle
}

let searchform = document.queryselector('.search-form');

document.queryselector('#search-btn').onclick = () =>{
    searchform.classlist.toggle('.active');
    navbar.classlist.remove('.active');
    cartItem.classlist.toggle('.active');
}

let cartItem = document.queryselector('.search-form');

document.queryselector('#cart-btn').onclick = () =>{
    cartItem.classlist.toggle('.active');
    navbar.classlist.remove('.active');
    searchform.classlist.toggle('.active');
}

window.onscroll =() =>{
    navbar.classlist.remove('.active');
    searchform.classlist.toggle('.active');
    cartItem.classlist.toggle('.active');

}

