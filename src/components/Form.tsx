import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { IFormData, IFormInterface } from '../types';

import FormInput from './FormComponents/FormInput';

const Form = ({ FormData }: { FormData: IFormData[] }) => {
  const [formState, setFormState] = useState({ sended: false, status: '' });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInterface>();

  const onSubmit: SubmitHandler<IFormInterface> = async (data) => {
    console.log(4444);
    try {
      setFormState({ sended: true, status: '' });
      const response = await fetch('https://xn--80afycfgbb0bt.xn--p1ai/polymer/', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'POST',
      });
      setFormState({ sended: false, status: 'ok' });
      setTimeout(() => {
        setFormState({ sended: false, status: '' });
      }, 2000);

    } catch (error) {
      setFormState({ sended: false, status: 'bad' });
      setTimeout(() => {
        setFormState({ sended: false, status: '' });
      }, 2000);
      console.log(error);
    }
    reset();
  };

  return (
    <div className='form-component'>
      <p className='form-component_title'>Оставьте заявку</p>
      <p className='form-component_subtitle'>Наши менедежеры свяжутся с вами</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form_item-wrap'>
          {FormData.map((el) => (
            <div key={el.name} className='form_item'>
              <div className='form_input'>
                <div className='form_item_img'>
                  <img alt='icon' src={el.img} />
                </div>
                <FormInput
                  messageDanger={el.messageDanger}
                  name={el.name}
                  placeholder={el.placeholder}
                  register={register}
                  validationValue={el.validationValue}
                />
              </div>
              {errors?.[el.name] && <p className='form_item-danger '>{errors[el.name]?.message}</p>}
            </div>
          ))}
        </div>
        <button
          className={`${!formState.sended
            ? formState.status === 'ok' || formState.status === 'bad'
              ? formState.status === 'ok'
                ? 'form_sended'
                : 'form_error'
              : ''
            : ''
            }${formState.status === 'ok' || formState.status === 'bad' || formState.sended
              ? ' button_blocked'
              : ''
            }`}
          disabled={
            formState.status === 'ok' || formState.status === 'bad' || (formState.sended && true)
          }
        >
          {!formState.sended ? (
            formState.status === 'ok' || formState.status === 'bad' ? (
              formState.status === 'ok' ? (
                'Заявка отправленна'
              ) : (
                'Произошла ошибка'
              )
            ) : (
              'Отправит заявку'
            )
          ) : (
            <div className='loader' />
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
