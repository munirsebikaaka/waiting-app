"use strict";
const createLogInBody = {
  GETNUM: "input-number",
  GETPASSWORD: "input-password",
  logInNewAcc: {
    GETFIRSTNAME: "first-name",
    GETLASTNAME: "last-name",
    GETPASSWORD: "new-acc-password",
    GETNUMBER: "new-acc-numbe",
  },
};
const inputNumber = document.getElementById(createLogInBody.GETNUM);
const inputPassword = document.getElementById(createLogInBody.GETPASSWORD);
const inputFirstName = document.getElementById(
  createLogInBody.logInNewAcc.GETFIRSTNAME
);
const inputLastName = document.getElementById(
  createLogInBody.logInNewAcc.GETLASTNAME
);
const inputNewAccPassword = document.getElementById(
  createLogInBody.logInNewAcc.GETPASSWORD
);
const inputNewAccNumber = document.getElementById(
  createLogInBody.logInNewAcc.GETNUMBER
);
const acount1 = {
  names: "Aseri messi",
  country: "Uganda",
  password: 11111111,
  sex: "male",
  phoneNumber: "0753509743",
};
const acount2 = {
  names: "paul star",
  country: "Uganda",
  password: 222222222,
  sex: "male",
  phoneNumber: "0753576743",
};
const acount3 = {
  names: "abdallah rahman",
  country: "qator",
  password: 33333333,
  sex: "male",
  phoneNumber: "0753786743",
};
const acount4 = {
  names: "carol holic",
  country: "Uganda",
  password: 44444444,
  sex: "female",
  phoneNumber: "0753576243",
};
const acount5 = {
  names: "Cute Xhaks",
  country: "Uganda",
  password: 55555555,
  sex: "female",
  phoneNumber: "0753576700",
};
const acounts = [acount1, acount2, acount3, acount4, acount5];
const checkCoditionsForOldAcount = (acc) => {
  acc.forEach((ACOUNT) => {
    setTimeout(() => {
      if (!inputNumber.value) {
        document.querySelector(".message").textContent = "plez in put number";
      } else if (!+inputPassword.value) {
        document.querySelector(".message").textContent = "plez in put password";
      } else if (
        inputNumber.value === ACOUNT.phoneNumber &&
        +inputPassword.value === ACOUNT.password
      ) {
        document.querySelector(".working-account").classList.add("hidden");
        document.querySelector(
          ".message"
        ).textContent = `Hello and welcome mr/mrs ${ACOUNT.names.split(" ")[0]}
         but we are so xori cos the app is still under construction`;
        console.log();
      }
    }, 4000);
  });
};
document.querySelector(".btn").addEventListener("click", () => {
  checkCoditionsForOldAcount(acounts);
});
