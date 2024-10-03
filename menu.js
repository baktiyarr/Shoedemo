// Select the <h5> element to update its content
var a = document.querySelector("h5");

// Select the "Add To Cart" button
var addButton = document.querySelector("#add");

// Add event listener for the "Add To Cart" button
addButton.addEventListener("click", function() {
    a.innerHTML = " Added to Cart ;)"; // Update the <h5> content
    alert("Item added to cart!"); // Show alert message
});

// Select the "Remove" button
var removeButton = document.querySelector("#remove");

// Add event listener for the "Remove" button
removeButton.addEventListener("click", function() {
    a.innerHTML = " Removed from Cart :)"; // Update the <h5> content
    a.style.color = "red";
    alert("Item removed from cart!"); // Show alert message
});
