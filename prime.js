// <--Write a Program to check whether the entered number is a PRIME NUMBER or not.-->

prime=prompt("Enter the number to check prime or not:");
n=1;
for(i=2;i<=prime/2;i++)
{
    if(prime%i==0)
    {
        n++;
        break;
    }
} 
if(n==1)
{
        document.write("Give number is Prime:"+prime);
}   

else
{
    document.write("Give number is not Prime:"+prime);
}