function showTime() {


    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "A.M.";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "P.M.";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    setTimeout(showTime, 1000);
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;



}
showTime();