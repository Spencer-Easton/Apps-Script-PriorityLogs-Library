# Apps-Script-PriorityLogs-Library
A simple library to add priority logging to apps script  
  
##### Using this library  
Add the library M3BrNtuqhOfGGMqYghYVR2kMLm9v2IJHf  
or add the code from library.gs  
  
##### Create a new priorityLog  
     var log = PriorityLogs.newLog(); 
        
##### Add your logging service
`setService()` allows you to pass a function to your own logging destination whether it is Logger, a document, a spreadsheet, or some other service you can pass a string to.  
###### Example with Logger  
    var loggerService = function(message){Logger.log(message)};
    log.setService(loggerService);
  
###### Example with google docs  
    var writeToDoc = function(document){
     return function(message){
       document.getBody().appendParagraph(message);
       }
      }  
    var DocLog = writeToDoc(DocumentApp.create("Test Log"));  
    log.setService(DocLog);

##### Add your priority levels  
    log.addPriority("normal",0);    //Priority description and level can be any (string, number)
    log.addPriority("high",1);      //These values are provided as an example
    log.addPriority("critical",2);  //You could do an addPriority("Power",9001);
  
##### Set your logging threshold  
`setPriority()` lets you set the threshold you want to log at. In this example we have three tiers of logging: normal:0, high:1, critical:2.  If I wanted to log all levels I would set the priority at 0.  That means all priorities at 0 and above will be logged.  If I only want to see critical logs I would set the priority to 2.  
   
    log.setPriority(0); // record all priority levels to logs  
  
##### Placing priority logs in your code  
To log a message at a particular priority pass a string to the function of the priority you want to log at.  You can use the `{priority}` tag to insert the priority level into your message.  
For example:  
  
      log.normal("I am a {priority} priority log");   //I am a normal priority log 
      log.high("I am a {priority} priority log");     //I am a high priority log  
      log.critical("I am a {priority} priority log")  //I am a critical priority log  

##### Get API info   
You can use the `getAPI()` method to return a string of the API for this library.    
##### Library methods  
`All methods returns an object to itself for chaining`  
  
    newLog()
    addService(function(string) logService)  
    addPriority(string, number)  
    setPriority(number)  
  
##### View example.gs for more examples
