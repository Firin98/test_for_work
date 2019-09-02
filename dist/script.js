'use strict';

window.onload = function () {
  var form = document.getElementById('data_form');
  var name = document.getElementById('name');
  var twoName = document.getElementById('two_name');
  var surname = document.getElementById('surname');
  var phoneNumber = document.getElementById('phone_number');
  var email = document.getElementById('email');
  var fields = form.querySelectorAll('form input[type="text"]');
  var saveName, saveTwoName, saveSurname, savephoneNumber, saveEmail;

  function validPhone() {
    var re = /^\d[\d\(\)\ -]{8,9}\d$/;
    var phoneValid = document.getElementById('phone_number').value;
    var valid = re.test(phoneValid);
    var output = "";
    if (!valid) form.classList.add('err');else form.classList.remove('err');
    if (valid) document.getElementById('message').innerHTML = " ";else if (phoneValid.length < 10) output = 'Номер телефона слишком короткий!';else if (phoneValid.length > 11) output = 'Номер телефона слишком длинный!';else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
  }

  phoneNumber.onchange = validPhone;
  name.value = localStorage.getItem('name');
  twoName.value = localStorage.getItem('two_name');
  surname.value = localStorage.getItem('surname');
  phoneNumber.value = localStorage.getItem('phone_number');
  email.value = localStorage.getItem('email');

  document.getElementById('edit').onclick = function (e) {
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
  };

  document.getElementById('save').onclick = function (e) {
    e.preventDefault();

    if (validPhone()) {
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
  };

  document.getElementById('cancel').onclick = function (e) {
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
  };
};