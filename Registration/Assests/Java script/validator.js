function validateName(name, fieldName) {
 const lettersOnly = /^[A-Za-z\s]+$/;

  if (name.trim() === "") {
    alert(fieldName + " should be filled out");
    return false;
  } else if (!lettersOnly.test(name)) {
    alert(fieldName + " contains only letters");
    return false;
  }
  return true;
}

function validateContact (number, fieldContact){
  const numberOnly = /^09\d{9}$/;
  
  if (number.trim() === ""){
    alert (fieldContact + " should be filled out")
    return false;
  } else if (!numberOnly.test(number)){
    alert("The " + fieldContact + " is Invalid format")
    return false;
  }
  return true;
}

function validateEmail (email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim()=== ""){
    alert ("Email shoud be filled out");
    return false;
  }else if (!emailPattern.test(email)){
    alert("invalid email format");
    return false;
  }
  return true;
}

function validateBatch (batch){
  const batchPattern = /^\d{4}-\d{2}-\d{3}$/;
  
  if(batch.trim() === ""){
    alert("ID should be filled out");
    return false;
  } else if (!batchPattern.test(batch)){
    alert("invalid ID format");
    return false;
  }
  return true;
}

function validateForm() {
  let fName = document.forms["contactForm"]["firstName"].value;
  let mName = document.forms["contactForm"]["middleName"].value;
  let lName = document.forms["contactForm"]["lastName"].value;
  let number = document.forms["contactForm"]["contact"].value;
  let email = document.forms["contactForm"]["email"].value;
  let batch = document.forms["contactForm"]["batch"].value;
  if (!validateName(fName, "First name")) return false;
  if (!validateName(mName, "Middle name")) return false;
  if (!validateName(lName, "Last name")) return false;
  if (!validateContact(number, "contact")) return false;
  if (!validateEmail(email,"email")) return false;
  if (!validateBatch(batch,"batch"))return false;
  return true;
}
