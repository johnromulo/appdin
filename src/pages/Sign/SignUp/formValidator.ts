import { object, string, boolean } from 'yup';

export default object().shape({
  firstName: string().required('* Nome é obrigatório'),
  lastName: string().required('* Sobrenome é obrigatório'),
  email: string()
    .email('* Por favor informe um e-mail válido')
    .required('* E-mail é obrigatório'),
  password: string().required('*  Senha é obrigatório '),
  terms: boolean().required('*  Temos de uso é obrigatório'),
});
