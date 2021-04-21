(function(str)
{
    var str1 = str.split(" ");
    for(i=0;i<str1.length;i++)
    {
        str1[i] = str1[i][0].toUpperCase()+str1[i].slice(1);
    }
    let v = str1.join(" ");
    console.log(v);
})("what is your name");
