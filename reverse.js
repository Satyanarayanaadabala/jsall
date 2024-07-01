// <-- Write a Program to find the reverse of the entered number. -->

num=parseInt(prompt("Enter the number to find reverse"));
sum=0;
while(num>0)
{
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);

}
alert("Revese of give number is:"+sum);

