var num =[5,4,9,45,8];
var v =0;
var x = function(arr1)
{
    for(i=0;i<arr1.length;i++)
    {
        v += arr1[i];
    }
}
x(num);
console.log(v);