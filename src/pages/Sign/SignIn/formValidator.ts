import { object, string } from 'yup';

export default object().shape({
  email: string()
    .email('* Por favor informe um e-mail válido')
    .required('* E-mail é obrigatório'),
  password: string().required('*  Senha é obrigatório '),
});
