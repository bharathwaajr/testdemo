var req=new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send(0);
req.onload=function(){
    var result=JSON.parse(req.response);
    console.log(result);
}