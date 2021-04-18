var rq=new XMLHttpRequest();
rq.open('GET','https://restcountries.eu/rest/v2/all',true);
rq.send();
rq.onload=function (){
    var country=JSON.parse(this.response);
    for(var i in country){
        try{
         var cname=country[i].name;
         var latlong=country[i].latlng;
         if(latlong==0) {
             ("Lattitue and long not found");
         }
         weatherdata(cname,...latlong);
        }
        catch(e){
        console.log("invalid coordiantes"+cname);
        }
    }
}
var weatherdata=function(name,lat,lng){
var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d0b86f6466536ab96e5e54155ded040c`;
var request= new XMLHttpRequest();
request.open('GET',URL,true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log("latitude: "+lat+" longitude: "+lng+" temperature: "+data.main.temp);
}
}

