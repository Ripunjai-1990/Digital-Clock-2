function clock(){
    var pe = "AM";
    now = new Date();
    document.getElementById('hour').innerText= now.getHours();
    document.getElementById('minute').innerText = now.getMinutes();
    document.getElementById('second').innerHTML = now.getSeconds();
}
function setTime(){
    setInterval("clock()",1);
}
Object.addEventListener("load",script.js);