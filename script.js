document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            
            // Toggle the 'active' class on the accordion item
            accordionItem.classList.toggle('active');
            // Also toggle 'active' on the header itself for the icon rotation
            header.classList.toggle('active'); 
        });
    });
});

 window.onload = function() {
        const popup = document.getElementById('popup-container');
        const closeBtn = document.querySelector('.popup-close');
        
        // Show the popup
        popup.style.display = 'flex';
        
        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            popup.style.display = 'none';
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        }

        // Add functionality to buttons if needed
        document.querySelector('.btn-primary').onclick = function() {
            // Add your logic for "Give Feedback" here
            popup.style.display = 'none'; // Closes the popup after clicking
        };

        document.querySelector('.btn-secondary').onclick = function() {
            // Add your logic for "No Thanks" here
            popup.style.display = 'none'; // Closes the popup after clicking
        };
    };