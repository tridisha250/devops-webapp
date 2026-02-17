function showTime(){
    const now = new Date();
    document.getElementById("status").innerHTML =
        "Live server response at: " + now.toLocaleString();
}
