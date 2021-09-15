setInterval(() => {
    let create_time = Math.round(new Date('2021-08-15 21:44:00').getTime() / 1000); 
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
  
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }

    currentTimeHtml ="<img class='avatar' src='https://tenapi.cn/qqimg/?qq=1144626145' title='云总'><img class='avatar' src='https://tenapi.cn/qqimg/?qq=1216624392' title='茵宝'> <br/><img class='heart' src='https://gitee.com/gentletk/picbed/raw/master/images/heart.png' title='在一起'><div id='runtime'>" + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' 时 ' + time[3] + ' 分 ' + time[4] + ' 秒 ' + '</div>';

    document.getElementById("loveTimeZone").innerHTML = currentTimeHtml;
  }, 1000);