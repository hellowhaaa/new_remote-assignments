def find_max(numbers):
    max_number = -float('inf')
    for number in numbers:
        if number > max_number:
            max_number = number
    return str(max_number)


def find_position(numbers, target):
    if target in numbers:
        for i in range(len(numbers)):
            if numbers[i] == target:
                return str(i)
    else:
        return '-1'


print(find_max([1, 2, 4, 5]))
print(find_max([5, 2, 7, 1, 6]))

print(find_position([5, 2, 7, 1, 6], 5))
print(find_position([5, 2, 7, 1, 6], 7))
print(find_position([5, 2, 7, 7, 7, 1, 6], 7))
print(find_position([5, 2, 7, 1, 6], 8))
