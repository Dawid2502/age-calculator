const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const countAgeBtn = document.querySelector(".count-age-btn");
const inputLabel = document.querySelectorAll("label");
const errorText = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input");
const ageDays = document.querySelector(".age-days");
const ageMonths = document.querySelector(".age-months");
const ageYears = document.querySelector(".age-years");

let birthDate;
const actualDate = new Date();
const actualYear = actualDate.getFullYear();
const daysInChoosenMonth = new Date(
  inputYear.value,
  inputMonth.value,
  0
).getDate();

const showError = (index, message) => {
  inputs[index].style.border = "1px solid #f00";
  errorText[index].textContent = message;
  errorText[index].style.color = "#f00";
};

const checkConditions = () => {
  const inputDayValue = parseInt(inputDay.value);
  const inputMonthValue = parseInt(inputMonth.value);
  const inputYearValue = parseInt(inputYear.value);

  if (inputDayValue > daysInChoosenMonth) {
    showError(0, "Twój miesiąc nie ma tylu dni");
  }
  if (inputMonthValue < 1 || inputMonthValue > 12) {
    showError(1, "Podaj liczbę od 1 do 12");
  }
  if (inputYearValue > actualYear) {
    showError(2, "Twój rok urodzenia nie może być większy od aktualnego");
  }
};

const checkInputs = () => {
  const inputDayValue = parseInt(inputDay.value);
  const inputMonthValue = parseInt(inputMonth.value);
  const inputYearValue = parseInt(inputYear.value);

  inputs.forEach((input) => {
    input.style.border = "1px solid #ccc";
  });

  errorText.forEach((error) => {
    error.textContent = "";
    error.style.color = "#000";
  });
  
  birthDate = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);

  if (
    !isNaN(inputDayValue) &&
    !isNaN(inputMonthValue) &&
    !isNaN(inputYearValue) &&
    inputDayValue !== "" &&
    inputMonthValue !== "" &&
    inputYearValue !== ""
  ) {
    checkConditions();
    if (![...errorText].some((error) => error.textContent !== "")) {
      ageCalculate();
    }
  } else {
    inputs.forEach((input, index) => {
      if (input.value === "") {
        showError(index, "Uzupełnij to pole!!!");
      } else {
        checkConditions();
      }
    });
  }
};

const ageCalculate = () => {
  const ageInMilliseconds = actualDate - birthDate;

  const countYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  const countMonths = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const countDays = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  ageDays.textContent = countDays;
  ageMonths.textContent = countMonths;
  ageYears.textContent = countYears;
};

countAgeBtn.addEventListener("click", checkInputs);

// const checkConditions = () => {

//     if (inputDay.value > daysInChoosenMonth) {
//         inputDay.style.border = "1px solid #f00";
//         errorText[0].textContent = "Twój miesiąc nie ma tylu dni";
//       }
//       if (inputMonth.value < 1 || inputMonth.value > 12) {
//         inputMonth.style.border = "1px solid #f00";
//         errorText[1].textContent = "Podaj liczbę od 1 do 12";
//       }
//       if (inputYear.value > actualYear) {
//         inputYear.style.border = "1px solid #f00";
//         errorText[2].textContent =
//           "Twój rok urodzenia nie może być większy od aktualnego";
//       }
// }

// const checkInputs = () => {
//   if (inputDay.value != "" && inputMonth.value != "" && inputYear.value != "") {

//     checkConditions();
//     if (![...errorText].some((error) => error.textContent !== "")) {
//       ageCalculate();
//     }
//   } else {
//     inputs.forEach((input, index) => {
//       if (input.value === "") {
//         input.style.border = "1px solid #f00";
//         errorText[index].style.color = "#f00";
//         errorText[index].textContent = "Uzupełnij to pole!!!";
//       } else {

//         checkConditions();

//       }
//     });
//   }
// };

// const ageCalculate = () => {
//   const ageInMilliseconds = actualDate - birthDate;

//   const countYears = Math.floor(
//     ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
//   );
//   const countMonths = Math.floor(
//     (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
//       (30.44 * 24 * 60 * 60 * 1000)
//   );
//   const countDays = Math.floor(
//     (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
//   );

//   ageDays.textContent = countDays;
//   ageMonths.textContent = countMonths;
//   ageYears.textContent = countYears;
// };

// countAgeBtn.addEventListener("click", checkInputs);
