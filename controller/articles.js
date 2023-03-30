let{
    articles
}=require(process.cwd()+'/models/articles');
const ejs=require('ejs');
const fs = require('fs');


const getArticleList=async(req,res)=>{
    fs.readFile('./view/index.ejs',function(err,nowData){
        var template=nowData.toString();
        var dictionary={data:articles};
        var html=ejs.render(template,dictionary);
        res.status(200).end(html);
   });
}

const addArticle=async(req,res)=>{
    let data=req.body;
    let length=articles.length;
    data.id=articles[length-1].id+1;
    articles.push(data);
    res.status(200).send({message:"Added success"});
}

const deleteArticle=async(req,res)=>{
    let id=req.body.id;
    articles = articles.filter((article)=>{
       return article.id !=id
    });
    res.status(200).send({message:"Deleted successfully"});
}

module.exports={
    getArticleList,
    addArticle,
    deleteArticle
}



