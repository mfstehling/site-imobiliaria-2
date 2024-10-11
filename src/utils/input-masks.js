import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const PHONE_MASK = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

const CNPJ_MASK = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]

const HOUR_MASK = [/\d/, /\d/, ':', /\d/, /\d/]

const CPF_MASK = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]

const CPF_MASK_ = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
]

const CREDIT_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

const EXPIRE_DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

const CEP_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

export const formatCurrencyToMask = (value) => {
  const splitValue = Number(value).toString().split('.')
  const formated = `${splitValue[0]},${
    splitValue?.[1]
      ? splitValue?.[1].length > 1
        ? splitValue?.[1]
        : `${splitValue?.[1]}0`
      : '00'
  }`
  if (!Number(splitValue[0])) {
    return value
  }
  return formated
}

const CURRENCY_MASK = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
})

const PERCENTAGE_MASK = createNumberMask({
  prefix: '',
  suffix: '%',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  integerLimit: 3,
  allowNegative: false,
  allowLeadingZeroes: false,
})

export {
  PHONE_MASK,
  CURRENCY_MASK,
  CNPJ_MASK,
  CPF_MASK,
  CEP_MASK,
  PERCENTAGE_MASK,
  HOUR_MASK,
  CREDIT_MASK,
  EXPIRE_DATE_MASK,
  CPF_MASK_,
  DATE_MASK,
}

export const formatCPF = (cpf) => {
  const clear = cpf.replace(/[^\d]/g, '')
  return clear.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatCNPJ = (cnpk) => {
  const clear = cnpk.replace(/[^\d]/g, '')
  return clear.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}
