
 var serverUrl = "http://47.107.132.192:8080/time/";
//  var serverUrl = "http://localhost:8083/";
var pram = {
    "type_id" : 1,
};
var content;
var id;
var type_id;
var title;
var editor;
$.ajax({
    type : 'post',
    url : serverUrl+'article/getArticles',
    data : {"type_id":1},
    success:function(data){
      content = data.article[0].content;
      id = data.article[0].articleId;
      type_id = data.article[0].type_id;
      title = data.article[0].title;
      $('#hxjz').html(content);
   },
});
$.ajax({
   type : 'post',
   url : serverUrl+'article/getArticles',
   data : {"type_id":2},
   success:function(data){
     content = data.article[0].content;
     id = data.article[0].articleId;
     type_id = data.article[0].type_id;
     title = data.article[0].title;
     $('#hxyw').html(content);
  },
});
$.ajax({
   type : 'post',
   url : serverUrl+'article/getArticles',
   data : {"type_id":3},
   success:function(data){
     content = data.article[0].content;
     id = data.article[0].articleId;
     type_id = data.article[0].type_id;
     title = data.article[0].title;
     $('#gsls').html(content);
  },
});


