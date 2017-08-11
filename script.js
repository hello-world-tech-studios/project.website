$(document).ready(function() {
  var submit = $("#submit1");
  var form = $("#form1");
  $(submit).click(function() {
    var text = $("#text").val();
    var contentLength = $('ul#myList > li').length;
    var content = "<li>" + text + "</li>";
    $('ul#myList').append(content);
  });
});
