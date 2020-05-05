function hoge(){
    
    var request = new XMLHttpRequest();
    var URL = 'http://localhost:3000/api/v1/list';
    request.open('GET', URL, true);
    request.responseType = 'json';

    request.onload = function(){
        var data = this.response;
        console.log(data);
    }

    request.send();

}

function apiFetch(){

    fetch('http://localhost:3000/api/v1/list')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            console.log(JSON.stringify(myJson));
        })
        .then(function(myJson){
            console.log(myJson);
        });
}