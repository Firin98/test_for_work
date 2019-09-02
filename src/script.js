'use strict';
window.onload = () => {
  let form = document.getElementById('data_form');
  let name = document.getElementById('name');
  let twoName = document.getElementById('two_name');
  let surname = document.getElementById('surname');
  let phoneNumber = document.getElementById('phone_number');
  let email = document.getElementById('email');
  let fields = form.querySelectorAll('form input[type="text"]');

  let saveName,saveTwoName,saveSurname,savephoneNumber,saveEmail;

  function validPhone() {
    let re = /^\d[\d\(\)\ -]{8,9}\d$/;
    let phoneValid = document.getElementById('phone_number').value;
    let valid = re.test(phoneValid);
    let output = "";
    if (!valid) form.classList.add('err');
    else form.classList.remove('err');
    if (valid) document.getElementById('message').innerHTML = " ";
    else if(phoneValid.length < 10) output = 'Номер телефона слишком короткий!';
    else if(phoneValid.length > 11) output = 'Номер телефона слишком длинный!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
  }

  phoneNumber.onchange = validPhone;

  name.value = localStorage.getItem('name');
  twoName.value = localStorage.getItem('two_name');
  surname.value = localStorage.getItem('surname');
  phoneNumber.value = localStorage.getItem('phone_number');
  email.value = localStorage.getItem('email');

  document.getElementById('edit').onclick = (e) => {
    e.preventDefault();
    form.classList.add('edit');

    for (var i = 0; i < fields.length; i++) {
      fields[i].removeAttribute('readonly');
    }

    saveName = name.value;
    saveTwoName = twoName.value;
    saveSurname = surname.value;
    savephoneNumber = phoneNumber.value;
    saveEmail = email.value;
  }


  document.getElementById('save').onclick = (e) => {
    e.preventDefault();
    if(validPhone()) {
      form.classList.remove('edit');
      for (var i = 0; i < fields.length; i++) {
        fields[i].setAttribute('readonly', 'readonly');
      }

      localStorage.setItem('name', name.value);
      localStorage.setItem('two_name', twoName.value);
      localStorage.setItem('surname', surname.value);
      localStorage.setItem('phone_number', phoneNumber.value);
      localStorage.setItem('email', email.value);

    }
  }

  document.getElementById('cancel').onclick = (e) => {
    e.preventDefault();
    form.classList.remove('edit');
    name.value = saveName;
    twoName.value = saveTwoName;
    surname.value = saveSurname;
    phoneNumber.value = savephoneNumber;
    email.value = saveEmail;

    localStorage.setItem('name', saveName);
    localStorage.setItem('two_name', saveTwoName);
    localStorage.setItem('surname', saveSurname);
    localStorage.setItem('phone_number', savephoneNumber);
    localStorage.setItem('email', saveEmail);

    for (var i = 0; i < fields.length; i++) {
      fields[i].setAttribute('readonly', 'readonly');
    }
  }


}

