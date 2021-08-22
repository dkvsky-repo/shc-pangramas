import { esPangrama, sustituirCaracteresEspeciales } from './esPangrama.js';

const oraciones = {
  alfabeto: 'abcdefghijklmnñopqrstuvwxyz',
  'menos de 27': 'abcde',
  'mas de 27 no pangrama': 'abcdefghijklmnNNNopqrstuvwxyz',
  'oracion pangrama':
    'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja',
};

test('sustituirCaracteresEspeciales("áéíóúü") debe devolver "aeiouu"', () => {
  expect(sustituirCaracteresEspeciales('áéíóúü')).toMatch(/aeiouu/);
});

test('sustituirCaracteresEspeciales("ÁÉíóúü") debe devolver "aeiouu"', () => {
  expect(sustituirCaracteresEspeciales('áéíóúü')).toMatch(/aeiouu/);
});

test('sustituirCaracteresEspeciales("murciélago hindú") debe devolver "murcielago hindu"', () => {
  expect(sustituirCaracteresEspeciales('murciélago hindú')).toMatch(
    /murcielago hindu/
  );
});

test('esPangrama("abcdefghijklmnñopqrstuvwxyz") should return "true"', () => {
  expect(esPangrama(oraciones.alfabeto)).toBe(true);
});

test('esPangrama("abcde") debe retornar "false"', () => {
  expect(esPangrama(oraciones['menos de 27'])).toBe(false);
});

test('esPangrama("abcdefghijklmnNNNopqrstuvwxyz") debe retornar "false"', () => {
  // false porque falta la ñ
  expect(esPangrama(oraciones['mas de 27 no pangrama'])).toBe(false);
});

test('esPangrama() de una oración pangrama debe retornar "true"', () => {
  expect(esPangrama(oraciones['oracion pangrama'])).toBe(true);
});
