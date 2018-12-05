window.onload = function()
{
    buttons = document.querySelectorAll("button");
    
    for(let b of buttons) {
        b.topNumericalVal = 0;
    }

    for(let b of buttons) {
        b.onclick = function() {

            var moveDownInterval = setInterval(function() {
                b.topNumericalVal += 10;
                b.style.top = b.topNumericalVal + "px";
            }, 100);

            b.onclick = function() {
                clearInterval(moveDownInterval);
            }

        }
    }
}