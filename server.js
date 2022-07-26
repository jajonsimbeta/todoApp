const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
app.use(express.urlencoded({ extended: true }));

MongoClient.connect('mongodb+srv://admin:<password>@cluster1.3ntf7.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    if (에러) return console.log(에러);
    app.listen(8080, function() {
        console.log('listening on 8080')
    })
    
});



app.get('/',function(request,respon){
    respon.sendFile(__dirname + '/index.html')
});

app.get('/write',function(request,respon){
    respon.sendFile(__dirname + '/write.html')
});

app.post('/add',function(request,respon){
    respon.send('전송완료');
    console.log(request.body); 
});