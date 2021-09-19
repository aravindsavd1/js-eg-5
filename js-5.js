function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    return n*factorial(n-1);
}
let n = window.prompt("Enter number to find factorial:")
window.alert(factorial(n))