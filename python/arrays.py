# arr = [22,34,55,66,77]

# print(arr[3])

# arr[3] = 99

# print(arr)


def linear_search(arr,target):

    for i in range(len(arr)) :
        if arr[i] == target :
            return i 
    return -1

index = linear_search([23,45,66,77],66)
print(index)