// expressモジュールを読み込む
const express = require('express');

// expressApp create
const app = express();

const bodyParser = require('body-parser')

// webフォルダの中身を公開する
app.use(express.static('web'));

app.use(bodyParser.json());

//ルート（http://localhost）にアクセスしてきたときにhelloを返す
//app.get('/', (req, rest) => rest.send('hello'));


// JSON 返却
app.get('/api/v1/list', (req, rest) =>{

    setTimeout(function(){
        const todoList =[
            {id:1, title: '1111111111111111111111', done: true},
            {id:2, title: '2222222222222222222222', done: true},
            {id:3, title: '3333333333333333333333', done: false},
            {id:4, title: '4444444444444444444444', done: true}
        ];
    
        rest.json(todoList);
    }, 1000);

});


app.get('/api/v1/detail', (req, rest) =>{

    if(req.query.id == 1){
        setTimeout(function(){
            const todo = {id:1, title:'1111111111111111111111', done:true, date:'2020/01/01'};
            rest.json(todo);
        }, 4000)
    }else if(req.query.id == 2){
        setTimeout(function(){
            const todo = {id:1, title:'2222222222222222222222', done:true, date:'2020/01/01'};
            rest.json(todo);
        }, 1000)
    }else if(req.query.id == 4){
        setTimeout(function(){
            const todo = {id:1, title:'4444444444444444444444', done:true, date:'2020/01/01'};
            rest.json(todo);
        }, 1000)
    }

});

app.post('/api/v1/done',(req, rest) =>{

    const todoData = req.body;
    //const todoTitle = todoData.title;
    console.log(todoData)
    const todoItem = {
        id: todoData.id,
        title: todoData.title,
        done: true
    };

    rest.json(todoItem)

});



//ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));