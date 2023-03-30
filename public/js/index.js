$(function(){
});

function add(){
   var title=$("#title").val();
   var description=$("#description").val();
   var author=$("#author").val();
   if(title=="" || description=="" || author==""){
    alert("The new data content cannot be empty");
   }else{
    $.ajax({
        type:"post",
        url:"/article",
        data:{title:title,description:description,author:author},
        success:function(res){
            alert(res.message);
            window.location.href="/articles";
        }
    });
   }
}

function deletes(id){
    $.ajax({
        type:"delete",
        url:"/article",
        data:{id:id},
        success:function(res){
            alert(res.message);
            window.location.href="/articles";
        }
    });
}