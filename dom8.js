var form=document.getElementById('addForm');
var itemList=document.getElementById('items');	
var filter=document.getElementById('filter');


form.addEventListener('submit',addItem);	
itemList.addEventListener('click',removeItem);	
filter.addEventListener('keyup',filterItems);

function addItem(e){	
    e.preventDefault();	    
    var newItem=document.getElementById('item').value;	   
    var description=document.getElementById('description').value;
    //create new li	    
    var li=document.createElement('li');	    
    //Add class	
    li.className='list-group-item';	   
   //Add text 	  
   li.appendChild(document.createTextNode(newItem));	   
   li.appendChild(document.createTextNode(description));




var deleteBtn=document.createElement('button')	  
var editBtn=document.createElement('button');

deleteBtn.className='btn btn-danger btn-sm float-right delete';	  
editBtn.className='btn btn-primary btn-sm float-right edit'
   
deleteBtn.appendChild(document.createTextNode('X'));	   
editBtn.appendChild(document.createTextNode('EDIT'));	   
   
li.appendChild(deleteBtn);	   
li.appendChild(editBtn);	
   
itemList.appendChild(li);	
   	   
}	
function removeItem(e){
    if(e.target.classList.contains('delete')){	    
        if(confirm('are you sure?')){	        
            var li=e.target.parentElement;	           
            itemList.removeChild(li);	           
        }	        }
    }	    

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
var itemName=item.textContent;

if(itemName.toLowerCase().indexOf(text)!=-1){
item.style.display='block'
}else{
    item.style.display='none'
}
    });

}
