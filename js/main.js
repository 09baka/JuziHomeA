//底部部分
var now = new Date();
var hour = now.getHours();
var year = now.getFullYear();
//打招呼
if (hour < 3) {
    document.getElementById("hi").innerHTML = "还不快去睡觉啦！";
} else if (hour < 5) {
    document.getElementById("hi").innerHTML = "你起的好早哇！";
} else if (hour < 11) {
    document.getElementById("hi").innerHTML = "早呀！充电完毕！";
} else if (hour < 13) {
    document.getElementById("hi").innerHTML = "午饭吃了啥？";
} else if (hour < 17) {
    document.getElementById("hi").innerHTML = "唔姆，困困的下午";
} else if (hour < 19) {
    document.getElementById("hi").innerHTML = "已经半晚了呢...";
} else if (hour < 22) {
    document.getElementById("hi").innerHTML = "愉快划水ing";
} else {
    document.getElementById("hi").innerHTML = "晚安安~好梦梦~";
};
//年
document.getElementById("year").innerHTML = year;
//嘤嘤嘤
console.log("Welcome to my homepage");
