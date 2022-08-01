const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours.', () => {
  const aberto = 'The zoo is open';
  const fechado = 'The zoo is closed';
  it('Retorna todos horarios caso eu nao passe parametros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Retorna a mensagem de aberto ou fechado quando passa certo o parametro', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(fechado);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(fechado);
  });
  it('Retorna um erro casa a abreviação esteja errado', () => {
    expect(() => getOpeningHours('Monday', '09:00-AN')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Retorna a mensagem esperada mesmo passando o parametro com letras maiusculas e minusculas', () => {
    expect(getOpeningHours('TUESDAY', '09:00-AM')).toBe(aberto);
  });
  it('Retorna uma mensagem caso eu escreva o horario errado', () => {
    expect(() => getOpeningHours('Monday', 'B7:A0-AM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '09:80-AM')).toThrowError('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Monday', '10:Z1-AM')).toThrowError('The minutes should represent a number');
    expect(() => getOpeningHours('Tuesday', '25:01-AM')).toThrowError('The hour must be between 0 and 12');
  });
  it('Retorna uma mensagem caso eu escreva o dia errado', () => {
    expect(() => getOpeningHours('Munday', '09:00-BM')).toThrowError('The day must be valid. Example: Monday');
  });
});
