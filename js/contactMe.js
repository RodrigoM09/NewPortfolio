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

//Create an empty object for the fields
let fields = {};
document.addEventListener("DOMContentLoaded", function (){
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.company =  document.getElementById('company-name');
    fields.phone = document.getElementById('phone-number');
    fields.message = document.getElementById('subject');
});

function isNotEmpty(value){
    if(value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}
function isPhoneNumber(phone){
    let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return regex.test(phone);
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
function fieldValidation(field, validationFunction){
    if(field == null) return false;
    let isFieldValid = validationFunction(field.value)
    if(!isFieldValid){
        field.placeholder = field.id
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}
function isValid(){
    let valid = true;
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.company, isNotEmpty);
    valid &= fieldValidation(fields.phone, isPhoneNumber);
    valid &= fieldValidation(fields.message, isNotEmpty);
    return valid;
}

document.getElementById('contactForm').addEventListener('submit', function (event){
    event.preventDefault();
    if(isValid()){
        alert('Thanks for the email, I\'ll be in touch promptly.');
        // Prepare the data to be sent to formspree
        let templateParams = {
            name: fields.name.value,
            email: fields.email.value,
            company: fields.company.value,
            phone: fields.phone.value,
            message: fields.message.value
        }
        // Send the data to Formspree
        emailjs.send("service_1fjxxpd", "template_zn6tdud", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Clear the form
            fields.name.value = '';
            fields.email.value = '';
            fields.company.value = '';
            fields.phone.value = '';
            fields.message.value = '';
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
});