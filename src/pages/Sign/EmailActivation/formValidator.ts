import { object, string } from 'yup';

export default object().shape({
  code: string()
    .min(6, '* O código deve ter no mínimo 6 numeros')
    .max(6, '* O código deve ter no máximo 6 numeros')
    .required('* O código é obrigatório '),
});
