
//alerter

let inputText = document.querySelector("#userInput");
let alertForm = document.querySelector("#alerter");

alertForm.addEventListener("submit", function(event)
{
    event.preventDefault();
    alert(`You entered: ${inputText.value}`);
    inputText.value = "";
})

//Sandwich Builder

let sandwichForm = document.querySelector("#sandwichBuilder");
let wheatBreadBox = document.querySelector("#wheatBread");
let whiteBreadBox = document.querySelector("#whiteBread");
let lettuceBox = document.querySelector("#lettuce");
let tomatoBox = document.querySelector("#tomato");
let onionBox = document.querySelector("#onion");
let mayoBox = document.querySelector("#mayo");
let mustardBox = document.querySelector("#mustard");
let hamBox = document.querySelector("#ham");
let turkeyBox = document.querySelector("#turkey");
let cheeseBox = document.querySelector("#cheese");

sandwichForm.addEventListener("submit", function(event)
{
    event.preventDefault();
    let ingredientList = [];

    if (wheatBreadBox.checked === true)
    {
        ingredientList.push("Wheat Bread");
    }
    if (whiteBreadBox.checked === true)
    {
        ingredientList.push("White Bread");
    }
    if (lettuceBox.checked === true)
    {
        ingredientList.push("Lettuce");
    }
    if (tomatoBox.checked === true)
    {
        ingredientList.push("Tomato");
    }
    if (onionBox.checked === true)
    {
        ingredientList.push("Onion");
    }
    if (mayoBox.checked === true)
    {
        ingredientList.push("Mayo");
    }
    if (mustardBox.checked === true)
    {
        ingredientList.push("Mustard");
    }
    if (hamBox.checked === true)
    {
        ingredientList.push("Ham");
    }
    if (turkeyBox.checked === true)
    {
        ingredientList.push("Turkey");
    }
    if (cheeseBox.checked === true)
    {
        ingredientList.push("Cheese");
    }

    alert(`Your order has been Submitted. Chosen ingredient were: ${ingredientList}`);

    wheatBreadBox.checked = false;
    whiteBreadBox.checked = false;
    lettuceBox.checked = false;
    tomatoBox.checked = false;
    onionBox.checked = false;
    mayoBox.checked = false;
    mustardBox.checked = false;
    hamBox.checked = false;
    turkeyBox.checked = false;
    cheeseBox.checked = false;

    // Roberts example to clear all the check boxes.
    // for(let i = 0; i < ingredients.length; i++){
    //     if(ingredients[i].checked === true){
    //         ingredients[i].checked = false;
    //     }
    // }
    
})

//Appointment Scheduler
let apptForm = document.querySelector("#appointment");
let apptDate = document.querySelector("#date");
let stylistName = document.querySelector("#name");
let longHair = document.querySelector("#long");
let shortHair = document.querySelector("#short");

apptForm.addEventListener("submit", function(event)
{
    let length = "";
    if (longHair.checked === true)
    {
        length = "Long"
    } else
    {
        length = "Short"
    }
    alert(`Haircut scheduled for ${apptDate.value} with ${stylistName.value} for ${length} hair.`);

    apptDate.value = "";
    stylistName.value = "";
    longHair.checked = true;
})

//create account
let createAccount = document.querySelector("#createAccount");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let setPassword = document.querySelector("#setPassword");
let confirmPassword = document.querySelector("#confirmPassword");

createAccount.addEventListener("submit",
function(event)
{

    if(setPassword.value !== confirmPassword.value)
    {
        alert("Passwords must Match");
    } else if (userName.value.length < 3)
    {
        alert("Please Chose a User Name longer then 3 characters.")
    } else if (setPassword.value.length < 4)
    {
        alert("Please Chose a Password longer then 4 characters.")
    } else
    {
        alert(`Your User Name is: ${userName.value} and your email entered is: ${email.value}`);
    }

    userName.value = "";
    email.value = "";
    setPassword.value = "";
    confirmPassword.value = "";
})










