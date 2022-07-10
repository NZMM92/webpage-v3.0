var nameOfProduct = [];
var priceOfProduct = [];
var productID = {};
var cart = [];
var userCart = [];
var nameArray = [];
var priceArray = [];
var table = document.getElementById("cartContents");
var total = document.getElementById("modal_total-price");
var checkoutDetails = document.getElementById("checkoutTable");
var checkoutTotal = document.getElementById("checkout_total-price");
var nameDisplay = "";
var priceDisplay = "";
document.querySelectorAll('input[name=productName]').forEach(function (name) {
    nameOfProduct.push(name.value);
})
document.querySelectorAll('input[name=productPrice]').forEach(function (price) {
    priceOfProduct.push(price.value);
})
function addToCart(id) {
    productID = parseInt(id);
    productID--;
    if (nameOfProduct[productID] != null && priceOfProduct[productID] != null) {
        var Items = {
            name: nameOfProduct[productID],
            price: parseFloat(priceOfProduct[productID]),
        };
        cart.push(Items);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        showCart(productID);
    }
}
function showCart() {
    var userCart = JSON.parse(sessionStorage.getItem("cart"));
    let tr = [];
    var totalPrice = 0.00;
    userCart.forEach(item => {
        totalPrice += item.price;
        tr.push('<tr><td>' + item.name + '</td>' + '<td>' + item.price + '</>');
        nameArray.push(item.name);
        priceArray.push(item.price);
        let namingDisplay = [...new Set(nameArray)];
        let priceDisplay = [...new Set(priceArray)];
        table.innerHTML = tr.join("");
        total.innerHTML = totalPrice;
        document.getElementById("naming").value = namingDisplay;
        document.getElementById("pricing").value = priceDisplay;

    })
}
function ClearAll() {
    sessionStorage.clear();
    table.innerHTML = "";
    total.innerHTML = 0.00;
    $("#naming").val("");
    $("#pricing").val("");
    nameArray=[];
    priceArray=[];
}

