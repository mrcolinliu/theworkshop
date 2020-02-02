
var controller = new ScrollMagic.Controller();

var activeCounter = 0;

function scrollCards(triggerElement, id, x){
    var activeLink = ["#what-nav", "#who-nav", "#why-nav", "#slack-nav"];
    var navId = id.substr(0, id.length-4)+"-nav";

    var fromLeftTimeline = new TimelineMax();
    var fromLeftFrom = TweenMax.from(id, 0.5, {width: "0px",
        x: x,
        y: "300px",
        opacity: 0
    });


    //var fromLeftTo = TweenMax.to("#whatcard", 1, { x: 0});
    var fromLeftTo = TweenLite.to(id, 1, {width: "24rem", ease:Power2.easeOut, x:0, y: "0%"});
    $( "#what-nav" ).removeClass( "active" );
    $( "#who-nav" ).removeClass( "active" );
    $( "#why-nav" ).removeClass( "active" );
    $( "#slack-nav" ).removeClass( "active" );

    fromLeftTimeline.add(fromLeftFrom).add(fromLeftTo);

    new ScrollMagic.Scene({
            triggerElement: triggerElement,
            offset: -200,
        })
        .on('enter', function () {
            $( activeLink[0] ).removeClass( "active" );
            $( activeLink[1] ).removeClass( "active" );
            $( activeLink[2] ).removeClass( "active" );
            $( activeLink[3] ).removeClass( "active" );

            // console.log("passed trigger "+navId );
            $( activeLink[activeCounter] ).addClass( "active" );
            activeCounter++;
        })
        // .on('end', function (event) {
        .on('leave', function (event) {
            if (event.scrollDirection == "REVERSE" && id != "#what"){
                $( activeLink[activeCounter] ).removeClass( "active" );
                activeCounter--;
                console.log("End next REVERSE "+navId);
                $( navId ).addClass( "active" );
            }            
        })    
        .setTween(fromLeftTimeline)
        // .duration(1200)
        .addTo(controller);    

}

function scrollBlocks(triggerElement, id, offset, from_obj, to_obj, duration){

    duration = typeof duration === "undefined"?200:duration;
    // from_obj = typeof from_obj === "undefined"?{y: y,x: x,opacity: 0}:from_obj;
    // to_obj = typeof to_obj === "undefined"?{ease:Elastic.easeOut.config(1, 0.3), x: "+50px", opacity: 1}:to_obj;    

    // var timeline = new TimelineMax();

    var fromToTween = TweenMax.fromTo(id, 1, from_obj, to_obj);


    // timeline.add(fromToTween);

    var scrollMagic = new ScrollMagic.Scene({
            triggerElement: triggerElement,
            // duration: duration,
            offset: offset
        })
        .setTween(fromToTween)
        // .setTween(id, 0.5, {backgroundColor: "green", scale: 2.5})
        // .addIndicators({name: "loop"}) // add indicators (requires plugin)
        // .duration(duration)
        //    .reverse(false)
        .addTo(controller);    

    // if(addIndicators_bol == true)
    //     //scrollMagic.addIndicators({name: "loop"});
}

//function scrollWho(triggerElement, id, x, y, offset, final-x-position){
function scrollWho(triggerElement, id, x, y, xPosition){

    //var xPosition = "+100px";

    var fromLeftTimeline = new TimelineMax();
    var fromLeftFrom = TweenMax.from(id, 1, {
        y: y,
        x: x,
        opacity: 0
    });

    //var fromLeftTo = TweenMax.to("#whatcard", 1, { x: 0});
    //var fromLeftTo = TweenLite.to(id, 1, {ease:Elastic.easeOut.config(1, 0.3), x: xPosition, opacity: 100});
    var fromLeftTo = TweenLite.to(id, 1, {ease:Bounce.easeOut, x: xPosition, opacity: 100});

    fromLeftTimeline.add(fromLeftFrom).add(fromLeftTo);

    new ScrollMagic.Scene({
            triggerElement: triggerElement,
            offset: 100,
        })
        .setTween(fromLeftTimeline)
        // .duration(600)
        //    .reverse(false)
        .addTo(controller);    

}

scrollCards("#what", "#whatcard", -1500);
scrollCards("#who", "#whocard", +1500);
scrollCards("#why", "#whycard", -1500);
// scrollCards("#contact", "#contactcard", +1500);


scrollBlocks($("#what-container")[0], "#block1", -300, {y: -300,x:  -50,opacity: 0}, {ease:Elastic.easeOut.config(1, 0.3), x: "+50px", y:0, opacity: 100, repeat: 0});
scrollBlocks($("#what-container")[0], "#block5", +100, {y: +50,x:  +300,opacity: 0}, {ease:Elastic.easeOut.config(1, 0.3), x: "+50px", y:0, opacity: 100,  repeat: 0});
scrollBlocks($("#what-container")[0], "#block10", +200, {y: +300,x:  +0,opacity: 0}, {ease:Elastic.easeOut.config(1, 0.3), x: "+50px", y:0, opacity: 100, repeat: 0});
scrollBlocks($("#what-container")[0], "#block8", +500, {y: -50,x:  -300,opacity: 0}, {ease:Elastic.easeOut.config(1, 0.3), x: "+50px", y:0, opacity: 100, repeat: 0});

scrollBlocks("#why", "#why-h2", +300, {y: +50,opacity: 0}, {ease:Power2.easeOut, y: 0, opacity: 100});
scrollBlocks("#why", "#why-lead", +300, {y: +50,opacity: 0}, {ease:Power2.easeOut, y: 0, opacity: 100});
scrollBlocks("#why", ".jumbotron", +600, {y: +50,opacity: 0}, {ease:Power2.easeOut, y: 0, opacity: 100});
scrollBlocks("#why", ".summaryList", +900, {y: +50,opacity: 0}, {ease:Power2.easeOut, y: 0, opacity: 100});


// scrollBlocks("#slack", "#blockquote-slack", +100, {y: -50,x: -300,opacity: 0}, {ease:Power2.easeOut, y:0, x: 0, opacity: 100});
