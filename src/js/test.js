import {
    isValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    getCreditCardNameByNumber
  } from 'creditcard.js';
  
  import v8n from 'v8n';
  
  import {
    el, mount, setChildren
  } from "redom";
  
  
  import Inputmask from "inputmask";
  
  
  const form = el('form.form', '')
  
  // const inputCardNumber1 = el('div.input-item', [el('div.input-item-title', 'Введите номер карты'), el('div.error#error-num', el('input.input-number#number', {autocomplete: 'off'}))])
  const inputCardNumber1 = el('div.input-item', [el('div.input-item-title', 'Введите номер карты'), el('label', {for: 'number'}, el('input.input.input-number#number', {autocomplete: 'off'}))])
  const inputCardDate1 = el('div.input-item', [el('div.input-item-title', 'Введите срок действия карты'), el('label', el('input.input.input-date#date', {autocomplete: 'off'}))])
  const inputCardCode1 = el('div.input-item', [el('div.input-item-title', 'Введите cvv карты'), el('label', el('input.input.input-code#code', {autocomplete: 'off'}))])
  const inputEmail1 = el('div.input-item', [el('div.input-item-title', 'Введите email'), el('label', el('input.input.input-email#email'))])
  
  const erorDivNum =  el('div.error_div')
  const erorDivDate =  el('div.error_div')
  const erorDivCode =  el('div.error_div')
  const erorDivEmail =  el('div.error_div')
  
  const btnForm = el('button.button', 'Оплатить', {disabled: 'true'})
  
  setChildren(form, [inputCardNumber1, inputCardDate1, inputCardCode1, inputEmail1, btnForm])
  setChildren(document.body, form);
  
  const maskValidcardNum = document.getElementById('error-num')
  console.log(maskValidcardNum)
  
  const inputCardNumber = document.getElementById('number')
  const inputCardDate = document.getElementById('date')
  const inputCardCode = document.getElementById('code')
  const email = document.getElementById('email')
  console.log(inputCardNumber)
  Inputmask({"mask": "9999 9999 9999 9999", placeholder: ""}).mask(inputCardNumber);
  Inputmask({"mask": "99[/99]", placeholder: "" }).mask(inputCardDate);
  Inputmask({"mask": "999", placeholder: "" }).mask(inputCardCode);
  
  // 4893 4703 3104 1845
  const inputAll = Array.from(document.getElementsByTagName('input'));
  inputAll.map(input => {
    input.addEventListener('blur', ()=> {
        if(input.classList.contains(`input-number`)) {
          const validCardNumber = input.value.trim().split(' ').join('')
          checkByValid(input, isValid(validCardNumber), erorDivNum ,'Не менее 16 цифр' )
          // console.log(checkByRegexp(input, isValid(validCardNumber), 'Не менее 16 цифр' ))
          // console.log(input.value)
          //   if(isValid(validCardNumber)) {
          //     num = true;
          //     input.classList.remove('input-error')
          //     erorDivNum.remove();
          //     unlock();
          //   }else {
          //     num = false
          //     input.after(erorDivNum)
          //     input.classList.add('input-error')
          //     unlock ()
          //   }
        } 
  
        if(input.classList.contains(`input-date`)) {
          const validCardDate = inputCardDate.value.trim().split('/')
          console.log(validCardDate[0], '20' + validCardDate[1])
          checkByValid(input, isExpirationDateValid(validCardDate[0], '20' + validCardDate[1]), erorDivDate )
            // if(isExpirationDateValid(validCardDate[0], '20' + validCardDate[1])) {
            //   console.log('valid')
            //   date = true
            //   input.classList.remove('input-error')
            //   erorDivDate.remove();
            //   unlock();
            // } else {
            //   console.log(`unvalid`)
            //   date = false
            //   input.after(erorDivDate)
            //   input.classList.add('input-error')
            //   unlock ()
            // }
        } 
  
        if(input.classList.contains(`input-code`)) {
          checkByValid(input, isSecurityCodeValid('', input.value.trim()), erorDivCode, '3 цифры на обороте карты' )
          // if (isSecurityCodeValid('', input.value)) {
          //   code = true;
          //   input.classList.remove('input-error')
          //   erorDivCode.remove();
          //   unlock();
          // }else {
          //   console.log(`unvalid`)
          //   code = false
          //   input.after(erorDivCode)
          //   input.classList.add('input-error')
          //   unlock ()
          // }
        } 
  
        if(input.classList.contains(`input-email`)) {
          checkByValid(input, v8n().pattern(/^[A-Z0-9._%+-]+@+[A-Z0-9-]+.+.[A-Z]{2,6}$/i).test(email.value.trim()), erorDivEmail, 'Введите валидный email' )
          // if(v8n().pattern(/^[A-Z0-9._%+-]+@+[A-Z0-9-]+.+.[A-Z]{2,6}$/i).test(email.value.trim())) {
          //   mail = true
          //   input.classList.remove('input-error')
          //   erorDivEmail.remove();
          //   unlock();
          // }else {
          //   console.log(`unvalid`)
          //   mail = false
          //   input.after(erorDivEmail)
          //   input.classList.add('input-error')
          //   unlock ()
          // }
        } 
    })
  })
  
  
  const checkByValid = (input, regexp, errBlock, errName = 'err') => {
    console.log(input)
    if(!regexp) {
      input.style.borderColor = 'red';
      input.after(errBlock)
   
      errBlock.textContent = errName;
      return false
    } else {
      input.style.borderColor = 'black';
      errBlock.remove()
    }
  };
  
  
  
  
  
  
  let num =  false;
  let date =  false;
  let code =  false;
  let mail =  false; 
  
  function unlock () {
    if (num && date && mail && code) {
      console.log(('asd'))
      btnForm.disabled = false;
    } else {
      btnForm.disabled = true;
    }
  }
  
  /////////////////////////index.js

  // const formWrapper = el('div.form-wrapper')
// const form = el('form.form', '')
// const inputCardNumberCreate = el('div.input-item', [el('div.input-item-title', 'Введите номер карты'), el('label', {for: 'number'}, el('input.input.input-card.input-number#number', {autocomplete: 'off', placeholder: 'e.g. 1234 5678 9123 0000'}))])
// const inputCardDateCreate = el('div.input-item', [el('div.input-item-title', 'Введите срок действия карты'), el('label', el('input.input.input-card.input-date#date', {autocomplete: 'off', placeholder: '12/24'}))])
// const inputCardCodeCreate = el('div.input-item', [el('div.input-item-title', 'Введите cvv карты'), el('label', el('input.input.input-card.input-code#code', {autocomplete: 'off', placeholder: '123'}))])
// const inputEmailCreate = el('div.input-item', [el('div.input-item-title', 'Введите email'), el('label', el('input.input.input-card.input-email#email', {placeholder: 'JohnDone@gmail.com'}))])
// const btnForm = el('button.button', 'Оплатить ', {disabled: 'true'})

// setChildren(form, [inputCardNumberCreate, inputCardDateCreate, inputCardCodeCreate, inputEmailCreate, btnForm])
// setChildren(formWrapper, form)
// setChildren(document.body, formWrapper);








// const inputCardNumber = document.getElementById('number');
// const inputCardDate = document.getElementById('date');
// const inputCardCode = document.getElementById('code');
// const email = document.getElementById('email');
// Inputmask({"mask": "9999 9999 9999 9999[99]",placeholder: ""}).mask(inputCardNumber);
// Inputmask({"mask": "99[/99]", placeholder: "" }).mask(inputCardDate);
// Inputmask({"mask": "999", placeholder: "" }).mask(inputCardCode);



// 4893 4703 3104 1845
// 6390 0230 9005 7121 77


// const checkByValid = (input, regexp, errBlock, errName = 'err') => {
//   if(!regexp) {
//     input.style.borderColor = 'red';
//     input.after(errBlock)
 
//     errBlock.textContent = errName;
//     return false;
//   } else {
//     input.style.borderColor = 'black';
   
//     return true;
//   }
// };

// const removeErr = (input, errBlock) => {
//   input.addEventListener('input', ()=> {
//     errBlock.remove()
//   })

// }
// const divPaySystem =  el('div.error_div')
// const paySystem = (checkSystem, div, input) => {
//     input.after(div)
//     div.textContent = `${checkSystem}`
//   }


// function validFunc () {
//   const inputAll = Array.from(document.getElementsByClassName('input-card'));
//   const erorDivNum =  el('div.error_div')
//   const erorDivDate =  el('div.error_div')
//   const erorDivCode =  el('div.error_div')
//   const erorDivEmail =  el('div.error_div')

//   let num =  false;
//   let date =  false;
//   let code =  false;
//   let mail =  false; 

//   function unlockBtn () {
//     if (num && date && mail && code) {
//       console.log(('asd'))
//       cardInput.btnForm.disabled = false;
//     } else {
//       cardInput.btnForm.disabled = true;
//     }
//   }

//   inputAll.forEach(input => {
//     input.addEventListener('blur', () => {
//         if(input.classList.contains(`input-number`)) {
//           removeErr(input, erorDivNum)
//           const validCardNumber = input.value.trim().split(' ').join('')
//           if (checkByValid(input, isValid(validCardNumber), erorDivNum ,'Не менее 16 цифр' )) {
//             paySystem(getCreditCardNameByNumber(validCardNumber), divPaySystem, input)
//             num = true
//             unlockBtn () 
//           } else {
//             divPaySystem.remove()
//             num =  false;
//             unlockBtn () 
//           }
//         } 
  
//         if(input.classList.contains(`input-date`)) {
//           removeErr(input, erorDivDate)
//           const validCardDate = input.value.trim().split('/')
//           if(checkByValid(input, isExpirationDateValid(validCardDate[0], '20' + validCardDate[1]), erorDivDate,'Не раньше текущей даты' )) {
//             date = true
//             unlockBtn () 
//           } else {
//             date =  false;
//             unlockBtn () 
//           }
//         } 
  
//         if(input.classList.contains(`input-code`)) {
//           removeErr(input, erorDivCode)
//           if(checkByValid(input, isSecurityCodeValid('', input.value.trim()), erorDivCode, '3 цифры на обороте карты' )) {
//             code = true
//             unlockBtn () 
//           } else {
//             code =  false;
//             unlockBtn () 
//           }
//         } 
  
//         if(input.classList.contains(`input-email`)) {
//           removeErr(input, erorDivEmail)
//           if(checkByValid(input, v8n().pattern(/^[A-Z0-9._%+-]+@+[A-Z0-9-]+.+.[A-Z]{2,6}$/i).test(email.value.trim()), erorDivEmail, 'Введите валидный Email' )) {
//             mail = true
//             unlockBtn () 
//           } else {
//             mail =  false;
//             unlockBtn () 
//           }
//         } 

//     })
//   })
  
// }

// validFunc ()
