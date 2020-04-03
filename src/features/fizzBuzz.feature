Feature: Fizz Buzz
  For multiples of three print Fizz instead of the number
  For the multiples of five print Buzz instead of the number
  For numbers which are multiples of both three and five print FizzBuzz instead of the number
 
  Scenario: print Fizz if number is multiples of 3
    Given the number 3
    When i call FizzBuzz 
    Then print Fizz

   Scenario: print Buzz if number is multiples of 5
    Given the number 5
    When i call FizzBuzz 
    Then print Buzz

    Scenario: print FizzBuzz if number is multiples of 5 and 3
    Given the number 15
    When i call FizzBuzz 
    Then print FizzBuzz

    Scenario: print number if number is not multiples of 5 and 3
    Given the number 2
    When i call FizzBuzz 
    Then print 2

    Scenario Outline: FizzBuzz multiples
    Given number is <x>
    When i call FizzBuzz
    Then print <result>

  Examples:
    | x | result | 
    | 1 | 1 | 
    | 9 | Fizz | 
    | 20 | Buzz |
    | 45 | FizzBuzz | 