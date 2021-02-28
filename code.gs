function doGet(e){
  
  var t = HtmlService.createTemplateFromFile("page");
  return t.evaluate().setTitle("CB_ShowDetails");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
