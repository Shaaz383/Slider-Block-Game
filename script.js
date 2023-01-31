var count = 0;

function stopSliding(){
    count++;
    var slid = "slider" + count
    var sliderCurrent = document.getElementById(slid)
    // console.log(sliderCurrent);

    var slid = "slider" + (count + 1)
    var sliderAbove = document.getElementById(slid)
    // console.log(sliderAbove);


    if(count == 1){
        var sliderBelow = sliderCurrent
    }
    else{
        
        var slid = "slider" + (count - 1)
        var sliderBelow = document.getElementById(slid)
        // console.log(sliderBelow);
    }


    var left = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("left"))
    var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"))
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"))
    // console.log(left);
    // console.log(width);
    // console.log(leftBelow);


    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left + "px" ;


    var difference = left - leftBelow ;
    var absDiff = Math.abs(difference)
    var newWidth = (width - absDiff).toString().concat("px");

    sliderCurrent.style.width = newWidth ;
    sliderAbove.style.width = newWidth;
    sliderAbove.style.visibility = "visible"

    if(difference > width || difference <- width){
        var score = "score" + count;
        alert(score)
        location.reload()
    }
    
}