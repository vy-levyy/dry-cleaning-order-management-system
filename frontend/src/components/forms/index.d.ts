import { HTMLAttributes } from "react";

declare namespace Form {
  type FormNames =
    | 'authorization'
    | 'registration';

  type Forms = {
    [key in FormNames]: JSX.Element;
  };

  type InputNames =
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword';

  type RegistrationInputNames = Extract<
    InputNames,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmedPassword'
  >;

  type InputDescriptions = {
    [key in InputNames]: {
      name: string;
      type: string;
      tooltip: string;
      className: string;
    }
  }

  type RegistrationInputs = {
    [key in RegistrationInputNames]: JSX.Element;
  }

  type InputWrappers = {
    [key in InputNames]: JSX.Element;
  }

  type Inputs = {
    [key in InputNames]: JSX.Element;
  }

  type ChangeHandlers = {
    [key in InputNames]: () => void;
  }

  type Tooltips = {
    [key in InputNames]: string[];
  }
}

export = Form;
export as namespace Form;
