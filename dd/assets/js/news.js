 var serverUrl = "http://47.107.132.192:8080/time/";
// var serverUrl = "http://localhost:8083/";


//新闻数据渲染
var parmNews ={
        startPos : 0,
        pageSize : 6,
        };
        $.ajax({
          type : 'post',
          url : serverUrl+'article/getNews',
          async :true,
          data:parmNews,
          success:function(data){
             if(data.states==200){
              var html ="";
          for(var i=0;i<data.newsList.length;i++){
          console.info(data.newsList[i]);
          html += ' <div class="col-md-6">  <div class="single-blog">   <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="blog-image">'+
          '<div class="blog-card"><div class="date">'+data.newsList[i].releaseTime+'</div><h4>'+data.newsList[i].title+'</h4>'+
                 '<p class="line-limit-length">'+data.newsList[i].briefContent+'</p><a href="blog-details.html?id='+data.newsList[i].id+'">详情>>'+
                 '<i class="fas fa-long-arrow-alt-right"></i></a></div></div></div>';
          
          }
          $("#newsList").html(html);
          }
          },
          });
          $.ajax({
              type : 'post',
              url : serverUrl+'article/countNews',
              async :true,
              data:parmNews,
              success:function(data){
                 if(data.states==200){
                        var html ="";
                     var page = Math.ceil(data.count/6); 
              for(var i=1;i<page+1;i++){
              html += '  <li class="page-item"><a class="page-link"style="cursor:hand" href="#" onclick="paging('+i+')">'+i+'</a></li>';
              
              }
              $("#page").html(html);
              }
              },
              });

              function paging(e){
                     var startPos = 0;
                     var pageSize = 6;
                            startPos+=6*(e-1);
                     var parmNews ={
                            startPos : startPos,
                            pageSize : pageSize,
                            };
                            $.ajax({
                              type : 'post',
                              url : serverUrl+'article/getNews',
                              async :true,
                              data:parmNews,
                              success:function(data){
                                 if(data.states==200){
                                  var html ="";
                              for(var i=0;i<data.newsList.length;i++){
                              console.info(data.newsList[i]);
                              html += ' <div class="col-md-6">  <div class="single-blog">   <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="blog-image">'+
                              '<div class="blog-card"><div class="date">'+data.newsList[i].releaseTime+'</div><h4>'+data.newsList[i].title+'</h4>'+
                                     '<p class="line-limit-length">'+data.newsList[i].briefContent+'</p><a href="blog-details.html?id='+data.newsList[i].id+'">详情'+
                                     '<i class="fas fa-long-arrow-alt-right"></i></a></div></div></div>';
                              
                              }
                              $("#newsList").html(html);
                              }
                              },
                              });
              }