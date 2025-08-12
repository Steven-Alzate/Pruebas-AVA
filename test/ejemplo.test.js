import test from 'ava';
import { multiplicar } from '../multiplicacion.js';

test('multiplicación de 4 y 5', t => {
    t.is(multiplicar(4, 5), 20);
});

test('multiplicación con cero', t => {
    t.is(multiplicar(10, 0), 0);
});

test('multiplicación con negativos', t => {
    t.is(multiplicar(-3, 6), -18);
});