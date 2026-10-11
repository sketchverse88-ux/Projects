def fizzBuzz(n: int):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

def sumDigits(num):
    num = str(num)
    digits = list(num)
    value = 0
    for digit in digits:
        value += int(digit)
    return value

print(sumDigits(4721))
fizzBuzz(1)