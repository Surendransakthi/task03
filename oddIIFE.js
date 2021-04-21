var arr1 =[5,4,9,455,8];
var v =[];
(function (n) {

    for(i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2!== 0)
        {
            v +=arr1[i] + " ";
        }
    }
    
})(arr1);
console.log(v)