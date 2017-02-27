// Back End
var todo = [];
ToDoItem = function(text, doneStatus){
  this.text = text;
  this.doneStatus = doneStatus;
}

// Front End
$(function(){
  $("#add-btn").submit(function(){
    event.preventDefault();
    console.log("got here");
    var usrInput = $("#submit-text").val();
    var newItem = new ToDoItem(submittedText, false);
    console.log(newItem);
  });
});
