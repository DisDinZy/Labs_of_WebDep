n = int(input())
a = input().split()
print(*(a[i] for i in range(0, n, 2)))
