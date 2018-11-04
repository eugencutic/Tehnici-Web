window.onload = function()
{
    var showButton = document.getElementById("acousticVideoButton");
    var hideButton = document.getElementById("hideAcousticVideoButton");

    hideButton.style.display = "none";
    hideButton.onclick = hideAcousticVideos;
    showButton.onclick = showAcousticVideos;
}

function showAcousticVideos()
{
    var frameDiv = document.getElementById("acousticVideoFrameDiv");
    var hideButton = document.getElementById("hideAcousticVideoButton");
    var iframe1 = createFrame();
    var iframe2 = createFrame();
    var iframe3 = createFrame();

    iframe1.setAttribute("src", "https://www.youtube.com/embed/DPL_SV3n7IU");
    iframe1.setAttribute("class", "acousticVideoFrame");

    iframe2.setAttribute("src", "https://www.youtube.com/embed/hYgKpHgTCmg");
    iframe2.setAttribute("class", "acousticVideoFrame");

    iframe3.setAttribute("src", "https://www.youtube.com/embed/JxPj3GAYYZ0");
    iframe3.setAttribute("class", "acousticVideoFrame");

    var divChildren = frameDiv.getElementsByClassName("acousticVideoFrame");
    if(divChildren.length > 0)
        return;

    frameDiv.appendChild(iframe1);
    frameDiv.appendChild(iframe2);
    frameDiv.appendChild(iframe3);

    hideButton.style.display = "inline";
    this.style.display = "none";

}

function hideAcousticVideos()
{
    var frameDiv = document.getElementById("acousticVideoFrameDiv");
    var showButton = document.getElementById("acousticVideoButton");
    var divChildren = frameDiv.getElementsByClassName("acousticVideoFrame");

    frameDiv.removeChild(divChildren[0]);
    frameDiv.removeChild(divChildren[0]);
    frameDiv.removeChild(divChildren[0]);

    this.style.display = "none";
    showButton.style.display = "inline";
}

function createFrame()
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