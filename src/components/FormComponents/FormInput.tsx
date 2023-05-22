import React from 'react';
import type { UseFormRegister } from 'react-hook-form';

import type { IFormInterface } from '../../types';

const FormInput = ({
  name,
  messageDanger,
  register,
  // errors,
  validationValue,
  placeholder
}: {
  name: keyof IFormInterface;
  messageDanger: string;
  register: UseFormRegister<IFormInterface>;
  // errors: FieldErrors<IFormInterface>;
  validationValue?: RegExp;
  placeholder: string;
}) => (
  <input
    placeholder={placeholder}
    type='text'
    {...register(name, {
      required: messageDanger,

      pattern: {
        value: validationValue || /./,
        message: 'Данные введеный неверно'
      }
    })}
  />
);

export default FormInput;
