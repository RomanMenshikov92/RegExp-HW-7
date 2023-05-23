/* eslint-disable no-console */
import Validator from './modules/validator';

/* проверка первой задачи: Никнейм */
const userNumber = [
  'Roman',
  'Ro-Man_lala',
  'Roman-92_Menshikov',
  'RomanMenshikov92_2pac',
  '92Roman',
  'Roman1992',
  '_Roman',
  'Roman_',
  'Ro0000man',
];

for (let i = 0; i < userNumber.length; i += 1) {
  console.log(
    `%s => ${Validator.validateUsername(userNumber[i])}`,
    userNumber[i],
  );
}

/* проверка второй задачи: Телефоны */
const phoneNumber = [
  '8 (927) 000-00-00',
  '+7 960 000 00 00',
  '+86 000 000 0000',
];

for (let i = 0; i < phoneNumber.length; i += 1) {
  console.log(
    `%s => ${Validator.validatePhoneNumber(phoneNumber[i])}`,
    phoneNumber[i],
  );
}
