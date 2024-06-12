const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};
 // Search functionality
 function filter() {
    var filterValue, input, productList, productName, h4, i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    productList = document.getElementById("product-list");
    productName = productList.getElementsByClassName("col-4");
    for (i = 0; i < productName.length; i++) {
      h4 = productName[i].getElementsByTagName("h4")[0];
      if (h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        productName[i].style.display = "";
      } else {
        productName[i].style.display = "none";
      }
    }
  }
  // Sort product by price
function sortList() {
  var productList, productName, switching, i, shouldSwitch, b, c;
  productList = document.getElementById("product-list");
  productName = Array.from(productList.getElementsByClassName("col-4"));
  switching = true;
  while (switching) {
    switching = false;
    for (i = 0; i < (productName.length - 1); i++) {
      shouldSwitch = false;
      b = productName[i].querySelector("span").innerHTML;
      c = productName[i + 1].querySelector("span").innerHTML;
      if (Number(b) > Number(c)) {
        shouldSwitch = true;
        if (shouldSwitch) {
          productName[i].parentNode.insertBefore(productName[i + 1], productName[i]);
          switching = true;
        }
      }
    }
  }
}
  // // Sort product by price
  // function sortList() {
  //   var productList, productName, switching, i, shouldSwitch, b, c;
  //   productList = document.getElementById("product-list");
  //   productName = productList.getElementsByClassName("col-4");
  //   switching = true;
  //   while (switching) {
  //     switching = false;
  //     for (i = 0; i < (productName.length - 1); i++) {
  //       shouldSwitch = false;
  //       b = productName[i].getElementsByTagName("span")[0].innerHTML;
  //       c = productName[i + 1].getElementsByTagName("span")[0].innerHTML;
  //       if (Number(b) > Number(c)) {
  //         shouldSwitch = true;
  //         if (shouldSwitch) {
  //           productName[i].parentNode.insertBefore(productName[i + 1], productName[i]);
  //           switching = true;
  //         }
  //       }
  //     }
  //   }
  // }
// Contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
  
    if (name.length < 3) {
      text = "Please Enter a valid Name (Minimum 3 characters)";
      error_message.innerHTML = text;
      return false;
    }
  
    if (subject.length < 10) {
      text = "Please Enter a Correct Subject (Minimum 10 characters)";
      error_message.innerHTML = text;
      return false;
    }
  
    if (isNaN(phone) || phone.length !== 10) {
      text = "Please Enter a valid 10-digit Phone Number";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length <= 20) {
      text = "Please enter more than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length >= 100) {
      text = "Please enter less than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
  
    // This alert message will appear if all form fields are filled correctly
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
  }