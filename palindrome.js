// <--- Write a Program to check whether the entered number is a PALINDROME NUMBER or not.--->

num=parseInt(prompt("Enter the number is palindrom or Not"));
palind=num;
sum=0;
while(num>0)
{
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);

}
if(palind==sum)
    {
        document.write("Enter Number is palindrom")
    }
    else{
        document.write("Enter Number not palindrom");
    }