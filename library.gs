/**
* Creates a priority logging service
* 
* @return {object} returns a new priority logging service
*/
function newLog(){
  return new priorityLog_();
}

var priorityLog_ = function(){
  var self_ = this,
      destination_ = function(){},
      priority_;
  
  self_.setService = function(destinationFunction){destination_ = destinationFunction; return self_;};
  
  self_.addPriority = function(description, priority){
    self_[description] = function(message){(priority >= priority_)?safeCall_(destination_)(String(message).replace("{priority}",description)):null;};
    return self_;
  };
  
  self_.setPriority = function(level){priority_ = level; return self_;};
  
  function safeCall_(func){return (typeof func === 'function')? func:function(){}}
  
  return self_;
}

/**
* Return a string conatining the API calls for this library
*
* @return {string} A string showing the API methods for this library
*/
function viewAPI(){
  var apiString = "\nnewLog()\n";
  apiString += "This will return a new priority logging service\n\n";
  apiString += "setService(function(string) outputService)\n";
  apiString += "This will pass a string to your logging service you designate.\nYou can use the {priority} tag to insert the priority level into the log message.\n\n";
  apiString += "addPriority(string priorityDescription, number priorityLevel)\n";
  apiString += "This will add a new priority level of logging.\n\n";
  apiString += "setPriority(number priorityLevel)\n";
  apiString += "This will set the level of logging. You will see all logging messages from this level and up.\n\n";
  return apiString;
}
