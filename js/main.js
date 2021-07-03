//Smooth rolling
$('a').click(function () {
    $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
});
//footer
var now = new Date();
var hour = now.getHours();
var year = now.getFullYear();
//Greeting
if(hour < 3){
    document.getElementById("hi").innerHTML = "You're still awake."
}else if (hour < 5){
    document.getElementById("hi").innerHTML = "Up early"
}else if (hour < 11){
    document.getElementById("hi").innerHTML = "Good morning"
}else if (hour < 13){
    document.getElementById("hi").innerHTML = "Did you eat at lunch?"
}else if (hour < 17){
    document.getElementById("hi").innerHTML = "Good afternoon"
}else if (hour < 19){
    document.getElementById("hi").innerHTML = "It's half late..."
}else if (hour < 22){
    document.getElementById("hi").innerHTML = "Happy laziness in progress"
}else {
    document.getElementById("hi").innerHTML = "Good night"
};
//footer year
document.getElementById("year").innerHTML = year;