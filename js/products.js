var items = []
var container = document.getElementById("item-container");

function template(item) {
    return `
        <div class="item" id=${item.name}>
            <img src="http://s3.amazonaws.com/com.nishnha.webdev/${item.image}" class="item-image">
            <h3>${item.name}</h3>
            <ul class="item-text">${item.description}</ul>
        </div>
    `
};

function createItems(responseText) {
    for (let i = 0; i < responseText.length; i++) {
       items.push(template(responseText[i]));
    }
    for (let i = 0; i < items.length; i++) {
        container.insertAdjacentHTML('beforeend', items[i]);
    }
};

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://s3.amazonaws.com/com.nishnha.webdev/products.json", true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        createItems(JSON.parse(xhttp.responseText));
    }
}
xhttp.onerror = function() {
    console.log("Connection failed");
}
xhttp.send();
