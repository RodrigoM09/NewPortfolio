// let message = "";
//
// $("#submit_contact").on("click", function() {
//     message = $("#contactForm").serialize();
//     $.ajax({
//         url: "//formspree.io/rodrigo.nmn.marquez@gmail.com",
//         method: "POST",
//         data: {message: message},
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });

function validate(){
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(regex.test(mail)){
        alert("Thanks for the email, we'll be in touch promptly.");
        return true;
    } else {
        alert("Please enter a valid email address.");
        return false;
    }
}