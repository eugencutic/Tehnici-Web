window.onload = function()
{
    var draggableImages = document.querySelectorAll("#mainCol1>div>img");
    for(img of draggableImages)
    {
        img.setAttribute("draggable", "true");
        img.addEventListener("dragstart", function(e) { drag(e); }, false);
    }

    var dropDivs = document.querySelectorAll("#mainCol2>div");
    for(div of dropDivs)
    {
        div.addEventListener("dragover", function(e) { allowDrop(e); }, false);
        div.ondrop = function(e) { drop(e); };
    }

    document.getElementById("submitImages").onclick = function() {
        checkAnswers(dropDivs);
    }

    $("#retryButton").on("click", function(){ location.reload(); })
}

function checkAnswers(dropDivs)
{
    let correct = true;
    for(let i = 0; i < dropDivs.length; i++)
    {
        let img = dropDivs[i].children[1];
        if( i == 0  && img.id != "gibsonES-150")
            correct = false;

        if( i == 1  && img.id != "luteImg")
            correct = false;

        if( i == 2  && img.id != "vihuelaImg")
            correct = false;
    }

    let messageParagraph = document.getElementById("message");
    if(correct)
    {
        messageParagraph.innerHTML = "Congrats!";
        messageParagraph.style.color = "green";
    }
    else
    {
        messageParagraph.innerHTML = "Wrong";
        messageParagraph.style.color = "red";
    }
}

function allowDrop(ev)
{
    ev.preventDefault();
}
function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.style.fontWeight = "600";
}