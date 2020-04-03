import { defineFeature, loadFeature } from 'jest-cucumber';
import fizzBuzz from '../fizzBuzz';

const feature = loadFeature('./src/features/fizzBuzz.feature');

defineFeature(feature, test => {
  test('print Fizz if number is multiples of 3', ({ given, when, then }) => {
    let number: number;
    let result: string;
    let expectedResult: string = 'Fizz';

    given('the number 3', () => {
      number = 3;
    });

    when('i call FizzBuzz', () => {
      result = fizzBuzz(number);
    });

    then('print Fizz', () => {
      expect(result).toBe(expectedResult);
    });
  }),
    test('print Buzz if number is multiples of 5', ({ given, when, then }) => {
      let number: number;
      let result: string;
      let expectedResult: string = 'Buzz';

      given('the number 5', () => {
        number = 5;
      });

      when('i call FizzBuzz', () => {
        result = fizzBuzz(number);
      });

      then('print Buzz', () => {
        expect(result).toBe(expectedResult);
      });
    }),
    test('print FizzBuzz if number is multiples of 5 and 3', ({
      given,
      when,
      then
    }) => {
      let number: number;
      let result: string;
      let expectedResult: string = 'FizzBuzz';

      given('the number 15', () => {
        number = 15;
      });

      when('i call FizzBuzz', () => {
        result = fizzBuzz(number);
      });

      then('print FizzBuzz', () => {
        expect(result).toBe(expectedResult);
      });
    }),
    test('print number if number is not multiples of 5 and 3', ({
      given,
      when,
      then
    }) => {
      let number: number;
      let result: string;
      let expectedResult: string = '2';

      given('the number 2', () => {
        number = 2;
      });

      when('i call FizzBuzz', () => {
        result = fizzBuzz(number);
      });

      then('print 2', () => {
        expect(result).toBe(expectedResult);
      });
    }),
    test('FizzBuzz multiples', ({ given, when, then }) => {
      let number: number;
      let result: string;
      let expectedResult: string = '2';

      given(/^number is (.*)$/, (givenNumberStr: string) => {
        const givenX = parseInt(givenNumberStr, 10);
        number = givenX;
      });

      when('i call FizzBuzz', () => {
        result = fizzBuzz(number);
      });

      then(/^print (.*)$/, (givenResult: string) => {
        expect(result).toBe(givenResult);
      });
    });
});
