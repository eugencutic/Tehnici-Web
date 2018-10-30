window.onload = function()
{
    document.getElementById("bluesVideoButton").onclick = getBluesVideoFrame;
    document.getElementById("hideBluesVideoButton").style.display = "none";
    document.getElementById("hideBluesVideoButton").onclick = hideBluesVideoFrame;
}

function getBluesVideoFrame()
{
    var frameDiv = document.getElementById("bluesVideoFrameDiv");
    
    var hideButton = document.getElementById("hideBluesVideoButton");

    var divChildren = frameDiv.getElementsByClassName("bluesVideoFrame");
    if(divChildren.length > 0)
        return;
    var iframe = getVideoFrame();
    iframe.setAttribute("src", "https://www.youtube.com/embed/4O_YMLDvvnw");
    iframe.setAttribute("class", "bluesVideoFrame");
    frameDiv.appendChild(iframe);
    hideButton.insertAdjacentElement('afterend', frameDiv);

    document.getElementById("bluesVideoButton").style.display = "none";
    hideButton.style.display = "inline";
}

function getVideoFrame()
{
    var iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "300px");
    iframe.setAttribute("display", "inline-block");
    return iframe;
}

function hideBluesVideoFrame()
{
    var frameDiv = document.getElementById("videoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName("bluesVideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById("bluesVideoButton").style.display = "inline";
    document.getElementById("hideBluesVideoButton").style.display = "none";
}