let n =[45,8,4,7,5,9]
var prime =function(a){
    var  result=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=a[i]+" "
        }
    }
    return result;
 
}
console.log(prime(n));