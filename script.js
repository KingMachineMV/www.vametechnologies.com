function addToCart() {
    var productName = document.querySelector('.product-name').value;
    var productPrice = document.querySelector('.product-price').value;
    var productColor = document.querySelector('.product-color').value;
    // Add more variables for other product details if needed

    var productDetails = {
        name: productName,
        price: productPrice,
        color: productColor
        // Add more properties for other product details if needed
    };

    // Retrieve the existing cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the current product details to the cart
    cartItems.push(productDetails);
    // Save the updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optional: Show a message or perform any other action after adding to cart
    alert("Product added to cart successfully!");
}