// console.log("Working")

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdownSelect = document.querySelector(".dropdown select");
const countryList = {
  // Define your countryList object here with currency codes
};

dropdownSelects.forEach((select) => {
    for (let currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = countryList[currCode];
      newOption.value = currCode;
      select.append(newOption);
    }
  });