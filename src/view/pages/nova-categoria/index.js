		const form = document.getElementById('fom-category');
		form.addEventListener('submit',function(e){
			e.preventDefault()

			let data = {name:e.target[0].value};
			console.log(data)
			fetch('localhost:3000/api/category?'+json({data}))
		})