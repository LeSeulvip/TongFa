 var serverUrl = "http://47.107.132.192:8080/time/";
// var serverUrl = "http://localhost:8083/";

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
};
var parm ={
    id : getQueryVariable('id'),
};
$.ajax({
    type : 'post',
    url : serverUrl+'article/getNewsById',
    async :true,
    data : parm,
    success:function(data){
       if(data.states==200){
         var html ="";
    // for(var i=0;i<data.newsList.length;i++){
    console.info(data.news);
     html += '<h3>'+data.news.title+'</h3>'+data.news.newsContent;
    
    // }
    $("#news").html(html);
    }
    },
    });