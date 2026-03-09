import math
a, b = int(input()), int(input())
print(*(i for i in range(a, b + 1) if math.isqrt(i)**2 == i))
