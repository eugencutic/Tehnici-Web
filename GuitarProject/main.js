window.onload = function()
{
    let dykFig1 = document.getElementById("didYouKnowFig1");
    let dykFig2 = document.getElementById("didYouKnowFig2");
    let bigGuitar = document.getElementById("biggestGuitarImg");
    let reachOut = document.getElementById("reachOutFenderImg");

    dykFig1.currentHeight = 220;
    dykFig1.bigHeight = 250;
    dykFig1.addedCaption = false;

    dykFig2.currentHeight = 220;
    dykFig2.bigHeight = 275;
    dykFig2.addedCaption = false;

    bigGuitar.currentHeight = 180;
    bigGuitar.smallHeight = 160;
    
    reachOut.currentHeight = 180;
    reachOut.smallHeight = 150;

    dykFig1.addEventListener("click", function()
    {
        this.style.height = this.bigHeight + "px";
        if(!this.addedCaption)
        {
            this.children[1].innerHTML += "<br> The world’s largest guitar, certified by the Guinness Book of World Records, is over 13 meters long.";
            this.addedCaption = true;
        }
    }, true);

    dykFig2.addEventListener("click", function()
    {
        this.style.height = this.bigHeight + "px";
        if(!this.addedCaption)
        {
            this.children[1].innerHTML += "<br> The Most Expensive Guitar Ever Sold for $2.8million was the Fender \"Reach Out to Asia\" Stratocaster," +
                                        " sold at auction to raise money for victims of the 2004 Indian Ocean earthquake and tsunami.";
            this.addedCaption = true;
        }
        

    }, true);

    bigGuitar.addEventListener("click", function()
    {
        bigGuitar.intervalId = setInterval(function()
        {
            if(bigGuitar.currentHeight > bigGuitar.smallHeight)
            {
                bigGuitar.currentHeight--;
                bigGuitar.style.height = bigGuitar.currentHeight + "px";
            }
            else
                clearInterval(bigGuitar.intervalId);   
            
        }, 100);
    }, false);

    reachOut.addEventListener("click", function()
    {
        reachOut.intervalId = setInterval(function()
        {
            if(reachOut.currentHeight > reachOut.smallHeight)
            {
                reachOut.currentHeight--;
                reachOut.style.height = reachOut.currentHeight + "px";
            }
            else
                clearInterval(reachOut.intervalId);   
            
        }, 50);
    }, false);
}