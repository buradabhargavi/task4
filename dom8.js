var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event

form.addEventListener('submit',
  addItem);

//delete event 
itemList.addEventListener('click', removeItem);
//addItem

function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById('item').value;

  //create new li element

  var li = document.createElement('li');

  // Add class

  li.className = 'list-group-item'

  //add text node with input value

  li.appendChild(document.createTextNode(newItem));

  //Create a delete button 
  var deleteBtn = document.createElement('button');

  //add classes to delete button 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append Text node to delete 
  deleteBtn.appendChild(document.createTextNode('X'));
  //append button to li
  li.appendChild(deleteBtn);
  //append li to list 
  itemList.appendChild(li);


  // create editBtn
  var editBtn = document.createElement('button');
  //add class to edit button 
  editBtn.className = 'btn btn-success btn-sm float-right edit'
  //append text node to edit 
  editBtn.appendChild(document.createTextNode('edit'));
  //append editbutton to li
  li.appendChild(editBtn);
  // append li to list 
  itemList.appendChild(li);
}

//removeItem
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}
