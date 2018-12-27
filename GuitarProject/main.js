window.onload = function()
{
    

    submitButton = document.getElementById("submitQuestions");
    submitButton.onclick = checkAnswers;
}

function checkAnswers()
{
    var question1 = document.getElementById("question1");
    var q1Answers = document.getElementsByName("q1");

    var question2 = document.getElementById("question2");
    var q2Answers = document.getElementsByName("q2");

    var question3 = document.getElementById("question3");
    var q3Answers = document.getElementsByName("q3");

    var question4 = document.getElementById("question4");
    var q4Answers = document.getElementsByName("q4");

    var rightCount = 0;
    if(!q1Answers[2].checked) 
    {
        question1.style.color = "red";
    }
    else
    {
        question1.style.color = "green";
        rightCount++;
    }

    if(!q2Answers[1].checked) 
    {
        question2.style.color = "red";
    }
    else
    {
        question2.style.color = "green";
        rightCount++;
    }

    if(!q3Answers[2].checked) 
    {
        question3.style.color = "red";
    }
    else
    {
        question3.style.color = "green";
        rightCount++;
    }

    if(!q4Answers[2].checked) 
    {
        question4.style.color = "red";
    }
    else
    {
        question4.style.color = "green";
        rightCount++;
    }

    if(rightCount == 4)
        congrats();
    else
        encourage();
}

function congrats()
{
    var messageP = document.getElementById("message");
    messageP.innerHTML = "Congrats!"
    
    if(messageP.parentElement.childElementCount > 1)
    {
        messageP.parentElement.removeChild(messageP.parentElement.children[messageP.parentElement.childElementCount - 1]);
    }

    if(messageP.parentElement.childElementCount < 2)
    {
        var youRockGif = document.createElement("img");
        youRockGif.setAttribute("src", "youRock.gif");
        youRockGif.style.height = "40%";
        youRockGif.style.width = "50%";
        messageP.parentElement.appendChild(youRockGif);
    }
}

function encourage()
{
    var messageP = document.getElementById("message");
    messageP.innerHTML = "Bummer... You could do some digging and try again! Just check out the <i>Guitar types</i> section above to find out more.";

    if(messageP.parentElement.childElementCount > 1)
    {
        messageP.parentElement.removeChild(messageP.parentElement.children[messageP.parentElement.childElementCount - 1]);
    }

    if(messageP.parentElement.childElementCount < 2)
    {
        var sadGuitarGif = document.createElement("img");
        sadGuitarGif.setAttribute("src", "sadGuitar.gif");
        sadGuitarGif.style.height = "40%";
        sadGuitarGif.style.width = "50%";
        messageP.parentElement.appendChild(sadGuitarGif);
    }
}