def bubbleSort(a):
    n = len(a)
    for i in range(n-1):
        b = False
        for j in range(0, n-i-1):

            if a[j] > a[j + 1]:
                b = True
                a[j], a[j + 1] = a[j + 1], a[j]
        if not b:
            return
a = [10,4,7,6,5,3,2,8,9,1]

bubbleSort(a)

print("Sorted array is:")
for i in range(len(a)):
    print(a[i], end=" ")
print("\n")
