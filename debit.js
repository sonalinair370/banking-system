const cardName = document.getElementById("SonaliNair");
const cardNumber = document.getElementById("5869 7932 1729 3395");
const expiry = document.getElementById("06/36");
const cvv = document.getElementById("983");
const debitBtn = document.getElementById("debitBtn");

// Disable button initially
debitBtn.disabled = true;

function validateForm() {
  const nameValid = /^[A-Za-z ]{3,}$/.test(cardName.value.trim());

  const numberValid = /^\d{16}$/.test(cardNumber.value.replace(/\s/g, ""));

  const expiryValid = (() => {
    if (!/^\d{2}\/\d{2}$/.test(expiry.value)) return false;
    const [mm, yy] = expiry.value.split("/");
    const expDate = new Date(`20${yy}`, mm);
    return expDate > new Date();
  })();

  const cvvValid = /^\d{3}$/.test(cvv.value);

  debitBtn.disabled = !(nameValid && numberValid && expiryValid && cvvValid);
}

// Auto-format card number
cardNumber.addEventListener("input", () => {
  cardNumber.value = cardNumber.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  validateForm();
});

// Expiry auto slash
expiry.addEventListener("input", () => {
  if (expiry.value.length === 2 && !expiry.value.includes("/")) {
    expiry.value += "/";
  }
  validateForm();
});

// Other validations
cardName.addEventListener("input", validateForm);
cvv.addEventListener("input", validateForm);
