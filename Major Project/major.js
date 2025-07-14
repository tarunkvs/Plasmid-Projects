// Show error message
function validate_error(id, message) {
  document.getElementById(id).innerText = message;
}

// Validate Full Name
function ValidateName() {
  const name = document.getElementById("Name").value.trim();
  if (name.length < 5) {
    validate_error("NameError", "Enter a valid name");
    return false;
  }
  validate_error("NameError", "");
  return true;
}

// Validate Email
function ValidateEmail() {
  const email = document.getElementById("email").value.trim();
  if (!email.includes("@")) {
    validate_error("emailError", "E-mail should contain @");
    return false;
  }
  validate_error("emailError", "");
  return true;
}

// Validate Phone Number
function ValidatePhone() {
  const phone = document.getElementById("Phone_No").value.trim();
  if (phone === "123456789" || !/^\d{10}$/.test(phone)) {
    validate_error("phoneError", "Enter a valid 10-digit phone number");
    return false;
  }
  validate_error("phoneError", "");
  return true;
}

// Validate Password
function ValidatePassword() {
  const password = document.getElementById("Password").value.trim();
  const name = document.getElementById("Name").value.trim().toLowerCase();
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name
  ) {
    validate_error(
      "passwordError",
      "Password is weak (less than 8, 'password', or same as name)"
    );
    return false;
  }
  validate_error("passwordError", "");
  return true;
}

// Confirm Password
function ValidateConfirmPassword() {
  const password = document.getElementById("Password").value.trim();
  const confirm = document.getElementById("ConfirmPass").value.trim();
  if (password !== confirm) {
    validate_error("confirmError", "Passwords do not match");
    return false;
  }
  validate_error("confirmError", "");
  return true;
}

// Form submission
document.getElementById("validationform").addEventListener("submit", function (e) {
  e.preventDefault();

  const validName = ValidateName();
  const validEmail = ValidateEmail();
  const validPhone = ValidatePhone();
  const validPassword = ValidatePassword();
  const validConfirm = ValidateConfirmPassword();

  if (validName && validEmail && validPhone && validPassword && validConfirm) {
    alert("Form Submitted Successfully!");
    this.reset();
  } else {
    alert("Please correct the errors and try again.");
  }
});
