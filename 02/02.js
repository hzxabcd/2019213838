window.addEventListener('load', function() {
    var info = new Array(8);
    info[0] = "课程名：Web程序设计 &nbsp;&nbsp; 上课时间：星期二1-2 &nbsp;&nbsp; 上课地点：n108 &nbsp;&nbsp; 授课教师：涂新辉";
    info[1] = "课程名：人工智能 &nbsp;&nbsp; 上课时间: 星期三1-2 &nbsp;&nbsp; 上课地点：n119 &nbsp;&nbsp; 授课教师：张连发";
    info[2] = "课程名：操作系统原理 &nbsp;&nbsp; 上课时间：星期五1-2 &nbsp;&nbsp; 上课地点：n118 &nbsp;&nbsp; 授课教师：叶俊民";
    info[3] = "课程名：软件工程 &nbsp;&nbsp; 上课时间：星期一3-4 &nbsp;&nbsp; 上课地点：n203 &nbsp;&nbsp; 授课教师：李蓉";
    info[4] = "课程名：操作系统原理 &nbsp;&nbsp; 上课时间：星期三3-4 &nbsp;&nbsp; 上课地点：n106 &nbsp;&nbsp; 授课教师：叶俊民";
    info[5] = "课程名：Web程序设计 &nbsp;&nbsp; 上课时间：星期四5-6 &nbsp;&nbsp; 上课地点：n110 &nbsp;&nbsp; 授课教师：涂新辉";
    info[6] = "课程名：信息检索技术 &nbsp;&nbsp; 上课时间：星期二7-8 &nbsp;&nbsp; 上课地点：n520 &nbsp;&nbsp; 授课教师：赵卫中";
    info[7] = "课程名：编译原理 &nbsp;&nbsp; 上课时间：星期四7-8 &nbsp;&nbsp; 上课地点：n113 &nbsp;&nbsp; 授课教师：杨青";

    var boxs = document.getElementsByClassName('course');
    var words = document.getElementsByClassName('words');

    function fn(e) {
        words[0].innerHTML = " ";
    }

    boxs[0].addEventListener('mouseover', function() {
        words[0].innerHTML = info[0];
        boxs[0].setAttribute('color', 'red');
    });
    boxs[1].addEventListener('mouseover', function() {
        words[0].innerHTML = info[1];
    });
    boxs[2].addEventListener('mouseover', function() {
        words[0].innerHTML = info[2];
    });
    boxs[3].addEventListener('mouseover', function() {
        words[0].innerHTML = info[3];
    });
    boxs[4].addEventListener('mouseover', function() {
        words[0].innerHTML = info[4];
    });
    boxs[5].addEventListener('mouseover', function() {
        words[0].innerHTML = info[5];
    });
    boxs[6].addEventListener('mouseover', function() {
        words[0].innerHTML = info[6];
    });
    boxs[7].addEventListener('mouseover', function() {
        console.log(i);
        words[0].innerHTML = info[7];
    });
    for (var i = 0; i < 8; i++) {
        boxs[i].addEventListener('mouseout', fn);
    }

})