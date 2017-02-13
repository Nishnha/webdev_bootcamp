var cartList = [];
var cart = document.getElementById("cart");

sessionStorage.setItem("cartList", "");

function showCart() {
    cart.classList.add("show");
}

function toggleCartView() {
    cart.classList.toggle("show");
}

function addToCart(id) {
    cartList.push(id)
    updateStorage(id, "add");
    updateCart();
}

function removeFromCart(id) {
    cartList = remove(cartList, id);
    //updateStorage(id, "remove");
    updateCart();
}

function remove(array, id) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == id) {
            array.splice(i, 1);
            break;
        }
    }

    return array;
}

function updateStorage(id, operation) {
    if (operation == "add") {
        sessionStorage.setItem("cartList", sessionStorage.getItem("cartList") + JSON.stringify(id));
    }
    if (operation == "remove") {
        let currentCart = JSON.parse(sessionStorage.getItem("cartList"));
        console.log(currentCart);
    }
}

function updateCart() {
    cart.innerHTML = "";
    for (let i = 0; i < cartList.length; i++) {
        let currentItem = document.getElementById(cartList[i]);
        cart.insertAdjacentHTML("beforeend", cartItem(currentItem));
    }

    showCart();
}

function cartItem(item) {
    let name  = item.getElementsByTagName("h3")[0].innerHTML;
    let image = item.getElementsByTagName("img").item(0).src;
    console.log(name);
    console.log(image);

    return `
        <div id="${item.id}">
            <h4>${name}</h4 class="cart-name">
            <img src=${image} class="cart-image">
            <button onClick="removeFromCart(this.parentNode.id)">x</button>
        </div>
        `
}


//updateCart();
