function viewApi(){
  Logger.log(PriorityLogs.viewAPI());
}

function logToLogger() {
  
  var loggerService = function(message){Logger.log(message)}
  
  
  var log = PriorityLogs.newLog()
  .setService(loggerService)
  .addPriority("normal",0)
  .addPriority("high",1)
  .addPriority("critical",2)
  .setPriority(0);
  
  
  log.normal("test {priority}");
  log.high("test {priority}");
  log.critical("test {priority}");
  
}


function logToDocument(){
  
  var writeToDoc = function(document){
    return function(message){
      document.getBody().appendParagraph(message);
    }
  }
  
  var DocLog = writeToDoc(DocumentApp.create("Test Log"));
  
  var log = PriorityLogs.newLog()
  .setService(DocLog)
  .addPriority("small",0)
  .addPriority("medium",5)
  .addPriority("large",10)
  .setPriority(0);
  
  
  log.small("test {priority}");
  log.medium("test {priority}");
  log.large("test {priority}");
  
}

function logToSpreadsheet(){
  
  
  var writeToSheet = function(spreadsheet){
    return function(message){
      spreadsheet.getActiveSheet().appendRow([message]);
    }
  }
  
  var SheetLog = writeToSheet(SpreadsheetApp.create("Test Log"));
  
  
  var log = PriorityLogs.newLog()
  .setService(SheetLog)
  .addPriority("boring",0)
  .addPriority("average",10)
  .addPriority("exciting",20)
  .setPriority(0);
  
  
  log.boring("test {priority}");
  log.average("test {priority}");
  log.exciting("test {priority}");
  
}
