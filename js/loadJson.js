

function whoInsert(jsonData, divId){
var appended = $(); // because row variable below, is an object so setup empty object
var a = 0;
$(jsonData).each(function(index, element) {
  //console.log("Length->"+element.length);


   var $timeline = $("#"+divId);
   var $template = $timeline.find(".template");
  $(element.items).each(function(index, element) {  
    a++;

 
    var $row = $template.clone(); // clone
     
    $row.removeClass("template");  
    $row.addClass("who-"+a);

    $row.find(".image-bg").css("background-image", "url(images/"+element.hero+")");   // add css styling to .image-bg   
    $row.find(".text").text(element.title); // find and replace text   
    $row.find(".department").text(element.department); // find and replace text   

    $timeline.find(".row ").append($row);

  });   

  $template.css( "display", "none" );
 
});

  console.log("Insert JSON");
  scrollWho("#who", ".who-1", -300, -300, "+200px");
  scrollWho("#who", ".who-2", -500, -300, "+200px");
  scrollWho("#who", ".who-3", -700, -300, "+200px");

  scrollWho("#who", ".who-7", -300, -300, "+200px");
  scrollWho("#who", ".who-8", -500, -300, "+200px");
  scrollWho("#who", ".who-9", -700, -300, "+200px");


  scrollWho("#who", ".who-4", +700, -300, "-200px");
  scrollWho("#who", ".who-5", +500, -300, "-200px");
  scrollWho("#who", ".who-6", +300, -300, "-200px");
  scrollWho("#who", ".who-10", +700, -300, "-200px");
  scrollWho("#who", ".who-11", +500, -300, "-200px");
  scrollWho("#who", ".who-12", +300, -300, "-200px");

}

function whatInsert(jsonData, divId){
  var i = 0;
  var showImage = 0;

  var appended = $(); // because row variable below, is an object so setup empty object
  var a = 0;
  $(jsonData).each(function(index, element) {
    //console.log("Length->"+element.length);

     //console.log("Element->"+element.items[i].title);

     //console.log("Gallery->"+element.items[a].gallery[a]);
      var $timeline = $("#"+divId);
     //var $template = $timeline.find(".template");

     //console.log("$template->"+$template);


    $(element.items).each(function(index, element) {  
      a++;
     
      //var $row = $template.clone(); // clone what-block ???       
      //$row.removeClass("template");  
      //$row.addClass("project-"+a);
      //$row.find("#project").attr("class","class-colin"); // find and replace Class   

      //$($timeline+" ."+element.block).css("background-image", "url(images/"+element.hero+")");   // add css styling to .image-bg   
      $("#"+divId+" ."+element.block).css("background-image", "url(images/"+element.hero+")");   // add css styling to .image-bg   
      $("#"+divId+" ."+element.block).css("cursor", "pointer");   
      
      //$row.find(".text").text(element.title); // find and replace text

      $("."+element.block).click(function(){ // When we click an element
          initWhatPopup('#project-gallery', element.title, element.description, element.gallery); // Why not pass directly????
      });

      //appended = $.merge(appended, $row); // IMPORTANT merge objects row not extend CL      
     // $timeline.find(".row ").append($row);

    });   

   // $template.css( "display", "none" );
   
  });

  //console.log("Removing");   

  // $(appended).appendTo("#"+divId+" .row "); // NOW append because we do not want thumnails to be cloned muliple times CL

}

function initWhatPopup(id, title, description, gallery){
  //init the popup content
  var $timeline = "popup DOM";
  
  $(" #popupTemplate" ).css( "display", "block" );  

  $(id+" .row ").html("");
  $(gallery).each(function(index, imageFilename) {     
    console.log("Gallery "+imageFilename);

    var galleryThumbnail = $("#popupTemplate .template " ).clone(); // clone

    galleryThumbnail.removeClass("template");  
    galleryThumbnail.find(" .gallery-thumbnail").attr("src","images/"+imageFilename); // find and replace text
    $(id+" .row ").append(galleryThumbnail);

  });

  $(" #popupTemplate " ).css( "display", "none" );  
  $(id+" .title" ).text( title );       
  $(id+" .description" ).text( description );

  showPopup(id); // Why not pass directly????



}

var what = $.getJSON("data/what.json"), // $.getJSON returns a Deferred
    who = $.getJSON("data/who.json"), // $.getJSON returns a Deferred
    all   = $.when(what, who);    // and $.when json have been loaded
    
all.done(function ( what, who ) { 
    whatInsert(what, "what-block");
    whoInsert(who, "who");


})
.fail(function(jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
