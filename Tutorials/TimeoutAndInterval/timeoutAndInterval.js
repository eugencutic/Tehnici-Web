window.onload = function()
{
    moveButtonsDown();
    showDateTime();
}

function showDateTime()
{
    let paras = document.querySelectorAll("p");
    let p = paras[0];
    setInterval(function(){
        //let dt = new Date();
        p.innerHTML = (new Date()).toTimeString();
        //alert(dt.toDateString());
    }, 1000);
}

function moveButtonsDown()
{
    var buttons = document.querySelectorAll("button");
    
    for(let b of buttons) {
        b.topNumericalVal = 0;
    }

    for(let b of buttons) {
        b.onclick = function moveDown() {

            b.moveDownInterval = setInterval(function() {
                b.topNumericalVal += 10;
                b.style.top = b.topNumericalVal + "px";
            }, 100);

            b.onclick = function stop() {
                clearInterval(b.moveDownInterval);
                b.onclick = moveDown;
            }

        }
    }
}