function myFunc()
{
    var SGImg = document.getElementById("SGImg");
    SGImg.src = "explorer.jpg";
}

window.onload = function()
{
    document.getElementById("SGImg").onclick=myFunc;
}