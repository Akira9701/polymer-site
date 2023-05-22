export interface IAdvantagesItem {
  name: string;
  comment: string;
  img: string;
}

export interface IFormInterface {
  number: string;
  email: string;
  name: string;
}

export interface IFormDanger {
  [key: string]: {
    message: string;
  };
}

export interface IFormData {
  name: keyof IFormInterface;
  messageDanger: string;
  placeholder: string;
  validationValue?: RegExp;
  img?: string;
}

export interface IPriceData {
  name: string;
  size?: string;
  mer: string;
  price: string;
  rowspan?: number;
}

export interface IColorsData {
  ral: string;
  color: string;
}
