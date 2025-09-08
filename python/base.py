print('Hello World')

num=int(input("enter a num"))
j=num
rev=0
while num>0:
    rem=num%10 
    rev=rev*10+rem
    num=num//10  
if j==rev:
    print("the gn num is a palindrome")
else:
    print("the gn num is not a palindrome")      