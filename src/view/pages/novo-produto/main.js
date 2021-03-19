//validar imagem,cash value e term value

const formProduct = document.getElementById('form-product')

function loadCategories(response){

	for(i=0;i<response.length;i++){

		let valueContent = document.createTextNode(response[i].id)
		let nameContent = document.createTextNode(`${valueContent.data}-${response[i].name}`)


		let optionEle = document.createElement('option')

		optionEle.setAttribute('value',valueContent.data)
		optionEle.appendChild(nameContent)

		document.getElementById('categories').appendChild(optionEle)



	}

}
async function getCategories(url){
	const response = await fetch(url,{
		method:'GET',
		cors:'cors',
		headers:{
			'Content-Type':'application/json'
		}

	})
	.then(response => response.json())
	.then(data => data)

	loadCategories(response.data)
	
}


getCategories('http://localhost:3000/api/categories')

formProduct.addEventListener('submit',function(e){
	e.preventDefault()

	for(let i = 0; i<e.target.length - 1 ;i++){
		let name = e.target[i].name
		let value = e.target[i].value

		console.log(e.target[i].value)
	}
} );