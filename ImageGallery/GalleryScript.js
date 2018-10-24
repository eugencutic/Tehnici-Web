window.onload = function()
{
    var SGImg = document.getElementById("SGImg");
    SGImg.onclick = function()
    {
        SGImg.src = "explorer.jpg";
        SGImg.onclick = function()
        {
            SGImg.src = "SG.jpg";
        }
    };
    SGImg.onmouseover = function()
    {
        SGImg.style.width = "98%";
        SGImg.style.border = "solid 2px green";
        SGImg.style.borderRadius = "10px";
    }
    SGImg.onmouseleave = function()
    {
        SGImg.style.width = "100%";
        SGImg.style.border = "none";
    }
}
