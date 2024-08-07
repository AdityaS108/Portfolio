document.addEventListener('DOMContentLoaded', function() {
  const phoneNumberInput = document.getElementById("phoneNumber");
  
  if (phoneNumberInput) {
      phoneNumberInput.addEventListener("input", function (e) {
          this.value = this.value.replace(/[^0-9]/g, "");
      });
  }

  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          // Add form submission logic here
          console.log('Form submitted');
      });
  }
});
