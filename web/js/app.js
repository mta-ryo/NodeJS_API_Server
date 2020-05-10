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

function getTodoList(){

    fetch('http://localhost:3000/api/v1/list',{
        method:'GET'
    })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            myJson.forEach(function(value){
                if(value.done){
                    var tag = '<li>'+ value.title +'<li>'
                    $('#done').append(tag);

                    getTodoDetail(value.id)

                }else{
                    var tag = '<li>'+ value.title +'<li>'
                    $('#notyet').append(tag);
                }
            })

            
            
        })
}

function getTodoDetail(id){

    var url = 'http://localhost:3000/api/v1/detail';
    console.log(url+'?id='+id);
    fetch(url+'?id='+id)
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(value){
            var tag = '<li>'+ value.title +'<li>'
            $('#detail').append(tag);
        })
}


function todoDone(){
    const data = {"id": 1 , "title": "done11111111111", "done":false}
    fetch('http://localhost:3000/api/v1/done',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    }).then(function(response){
        console.log(response);
    })
    .catch(error => console.error(error)
    );
}