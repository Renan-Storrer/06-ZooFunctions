const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('O parametro não é uma string?', () => {
    expect(handlerElephants(459)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Parametro é uma string?', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Retorna "UNDEFINED" se a função não tem parametro?', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('o parametro nao é uma função?', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });
});
