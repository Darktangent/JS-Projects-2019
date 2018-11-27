//Book Constructor

function Book(title,author,isbn){

	this.title=title;
	this.author=author;
	this.isbn=isbn;
}

//UI Constructor
function UI(){

}
UI.prototype.addBookToList=function(book){
	const list=document.getElementById('book-list')
	//create tr
	const row=document.createElement('tr')
	//insert col
	row.innerHTML=`
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="#" class="delete">X</a></td>

	`
	list.appendChild(row)
	console.log(row)
}

//alert
UI.prototype.showAlert=function(message,className){
	const div=document.createElement('div')
	//add class
	div.className= `alert ${className}`
	//add text
	div.appendChild(document.createTextNode(message))
	//get parent
	const container=document.querySelector('.container')
	const form=document.querySelector('#book-form')
	container.insertBefore(div,form)
	//timeout after 3 secs
	setTimeout(function(){
		document.querySelector('.alert').remove()
	},3000)
}



UI.prototype.clearFields=function(){
	document.getElementById('title').value=""
	document.getElementById('author').value=""
	document.getElementById('isbn').value=""

}
//event listener

document.getElementById('book-form').addEventListener('submit',
	function(e){
		//getting form values
		const title=document.getElementById('title').value,
			author=document.getElementById('author').value,
			isbn=document.getElementById('isbn').value
		//instantiating book		
			const book=new Book(title,author,isbn)
		//instantiate UI
		const ui =new UI()


		//validate
		if(title===''||author===''|| isbn===''){
			//error alert
			ui.showAlert('Please fill in all fields','error')
		}else{
			//add book to list
		ui.addBookToList(book)
		//clear fieldsw
		ui.clearFields()
		}

		

		e.preventDefault()

})