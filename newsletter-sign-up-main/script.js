(function (d) {
  const $signUp = d.querySelector(".sign-up");
  const $warningOutput = d.querySelector(".sign-up__warning");
  const $inputEmail = d.querySelector("#email");
  const emailReg = new RegExp(
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$"
  );
  const $successMessage = d.querySelector(".success-message");
  const $mailOutput = d.querySelector(".success-message__output");
  let isValidated = false;

  function validateEmail(e) {
    $inputEmail.addEventListener("keyup", (e) => {
      let fieldValue = e.target;
      if (fieldValue.value !== "") {
        if (!emailReg.exec($inputEmail.value)) {
          d.body.classList.add("error");
          $warningOutput.textContent = "Valid email required";
          isValidated = false;
        } else {
          d.body.classList.remove("error");
          $warningOutput.textContent = "";
          isValidated = true;
        }
      } else {
        isValidated = false;
      }
    });
  }

  function redirectToSuccessMessage() {
    const $inputButtonSend = d.querySelector("#send");

    $inputButtonSend.addEventListener("click", (e) => {
      if (isValidated) {
        $signUp.classList.add("none");
        $successMessage.classList.remove("none");
        $mailOutput.textContent = $inputEmail.value;
      } else {
        d.body.classList.add("error");
        $warningOutput.textContent = "Valid email required";
      }
    });
  }

  function returnToSignUp() {
    const $inputButtonReturn = d.querySelector("#return");
    $inputButtonReturn.addEventListener("click", (e) => {
      $signUp.classList.remove("none");
      $successMessage.classList.add("none");
      $inputEmail.value = "";
      $mailOutput.textContent = "";
    });
  }

  d.addEventListener("DOMContentLoaded", (e) => {
    validateEmail();
    redirectToSuccessMessage();
    returnToSignUp();
  });
})(document);
