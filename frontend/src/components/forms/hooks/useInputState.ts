import { useState } from 'react';

const useInputState = (value: string = '', isValid: boolean = false) => {
  const [val, setVal] = useState<string>(value);
  const [isValidVal, setIsValidVal] = useState<boolean>(isValid);

  return {
    value: val,
    setValue: setVal,
    isValid: isValidVal,
    setIsValid: setIsValidVal
  }
}

export default useInputState;
