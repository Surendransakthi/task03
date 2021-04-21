var str=function (string) {
    var sent = string.split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 let v = sent.join(" ");
 return v;
}
 console.log(str("super star to power star"));