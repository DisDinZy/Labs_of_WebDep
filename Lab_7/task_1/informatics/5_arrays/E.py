n = int(input())
a = list(map(int, input().split()))
print("YES" if any(a[i] * a[i-1] > 0 for i in range(1, n)) else "NO")
