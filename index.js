// expressモジュールを読み込む
const express = require('express');

// expressApp create
const app = express();

// webフォルダの中身を公開する
app.use(express.static('web'));

//ルート（http://localhost）にアクセスしてきたときにhelloを返す
//app.get('/', (req, rest) => rest.send('hello'));


// JSON 返却
app.get('/api/v1/list', (req, rest) =>{
    const todoList =[
        {title: '1111111111111111111111', done: true},
        {title: '2222222222222222222222', done: true},
        {title: '3333333333333333333333', done: true},
        {title: '4444444444444444444444', done: true}
    ];

    rest.json(todoList);
});


//ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));