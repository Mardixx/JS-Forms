// Show what you type in name field

let firstName = document.getElementById('firstname');
let firstnameSpan = document.getElementById("display-firstname");

firstName.addEventListener("keyup", () => {
    let firstnameValue = firstName.value;

    for (child of firstnameValue) {
        firstnameSpan.textContent = firstnameValue
    }

});

// Shows content if over 18 y.o in age field

let age = document.getElementById('age');
let truth = document.getElementById('a-hard-truth')

age.addEventListener('keyup', () => {
    if (age.value < 18) {
        truth.style.visibility = 'hidden'
    }
    else {
        truth.style.visibility = 'visible'
    }
})

// Check if the password is lesser than 6 characters or not the same has the confirmation

let pwd = document.getElementById('pwd');
let pwdConfirm = document.getElementById('pwd-confirm');


pwd.addEventListener('keyup', () => {
    let pwdText = pwd.value.length
    if (pwdText < 6) {
        pwd.style.backgroundColor = 'red'
    }

    else {
        pwd.style.backgroundColor = 'white'
    }
});


pwdConfirm.addEventListener('keyup', () => {
    let pwdText = pwd.value
    let pwdconfirmText = pwdConfirm.value;
    if (pwdconfirmText !== pwdText) {
        pwdConfirm.style.backgroundColor = 'red'
    }

    else {
        pwdConfirm.style.backgroundColor = 'white'
    }
});


