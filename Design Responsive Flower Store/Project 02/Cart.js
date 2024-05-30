function handleSubmit(event) {
          event.preventDefault();
     
          document.getElementById('checkout-form').style.display = 'none';
        
          document.getElementById('thank-you-message').style.display = 'block';
        }
		
// Function to handle adding items to cart
               function addToCart(price) {
                // Add the price of the selected flower to the total price
                totalPrice += price;
    
                // Update the cart summary with the new total price
                const cartSummary = document.querySelector('.cart ul');
                cartSummary.innerHTML += `<li>Price: ${price} Rs</li>`;
            }
    
            // Function to handle submitting the review
            function submitReview() {
                // Your existing code
            }