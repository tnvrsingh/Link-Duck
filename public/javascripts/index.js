$(document).on('ready', function() {

  $('.field').on('focus', function() {
    $('body').addClass('is-focus');
  });

  $('.field').on('blur', function() {
    $('body').removeClass('is-focus is-type');
  });

  $('.icon-close').click(function(){
    document.getElementById("box").value= "";
});

  $('.field').on('keydown', function(event) {
    $('body').addClass('is-type');
    if((event.which === 8) && $(this).val() === '') {
      $('body').removeClass('is-type');
    }
  });

  $(document).keypress(function(e) {
    var n=document.getElementById("box").value;
    if(e.which == 13 && n.length >= 1) {
      if (true) {

      }
      console.log("enter pressed");
      console.log(n);
      var newUrl = "http://localhost:3000/new/" + n;
      console.log(newUrl);
      //var newUrl = "http://echo.jsontest.com/key/value/one/two";
      $.ajax({
               type: "GET",
               dataType: "json",
               url: newUrl,
               dataType: "json",
               contentType: "application/json; charset=utf-8",
               success: function (data) {
                   //alert(data);
                   console.log(data);
                   //alert(data['short_url']);
                   var stringToFunction = data['short_url'];
                   addParagraphs(stringToFunction);
               },
               error: function (error) {

                   jsonValue = jQuery.parseJSON(error.responseText);
                   alert("error" + error.responseText);
               }
           });
    }
});

function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function addParagraphs(short_url) {

    var p2 = document.createElement('p');
    p2.setAttribute('id','short_url_element');
    p2.innerHTML = short_url;
    var elem = document.getElementById("p1");
    $(p2).insertAfter("#box.field");


    var infoText = document.createElement('p');
    infoText.setAttribute('id','infotext');
    infoText.innerHTML = "Press Ctrl+C to copy this short URL!";
    $(infoText).insertAfter("#short_url_element");

    SelectText('short_url_element');

}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

});
