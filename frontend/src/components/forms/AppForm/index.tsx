import formElements from './formElements';

const AppForm: React.FunctionComponent<Form.IAppFormProps> = ({ appType }) => {
  return formElements[appType];
}

export default AppForm;
