const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));




const articleController=require(process.cwd()+'/controller/articles');
app.get('/',function(req,res){
    res.send("welcome to Home page!");
});
app.get('/articles',articleController.getArticleList);
app.post('/article',articleController.addArticle);
app.delete('/article',articleController.deleteArticle);



app.listen(3007, function () {
    //node app.js   
    console.log("http://localhost:3007/");
})