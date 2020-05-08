import {
  InputHTMLAttributes,
  ChangeEventHandler,
} from 'react';
import { InputNames } from '.';

interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: InputNames;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default IAppInputProps;
