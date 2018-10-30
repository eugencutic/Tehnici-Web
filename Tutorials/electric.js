window.onload = function()
{

    document.getElementById("bluesVideoButton").onclick = getBluesVideoFrame;
    document.getElementById("hideBluesVideoButton").style.display = "none";
    document.getElementById("hideBluesVideoButton").onclick = hideBluesVideoFrame;

    document.getElementById("jazzVideoButton").onclick = getJazzVideoFrame;
    document.getElementById("hideJazzVideoButton").style.display = "none";
    document.getElementById("hideJazzVideoButton").onclick = hideJazzVideoFrame;

    document.getElementById("rockVideoButton").onclick = getRockVideoFrame;
    document.getElementById("hideRockVideoButton").style.display = "none";
    document.getElementById("hideRockVideoButton").onclick = hideRockVideoFrame;

    document.getElementById("metalVideoButton").onclick = getMetalVideoFrame;
    document.getElementById("hideMetalVideoButton").style.display = "none";
    document.getElementById("hideMetalVideoButton").onclick = hideMetalVideoFrame;
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
    var frameDiv = document.getElementById("bluesVideoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName("bluesVideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById("bluesVideoButton").style.display = "inline";
    document.getElementById("hideBluesVideoButton").style.display = "none";
}

function getJazzVideoFrame()
{
    var iframe = getVideoFrame();
    var frameDiv = document.getElementById("jazzVideoFrameDiv");

    var hideButton = document.getElementById("hideJazzVideoButton");

    var divChildren = frameDiv.getElementsByClassName("jazzVideoFrame");
    if(divChildren.length > 0)
        return;

    iframe.setAttribute("src", "https://www.youtube.com/embed/ksq8Q2n7a70");
    iframe.setAttribute("class", "jazzVideoFrame");

    frameDiv.appendChild(iframe);
    hideButton.insertAdjacentElement('afterend', frameDiv);

    document.getElementById("jazzVideoButton").style.display = "none";
    hideButton.style.display = "inline";
}

function hideJazzVideoFrame()
{
    var frameDiv = document.getElementById("jazzVideoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName("jazzVideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById("jazzVideoButton").style.display = "inline";
    document.getElementById("hideJazzVideoButton").style.display = "none";
}

function getRockVideoFrame()
{
    var iframe = getVideoFrame();
    var frameDiv = document.getElementById("rockVideoFrameDiv");

    var hideButton = document.getElementById("hideRockVideoButton");

    var divChildren = frameDiv.getElementsByClassName("rockVideoFrame");
    if(divChildren.length > 0)
        return;

    iframe.setAttribute("src", "https://www.youtube.com/embed/3MbaGJN2ioQ");
    iframe.setAttribute("class", "rockVideoFrame");

    frameDiv.appendChild(iframe);
    hideButton.insertAdjacentElement('afterend', frameDiv);

    document.getElementById("rockVideoButton").style.display = "none";
    hideButton.style.display = "inline";
}

function hideRockVideoFrame()
{
    var frameDiv = document.getElementById("rockVideoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName("rockVideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById("rockVideoButton").style.display = "inline";
    document.getElementById("hideRockVideoButton").style.display = "none";
}

function getMetalVideoFrame()
{
    var iframe = getVideoFrame();
    var frameDiv = document.getElementById("metalVideoFrameDiv");

    var hideButton = document.getElementById("hideMetalVideoButton");

    var divChildren = frameDiv.getElementsByClassName("metalVideoFrame");
    if(divChildren.length > 0)
        return;

    iframe.setAttribute("src", "https://www.youtube.com/embed/kV-2Q8QtCY4");
    iframe.setAttribute("class", "metalVideoFrame");

    frameDiv.appendChild(iframe);
    hideButton.insertAdjacentElement('afterend', frameDiv);

    document.getElementById("metalVideoButton").style.display = "none";
    hideButton.style.display = "inline";
}

function hideMetalVideoFrame()
{
    var frameDiv = document.getElementById("metalVideoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName("metalVideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById("metalVideoButton").style.display = "inline";
    document.getElementById("hideMetalVideoButton").style.display = "none";
}