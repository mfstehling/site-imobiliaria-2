import * as Yup from 'yup'

export const data = [
  {
    id: 'email',
    name: 'email',
    type: 'text',
    label: 'E-mail',
    placeholder: 'email@exemplo.com.br',
  },
  {
    id: 'password',
    name: 'password',
    type: 'secureText',
    label: 'Senha',
    placeholder: '*********',
  },
]

export const validation = Yup.object().shape({
  email: Yup.string().min(8, 'E-mail inválido').required('E-mail inválido'),
  password: Yup.string()
    .min(6, 'Senha precisa ter pelo menos 6 caracteres')
    .required('É preciso digitar uma senha'),
})

export const initial = {
  email: '',
  password: '',
}
