import mailIcon from '../assets/images/mail-icon.svg';
import telephone from '../assets/images/telephone.svg';
import userIcon from '../assets/images/user-icon.svg';
import type { IFormData } from '../types';

const FormDataContacts: IFormData[] = [
  {
    name: 'name',
    messageDanger: 'Введите имя',
    placeholder: 'Иван',
    img: userIcon
  },
  {
    name: 'email',
    messageDanger: 'Введите email',
    placeholder: 'example@mail.com',
    validationValue:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    img: mailIcon
  },
  {
    name: 'number',
    messageDanger: 'Введите номер',
    placeholder: '89231161541',
    validationValue: /^((\+7|7|8)+([0-9]){10})$/,
    img: telephone
  }
];

const FormDataModal: IFormData[] = [
  {
    name: 'name',
    messageDanger: 'Введите имя',
    placeholder: 'Иван',
    img: userIcon
  },
  {
    name: 'number',
    messageDanger: 'Введите номер',
    placeholder: '89231161541',
    validationValue: /^((\+7|7|8)+([0-9]){10})$/,
    img: telephone
  }
];

export { FormDataContacts, FormDataModal };
