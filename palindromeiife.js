let num = [456,'shs',121]
var result = [];
var answer = [];
(function(n)
{
    for(i=0;i<n.length;i++)
    {
        result +=n[i];
        var count =0 ;
        for(j=0;j<result.length;j++)
        {
            if(result[j]==result[(result.length-1)-j])
            count++ 
        }
        if(count == result.length )
        {
            answer += result+ ' ';
        }
        result = "";
    }
    return answer;
    }
)(num)
console.log(answer);