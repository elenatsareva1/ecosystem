// import {
//     isValid,
//     isExpirationDateValid,
//     isSecurityCodeValid,
//     getCreditCardNameByNumber
// } from 'creditcard.js';
// import v8n from 'v8n';
// import {
//     el, mount, setChildren, text
// } from "redom";

// const checkByValid = (input, regexp, errBlock, errName = 'err') => {
//     if(!regexp) {
//         input.style.borderColor = 'red';
//         input.after(errBlock);
//         errBlock.textContent = errName;
//         return false;
//     } else {
//         input.style.borderColor = 'black';
//         return true;
//     }
// };
  
// const removeErr = (input, errBlock) => {
//     input.addEventListener('input', ()=> {
//     errBlock.remove();
//     });
// }

// const paySystem = (checkSystem, div, input) => {
//     input.after(div);
//     div.textContent = `${checkSystem}`;
// }


// const valid = {
//   number: false,
//   // date: false,
//   // CVV: false,
//   // Email: false,
// };


// function unlockBtn2 (cardInput) { 
//   // console.log(cardInput)     
//   cardInput.disabled = Object.values(valid).includes(false);
// }
  
// export function validFunc (cardInput) {


 
//   let num =  false;
//   let date =  false;
//   let code =  false;
//   let mail =  false; 
  
//   function unlockBtn () { 
//     console.log(cardInput)     
//     if (num && date && mail && code) {
//       cardInput.disabled = false;
//     } else {
//       // cardInput.disabled = true;
//     }
//   }
 

//     const inputAll = Array.from(document.getElementsByClassName('input-card'));
//     const namePaySystem = document.getElementById('pay-system');
//     const erorDivNum =  el('div.error_div');
//     const erorDivDate =  el('div.error_div');
//     const erorDivCode =  el('div.error_div');
//     const erorDivEmail =  el('div.error_div');
//     const divPaySystem =  el('div.pay-system_div');
    
//     inputAll.forEach(input => {
//       input.addEventListener('blur', () => {
//           if(input.classList.contains(`input-number`)) {
//             removeErr(input, erorDivNum);
//             const validCardNumber = input.value.trim().split(' ').join('');
//             //
//             valid.number = isValid(validCardNumber)
//             console.log(valid)
//             console.log(Object.values(valid).includes(false))
//             unlockBtn2(cardInput)
            
//             if (checkByValid(input, isValid(validCardNumber), erorDivNum ,'Валидный номер/не менее 16 цифр')) {
//               paySystem(getCreditCardNameByNumber(validCardNumber), divPaySystem, input);
//               namePaySystem.textContent = getCreditCardNameByNumber(validCardNumber).toUpperCase();
//               num = true;
//               unlockBtn ();
//             } else {
//               namePaySystem.textContent = '****';
//               divPaySystem.remove();
//               num =  false;
//               unlockBtn ();
//             }
//           } 
    
//           if(input.classList.contains(`input-date`)) {
//             removeErr(input, erorDivDate);
//             const validCardDate = input.value.trim().split('/');
//             if(checkByValid(input, isExpirationDateValid(validCardDate[0], '20' + validCardDate[1]), erorDivDate,'Не раньше текущей даты')) {
//               date = true;
//               unlockBtn();
//             } else {
//               date = false;
//               unlockBtn();
//             }
//           } 
    
//           if(input.classList.contains(`input-code`)) {
//             removeErr(input, erorDivCode);
//             if(checkByValid(input, isSecurityCodeValid('', input.value.trim()), erorDivCode, '3 цифры на обороте карты')) {
//               code = true;
//               unlockBtn ();
//             } else {
//               code = false;
//               unlockBtn ();
//             }
//           } 
    
//           if(input.classList.contains(`input-email`)) {
//             removeErr(input, erorDivEmail)
//             if(checkByValid(input, v8n().pattern(/^[A-Z0-9._%+-]+@+[A-Z0-9-]+.+.[A-Z]{2,6}$/i).test(email.value.trim()), erorDivEmail, 'Введите валидный Email')) {
//               mail = true;
//               unlockBtn();
//             } else {
//               mail = false;
//               unlockBtn();
//             }
//           } 
//       });
//     });
// }
  
