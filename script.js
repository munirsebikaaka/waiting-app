"use strict";
const createLogInBody = {
  GETNUM: "input-number",
  GETPASSWORD: "input-password",
  logInNewAcc: {
    GETFIRSTNAME: "first-name",
    GETLASTNAME: "last-name",
    GETPASSWORD: "new-acc-password",
    GETNUMBER: "new-acc-number",
  },
};
const inputNumber = document.getElementById(createLogInBody.GETNUM);
const inputPassword = document.getElementById(createLogInBody.GETPASSWORD);
const inputFirstName = document.getElementById(
  createLogInBody.logInNewAcc.GETFIRSTNAME
);
const inputCountry = document.getElementById(
  createLogInBody.logInNewAcc.GETLASTNAME
);
const inputNewAccPassword = document.getElementById(
  createLogInBody.logInNewAcc.GETPASSWORD
);
const inputNewAccNumber = document.getElementById(
  createLogInBody.logInNewAcc.GETNUMBER
);
const messageCap = document.querySelector(".message");
const btnNewAcount = document.querySelector(".btn-new");
const currentAccCell = document.querySelector(".working-account");
const newAccCell = document.querySelector(".new-acount");
const btnLogIntoAcc = document.querySelector(".btn-login");
const btnBack = document.querySelector(".back");
const btnLogIntoNewAcc = document.querySelector(".cul");
const trues = document.querySelector(".true");

/////////////////////////////////////////////////
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
////////////////
btnLogIntoAcc.addEventListener("click", () => {
  const curentAcountsCheck = (acc) => {
    acc.forEach((curentAcount) => {
      if (
        inputNumber.value === curentAcount.phoneNumber &&
        +inputPassword.value === curentAcount.password
      ) {
        setTimeout(() => {
          currentAccCell.classList.add("hidden");
          messageCap.textContent = `Hello and welcome ${
            curentAcount.names.split(" ")[0]
          } `;
        }, 2000);
        messageCap.textContent = `please wait a moment `;
      } else {
        console.log("wrong");
      }
    });
  };
  curentAcountsCheck(acounts);
});
////////////////////////
btnNewAcount.addEventListener("click", function () {
  newAccCell.classList.remove("hidden");
  currentAccCell.classList.add("hidden");
});
btnBack.addEventListener("click", () => {
  newAccCell.classList.add("hidden");
  currentAccCell.classList.remove("hidden");
});

///////////
let acount6 = {};
btnLogIntoNewAcc.addEventListener("click", () => {
  if (
    inputFirstName.value &&
    inputCountry.value &&
    inputNewAccPassword.value &&
    inputNewAccNumber.value
  ) {
    let sir = inputFirstName.value;
    let cou = inputCountry.value;
    let pass = inputNewAccPassword.value;
    let number = inputNewAccNumber.value;
    acount6.names = sir;
    acount6.country = cou;
    acount6.password = pass;
    acount6.phoneNumber = number;
    newAccCell.classList.add("hidden");
    messageCap.textContent = `Hello and welcome ${
      acount6.names.split(" ")[0]
    } `;
    acounts.push(acount6);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const curentAcountsCheckNew = (acc) => {
      if (
        inputNumber.value === acc.phoneNumber &&
        +inputPassword.value === acc.password
      ) {
        setTimeout(() => {
          newAccCell.classList.add("hidden");
          messageCap.textContent = `Hello and welcome ${
            acc.names.split(" ")[0]
          } `;
        }, 2000);
        messageCap.textContent = `please wait a moment `;
      } else {
        console.log("wrong");
      }
    };
    curentAcountsCheckNew(acount6);
    console.log(acount6);
  }
});
trues.addEventListener("click", function () {
  messageCap.classList.add("hidden");
  newAccCell.classList.remove("hidden");
});
