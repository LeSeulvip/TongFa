var serverUrl = 'http://47.107.132.192:8080/time/';
// var serverUrl = "http://localhost:8083/";
$.ajax({
  type: 'post',
  url: serverUrl + 'types/getTypes',
  data: '',
  success: function(data) {
    if (data.states == 200) {
      var html = '';
      //  $("#typeIntro").html("");
      for (var i = 0; i < data.types.length; i++) {
        $('#typeIntro').html('');
        console.info(data.types[i].typeName);
        html += '<div class="col-md-6">  <div class="single-service">' + '<img src="assets/img/service/audit.png" alt="icon"><div class="service-content">' + '<h5>' + data.types[i].typeName + '</h5> <p>' + data.types[i].typeIntro + '</p> </div> </div></div>';
      }
      $('#typeIntro').append(html);
      $('#typeIntro').trigger('create');
    }
  }
});
//获取团队照片
$.ajax({
  type: 'post',
  url: serverUrl + 'team/getTeams',
  data: '',
  async: true,
  success: function(data) {
    if (data.states == 200) {
      var html = '';

      for (var i = 0; i < data.teams.length; i++) {
        console.info(data.teams[i].userName);
        html += '    <div class="single-member text-center" >  <div class="member-img">     <img src="assets/img/team/team-1.jpg" alt="">' + '    <div class="member-content">   <h5>' + data.teams[i].userPosition + '</h5>     <p>' + data.teams[i].userIntro + '</p>' + '</div>  </div>  <div class="member-name">      <h5>' + data.teams[i].userName + '</h5>  </div></div>';
      }
      $('#teamLeader').html(html);
      //初始化轮播图插件
      const ourTeam = $('.our-team');
      if (ourTeam) {
        ourTeam.owlCarousel({
          smartSpeed: 1000,
          loop: true,
          mouseDrag: true,
          loop: true,
          touchDrag: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        });
      } else {
        null;
      }
    }
  }
});
var parm = {
  size: 6,
  typeId: 1
};
$.ajax({
  type: 'post',
  url: serverUrl + 'team/getImgType',
  async: true,
  success: function(data) {
    if (data.states == 200) {
      var html = '';
      //  $("#bannerImg").html("");
      for (var i = 0; i < data.types.length; i++) {
        console.info(data.types[i].typeName);
        html += '   <li class="filter-btn" id="imgType' + data.types[i].typeId + '" onclick="imgType(' + data.types[i].typeId + ',' + data.types[i].typeId + ')">' + data.types[i].typeName + '</li>';
      }
      $('#bannerImg').html(html);
      $('#bannerImg')
        .children(':first')
        .addClass('active-btn');
      // alert($("#bannerImg").children(":first").hasClass('active-btn'));
      // $("#imgType1").addClass("active-btn");
    }
  }
});
$.ajax({
  type: 'post',
  url: serverUrl + 'team/getImgByType',
  data: parm,
  async: true,
  success: function(data) {
    if (data.states == 200) {
      var html = '';

      for (var i = 0; i < data.img.length; i++) {
        console.info(data.img[i].src);
        html += '<div class="col-lg-4 col-md-5 grid-item cat3 cat4">\n <a href="' + data.img[i].src + '" class="light-box">\n' + '<div class="port-img">\n<img src="' + data.img[i].src + '" alt="' + data.img[i].title + '" class="img-fluid">\n</div>\n<i class="fas fa-plus">\n</i>\n' + '</a>\n</div>\n';
      }
      $('#imgimg').html(html);
      $('.light-box').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
      // $("#container").trigger("create");
    }
  }
});
//切换企业相册重新渲染数据
function imgType(e, id) {
  // alert($("#imgType"+e).hasClass('active-btn'));
  if ($('#imgType' + e).hasClass('active-btn')) {
    return;
  } else {
    $('#imgType' + e).addClass('active-btn');
    $('#imgType' + e)
      .siblings()
      .removeClass('active-btn');
  }
  // e.addClass("active-btn");
  var parm1 = {
    size: 6,
    typeId: id
  };
  $.ajax({
    type: 'post',
    url: serverUrl + 'team/getImgByType',
    data: parm1,
    async: true,
    success: function(data) {
      if (data.states == 200) {
        var html = '';
        for (var i = 0; i < data.img.length; i++) {
          console.info(data.img[i].src);
          html += '<div class="col-lg-4 col-md-5 grid-item cat3 cat4"> <a href="' + data.img[i].src + '" class="light-box"">' + '<div class="port-img"><img src="' + data.img[i].src + '" alt="' + data.img[i].title + '" class="img-fluid"></div><i class="fas fa-plus"></i>' + '</a></div>';
        }
        $('#imgimg').html(html);
        // $("#imgimg").trigger("create");
        $('.light-box').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      }
    }
  });
}

//新闻数据渲染
var parmNews = {
  startPos: 0,
  pageSize: 2
};
$.ajax({
  type: 'post',
  url: serverUrl + 'article/getNews',
  async: true,
  data: parmNews,
  success: function(data) {
    if (data.states == 200) {
      var html = '';
      for (var i = 0; i < data.newsList.length; i++) {
        console.info(data.newsList[i]);
        html +=
          ' <div class="col-md-6">  <div class="single-blog">   <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="blog-image">' +
          '<div class="blog-card"><div class="date">' +
          data.newsList[i].releaseTime +
          '</div><h4>' +
          data.newsList[i].title +
          '</h4>' +
          '<p class="line-limit-length">' +
          data.newsList[i].briefContent +
          '</p><a href="blog-details.html?id=' +
          data.newsList[i].id +
          '">详情>>' +
          '<i class="fas fa-long-arrow-alt-right"></i></a></div></div></div>';
      }
      $('#news').html(html);
    }
  }
});
