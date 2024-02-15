(function (d) {
  let isValidate = false;
  const $dayInput = d.querySelector("#day");
  const $monthInput = d.querySelector("#month");
  const $yearInput = d.querySelector("#year");
  const $dayOutput = d.querySelector("#days-output");
  const $monthOutput = d.querySelector("#months-output");
  const $yearOutput = d.querySelector("#years-output");
  const $button = d.querySelector("#button");

  function showError(element, message) {
    element.parentElement.classList.add("error");
    element.nextElementSibling.textContent = message;
    isValidate = false;
  }

  function removeError(element) {
    element.parentElement.classList.remove("error");
    element.nextElementSibling.textContent = "";
    isValidate = true;
  }

  function validateEmptyFields(e) {
    let field = e.target;
    let fieldValue = e.target.value;
    if (fieldValue.length === 0 || fieldValue == "") {
      let message = "This field is required";
      showError(field, message);
    }
  }

  function validateDayField(e) {
    let field = e.target;
    let fieldValue = e.target.value;
    if (fieldValue < 1 || fieldValue > 31) {
      let message = "Must be a valid day";
      showError(field, message);
    } else {
      removeError(field);
    }
  }

  function validateMonthField(e) {
    let field = e.target;
    let fieldValue = e.target.value;
    if (fieldValue < 1 || fieldValue > 12) {
      let message = "Must be a valid month";
      showError(field, message);
    } else {
      removeError(field);
    }
  }

  function validateYearField(e) {
    let field = e.target;
    let fieldValue = e.target.value;
    let currentYear = new Date().getFullYear();
    if (fieldValue < 100 || fieldValue > currentYear) {
      let message = "Must be a valid year";
      showError(field, message);
    } else {
      removeError(field);
    }
  }

  function isValidDateField() {
    let inputYear = parseInt($yearInput.value);
    if (
      ($dayInput.value >= 31 &&
        [4, 6, 9, 11].includes(parseInt($monthInput.value))) ||
      ($dayInput.value >= 29 &&
        $monthInput.value == 2 &&
        !((inputYear % 4 == 0 && inputYear % 100 != 0) || inputYear % 400 == 0))
    ) {
      d.body.classList.add("error");
      $dayInput.nextElementSibling.textContent = "Must be a valid date";
      isValidate = false;
    } else {
      d.body.classList.remove("error");
      $dayInput.nextElementSibling.textContent = "";
    }

    validateEmptyFields({ target: $dayInput });
    validateEmptyFields({ target: $monthInput });
    validateEmptyFields({ target: $yearInput });

    if (isValidate) {
      let currentDate = new Date();
      let inputDate = new Date(
        inputYear,
        $monthInput.value - 1,
        $dayInput.value
      );

      let outputDate = currentDate.getTime() - inputDate.getTime();
      let yearOutputDate = Math.floor(
        outputDate / (1000 * 60 * 60 * 24 * 365.25)
      );
      outputDate -= yearOutputDate * (1000 * 60 * 60 * 24 * 365.25);
      let monthOutputDate = Math.floor(outputDate / (1000 * 60 * 60 * 24 * 30));
      outputDate -= monthOutputDate * (1000 * 60 * 60 * 24 * 30);
      let dayOutputDate = Math.floor(outputDate / (1000 * 60 * 60 * 24));

      $dayOutput.textContent = dayOutputDate;
      $monthOutput.textContent = monthOutputDate;
      $yearOutput.textContent = yearOutputDate;
    }
  }

  $dayInput.addEventListener("blur", validateEmptyFields);
  $monthInput.addEventListener("blur", validateEmptyFields);
  $yearInput.addEventListener("blur", validateEmptyFields);
  $dayInput.addEventListener("input", validateDayField);
  $monthInput.addEventListener("input", validateMonthField);
  $yearInput.addEventListener("input", validateYearField);
  $button.addEventListener("click", isValidDateField);
})(document);
