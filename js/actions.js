// document.getElementById("bold-button").addEventListener("click", function () {
//   const textInput = document.getElementById("text-field");
//   // console.log(textInput);
//   if (textInput.style.fontWeight == "bold") {
//     document.getElementById("bold-button").style.color = "black";
//     textInput.style.fontWeight = "normal";

//   } else {
//     textInput.style.fontWeight = "bold";
//     document.getElementById("bold-button").style.color = "navy";
//   }
// });

// Alternative way Learnt From YouTube

const textInput = document.getElementById("text-field");

//   <input type="number" id="font-size-number" name="" id="font-size" min="2" max="50" value="16" class="pl-2 border-solid border-2 border-black w-11 font-semibold" onchange="f1(this)" />

// we connected the function using onchange="" attribute inside the tag
function f1(fontSizeNumber) {
  let textValue = fontSizeNumber.value; // we've taken the font size number inside a variable
  textInput.style.fontSize = textValue + "px"; // we've set a logic that, whatever the text value will be, the font size will be it's original size + font size increase as the number inside the fontsizenumber option
}

function f2(boldConversion) {
  if (textInput.style.fontWeight == "bold") {
    textInput.style.fontWeight = "normal";
    boldConversion.classList.remove("active");
  } else {
    textInput.style.fontWeight = "bold";
  //  document.getElementById("bold-button").style.color = "navy";
    boldConversion.classList.add("active");
  }
}

function f3(italicConversion) {
  if (textInput.style.fontStyle == "italic") {
    textInput.style.fontStyle = "normal";
    italicConversion.classList.remove("active");
  } else {
    textInput.style.fontStyle = "italic";
  //  document.getElementById("bold-button").style.color = "navy";
    italicConversion.classList.add("active");
  }
}

function f4(underlineConversion) {
    if (textInput.style.textDecoration == "underline") {
      textInput.style.textDecoration = "none"; 
      underlineConversion.classList.remove("active");
    } else {
      textInput.style.textDecoration = "underline";
    //  document.getElementById("bold-button").style.color = "navy";
      underlineConversion.classList.add("active");
    }
  }

 
const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const underlineButton = document.getElementById("underline-button");

// Store the initial placeholder text
const initialPlaceholder = textInput.placeholder;

// Disable the buttons initially
boldButton.disabled = true;
italicButton.disabled = true;
underlineButton.disabled = true;

// Add an event listener to the textarea to enable the buttons when text is inputted
textInput.addEventListener('input', function() {
    // Check if there is any text in the textarea
    if (textInput.value.trim() !== '') {
        // Enable the buttons
        boldButton.disabled = false;
        italicButton.disabled = false;
        underlineButton.disabled = false;
    } else {
        // Reset the placeholder if there's no text
        textInput.placeholder = initialPlaceholder;
        // Disable the buttons again
        boldButton.disabled = true;
        italicButton.disabled = true;
        underlineButton.disabled = true;
    }
});

function f5(left){
    textInput.style.textAlign = "left";
}

function f6(center){
    textInput.style.textAlign = "center";
}

function f7(right){
    textInput.style.textAlign = "right";
}

function f8(justify){
    textInput.style.textAlign = "justify";
}

function f9(caseSensitivity){
    if (textInput.style.textTransform == "uppercase") {
        textInput.style.textTransform = "lowercase"; 
        uppercaseConversion.classList.remove("active");
      } else {
        textInput.style.textTransform = "uppercase";
      //  document.getElementById("bold-button").style.color = "navy";
        underlineConversion.classList.add("active");
      }
}

function f10(colorChange){
    let colorValue = colorChange.value;
    textInput.style.color = colorValue;
}