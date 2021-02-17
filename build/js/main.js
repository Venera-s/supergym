'use strict';

(function () {
  var inputTel = document.getElementById('tel-field');
  var MIN_TITLE_LENGTH = 22;

  var phoneMask = function () {
    window.iMask.phone(inputTel, {
      mask: '+{7} (000) 000 - 00 - 00',
    });
  };

  phoneMask();

  var onInputTelInput = function () {
    var numberLength = inputTel.value.length;

    if (numberLength < MIN_TITLE_LENGTH) {
      inputTel.setCustomValidity('Введите 10 цифр номера телефона.');
    } else {
      inputTel.setCustomValidity('');
    }
    inputTel.reportValidity();
  };

  inputTel.addEventListener('input', onInputTelInput);
})();
