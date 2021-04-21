var arr1 =[5,4,9,455,8];
var x = function(n)
{
    let odd = []
    for(i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2!== 0)
        {
            odd +=arr1[i] + " ";
        }
    }
    console.log(odd);
}
x(arr1)
