window.onload = function()
{
    var divs = document.querySelectorAll("div");
    var paras = document.querySelectorAll("p");
    divs[0].addEventListener("click", function(e){alert("div" + " " + e.target + " " + e.currentTarget); e.stopPropagation(); }, true);
    paras[0].addEventListener("click", function(e){alert("p" + " " + e.target + " " + e.currentTarget)}, false);

    divs[1].addEventListener("click", function(e){alert("div" + " " + e.target + " " + e.currentTarget);}, false);
    paras[1].addEventListener("click", function(e){alert("p" + " " + e.target + " " + e.currentTarget)}, false);

    divs[2].onmousemove = function(e) {
        var b = divs[2].querySelectorAll("button")[0];
        b.style.left = e.pageX + "px";
        b.style.top = e.pageY + "px";
    }
}