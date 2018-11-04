window.onload = function()
{
    document.getElementById("renaissanceVideoButton").onclick = function() 
    {
        showVideoFrame("renaissance", "https://www.youtube.com/embed/nowK9J1A_MU");
    }
    document.getElementById("hideRenaissanceVideoButton").onclick = function()
    {
        hideVideoFrame("renaissance");
    }
    document.getElementById("hideRenaissanceVideoButton").style.display = "none";

    document.getElementById("baroqueVideoButton").onclick = function() 
    {
        showVideoFrame("baroque", "https://www.youtube.com/embed/BC7JNE8TdmY");
    }
    document.getElementById("hideBaroqueVideoButton").onclick = function()
    {
        hideVideoFrame("baroque");
    }
    document.getElementById("hideBaroqueVideoButton").style.display = "none";
    

    document.getElementById("romanticVideoButton").onclick = function() 
    {
        showVideoFrame("romantic", "https://www.youtube.com/embed/WmxZ6pAva-I");
    }
    document.getElementById("hideRomanticVideoButton").onclick = function()
    {
        hideVideoFrame("romantic");
    }
    document.getElementById("hideRomanticVideoButton").style.display = "none";

    document.getElementById("modernVideoButton").onclick = function() 
    {
    showVideoFrame("modern", "https://www.youtube.com/embed/K2VWDYo8gGc");
    }
    document.getElementById("hideModernVideoButton").onclick = function()
    {
        hideVideoFrame("modern");
    }
    document.getElementById("hideModernVideoButton").style.display = "none";

}

function showVideoFrame(genre, source)
{
    var frameDiv = document.getElementById(genre + "VideoFrameDiv");
    var hideButton = document.getElementById("hide" + capitalize(genre) + "VideoButton");

    var divChildren = frameDiv.getElementsByClassName(genre + "VideoFrame");
    if(divChildren.length > 0)
        return;

    var iframe = createFrame();
    iframe.setAttribute("src", source);
    iframe.setAttribute("class", genre + "VideoFrame");

    frameDiv.appendChild(iframe);
    hideButton.insertAdjacentElement('afterend', frameDiv);

    document.getElementById(genre + "VideoButton").style.display = "none";
    hideButton.style.display = "inline";
}

function hideVideoFrame(genre)
{
    var frameDiv = document.getElementById(genre + "VideoFrameDiv");
    var divChildren = frameDiv.getElementsByClassName(genre + "VideoFrame");
    frameDiv.removeChild(divChildren[0]);

    document.getElementById(genre + "VideoButton").style.display = "inline";
    document.getElementById("hide" + capitalize(genre) + "VideoButton").style.display = "none";
}

function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
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