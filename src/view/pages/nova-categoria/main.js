const form = document.getElementById('fom-category');

async function postData(url, data = {}){
	const response = await fetch(url,{
		method:'POST',
		mode:'cors',
		cache:'no-cache',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify(data)
	});
	return response.json();

}

function renderResponse(data){

	const msgResponse =  document.getElementById('msg-response')
	msgResponse.innerHTML= `<span>Sucesso { Cod ${data.id} Categoria: ${data.name}}</span>`;

}


form.addEventListener('submit',function(e){
	e.preventDefault()

	postData('http://localhost:3000/api/category', {name:e.target[0].value})
	.then(data => {
		renderResponse(data);
	});

	e.target[0].value = ''

})