// Back End
var todo = [];
ToDoItem = function(text, doneStatus){
  this.text = text;
  // this.time = time;
  this.doneStatus = doneStatus;
};

ToDoItem.prototype.setToDone = function(){
  this.doneStatus = true;
}

ToDoItem.prototype.isDone = function(){
  return(this.doneStatus === true);
}

var clearDone = function(arrayOfToDoItems){
  var incompleteTaskArray = arrayOfToDoItems.filter(function(toDoItem){
    return toDoItem.doneStatus === false;
  });
  console.log(incompleteTaskArray);
  return incompleteTaskArray;
}


// Front End
$(function(){
  // fix this
  // $("#datetime-section").datetimepicker();
  $("#add-form").submit(function(){
    event.preventDefault();
    var submittedText = $("#submit-text").val();
    // var submittedTime = $
    // validate, then
    var newItem = new ToDoItem(submittedText, false);
    todo.push(newItem);
  });
  $("#clear-form").submit(function(){
    event.preventDefault();
    todo[0].setToDone();
    todo = clearDone(todo);
    console.log(todo);
  });
});
