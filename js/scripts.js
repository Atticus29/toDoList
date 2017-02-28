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

var getIncomplete = function(arrayOfToDoItems){
  var incompleteTaskArray = arrayOfToDoItems.filter(function(toDoItem){
    return toDoItem.doneStatus === false;
  });
  // console.log(incompleteTaskArray);
  return incompleteTaskArray;
}

var addToDisplay = function(toDoItem){
  $("#list-div").append("<div class='checkbox'>" +
                        "<label> <input type='checkbox' name='toDo' value='" +  toDoItem.text + "'>" +
                        toDoItem.text + "</label>");
}

var setCheckedToDone = function(arrayOfToDoItems){
  $("input:checkbox[name=toDo]:checked").each(function(){
    var toDoTxt = $(this).val();
    for (var i = 0; i<arrayOfToDoItems.length; i++){
      if(toDoTxt === arrayOfToDoItems[i].text){
        // console.log(toDoTxt + " is " + arrayOfToDoItems[i].text);
        arrayOfToDoItems[i].setToDone();
      } else{
        // console.log(arrayOfToDoItems[i].text + " isn't " + toDoTxt);
      }
    }
  });
  // console.log(arrayOfToDoItems);
  // console.log(testArray);
}

var resetDisplayToOnlyIncomplete = function(arrayOfToDoItems){
  arrayOfToDoItems = getIncomplete(arrayOfToDoItems);
  console.log(arrayOfToDoItems);
  $("#list-div").empty();
  arrayOfToDoItems.forEach(function(item){
    addToDisplay(item);
  });
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
    addToDisplay(newItem);
  });
  $("#clear-form").submit(function(){
    event.preventDefault();
    setCheckedToDone(todo);
    // todo[0].setToDone();
    resetDisplayToOnlyIncomplete(todo);

    // console.log(todo);
  });
});
