export default class Validator {
  /*
    Первая задача Никнейм
  */
  static validateUsername(name) {
    if (!name) {
      return false;
    }

    /*
      валидация на отсутствие цифр, "_" и "-" в начале строки;
      валидация на содержание только латиницы, "_" и "-";
      валидация на отсутствие цифр, "_" и "-" в конце строки.
    */
    const conditionOne = /^[^\d_-][\w-]*[^\d_-]$/.test(name);

    /*
      валидация на количество символов от 4 и выше
    */
    const conditionTwo = /\d{4,}/.test(name);

    return conditionOne && !conditionTwo;
  }

  /*
    вторая задача Телефоны
  */
  static validatePhoneNumber(tel) {
    if (!tel) {
      return '';
    }

    /* забираем цифры из телефона */
    const numberTel = tel.replace(/[^\d]/g, '');

    /*
      если номер из 11 цифр и первая цифра 8,
      то меняем её на 7 и добавляем спереди +,
      иначе просто добавляем спереди плюс.
    */
    if (numberTel.length === 11 && numberTel.indexOf(8) === 0) {
      return `+7${numberTel.slice(1, 11)}`;
    }
    return `+${numberTel}`;
  }
}
