const intlMonetary = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumIntegerDigits: 2,
});

const formatValue = (value: string | number): string =>
  intlMonetary.format(Number(value));

export default formatValue;
