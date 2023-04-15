/* 	
A função gravar(id) é responsável por capturar os valores dos campos de entrada na página HTML e salvá-los no Local Storage. 
Se o ID for fornecido, atualiza um item existente, caso contrário, adiciona um novo item. 
*/ 
function gravar(id) 
{	
	//função getElementById e usada para obter os valores de diferentes campos de um formulário HTML e armazená-los em variáveis correspondentes.
	var name = document.getElementById("name").value;
    var rg = document.getElementById("rg").value;
    var num = document.getElementById("num").value;
    var district = document.getElementById("district").value;
    var row = document.getElementById("row").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;

	var dados = 
	{
		name: name,
		rg: rg,
		num: num,
		district: district,
		row: row,
		state: state,
		city: city,
	};

//  Busca o JSON e verifica se ele ja existe  - Inicio	
	let old_dados = JSON.parse(localStorage.getItem('dados')) || [];
	let rgAlreadyExists = old_dados.some(item => item.rg === rg);

	if (rgAlreadyExists) 
	{
		alert('RG já foi cadastrado anteriormente');
		return;
	}
//  Busca o JSON e verifica se ele ja existe  - Fim

	if (name == '' || rg == '') 
	{
		alert('Campo Nome & RG não podem ficar vazio');
	} 
	else 
	{
		let old_dados = JSON.parse(localStorage.getItem('dados')) || [];

		if (id === '') {
			// Novo item
			old_dados.push(dados);
		} else {
			// Edição de item existente
			old_dados[id] = dados;
		}

		localStorage.setItem('dados', JSON.stringify(old_dados));
		console.log( "dados :", dados);
		mostrar();
	}

}

/*
A função mostrar() é responsável por exibir todos os itens salvos no Local Storage em uma tabela na página HTML. 
*/
function mostrar() 
{
	let listaPessoas = JSON.parse(localStorage.getItem('dados'));
	let pessoa = '<table id="list">';
	pessoa += "<th>Nome</th> <th>RG</th> <th>Numero</th> <th>Bairro</th> <th>Rua</th> <th>Estado</th> <th>Cidade</th> <th>Editar</th> <th>Deletar</th>";
	let val = [];
	let quantidade = listaPessoas.length;

	for (let i = 0; i < quantidade; i++) {
		let name_tab = listaPessoas[i].name;
		let rg_tab = listaPessoas[i].rg;
		let num_tab = listaPessoas[i].num;
		let district_tab = listaPessoas[i].district;
		let row_tab = listaPessoas[i].row;
		let state_tab = listaPessoas[i].state;
		let city_tab = listaPessoas[i].city;

		let btn= '<button onclick="excluir('+i+')" id="btn_del">🗑️</button>';
		let editBtn = '<button onclick="editar('+i+')"id="btn_edit" >✏️</button>';

		val.push("<tr><td>"+ name_tab 
		+"</td><td>"+ rg_tab 
		+"</td><td>"+ num_tab 
		+"</td><td>"+ district_tab 
		+"</td><td>"+ row_tab 
		+"</td><td>"+ state_tab 
		+"</td><td>"+ city_tab 
		+"</td><td>"+ editBtn
		+"</td><td>"+ btn
		+"</td></tr>");
	}
	for(let x = 0;x< val.length; x++){pessoa += val[x];}

	let doc_tab = document.getElementById('list')
	doc_tab.innerHTML = pessoa;
}

/*
A função editar(id) é responsável por recuperar os dados de uma pessoa do Local Storage com base no ID fornecido e preencher os campos de entrada HTML com esses dados.
Isso permite que o usuário edite as informações de uma pessoa já salva.
*/
function editar(id) 
{
	document.getElementById("btn_savg").style.display = "block";

    let listaPessoas = JSON.parse(localStorage.getItem('dados'));
    let pessoa = listaPessoas[id];
    
    document.getElementById("name").value = pessoa.name;
    document.getElementById("rg").value = pessoa.rg;
    document.getElementById("num").value = pessoa.num;
    document.getElementById("district").value = pessoa.district;
    document.getElementById("row").value = pessoa.row;
    document.getElementById("state").value = pessoa.state;
    document.getElementById("city").value = pessoa.city;
    
    // alterar o id do botão de salvar para indicar qual item está sendo editado
    document.getElementById("btn_savg").setAttribute("data-id", id);
}

/* 
A função excluir(id) é responsável por excluir um item específico do Local Storage com base no ID fornecido e, em seguida, atualizar a tabela exibida na página HTML.
*/
function excluir(id) 
{
	let listaPessoas = JSON.parse(localStorage.getItem('dados'));
	listaPessoas.splice(id, 1);
	localStorage.setItem('dados', JSON.stringify(listaPessoas));
	mostrar();
}

/* 
A função excluir_tudo() é responsável por excluir todos os dados armazenados no Local Storage e atualizar a tabela exibida na página HTML.
*/
function excluir_tudo()
{
	localStorage.clear();
	alert('Todos os dados foram excluidos');
	location.reload();
}

/* 
A função salvar() é responsável por chamar a função gravar(id) para salvar as informações inseridas pelo usuário no Local Storage.
*/
function salvar()
{
    let name = document.getElementById("name").value;
    let rg = document.getElementById("rg").value;
    let num = document.getElementById("num").value;
    let district = document.getElementById("district").value;
    let row = document.getElementById("row").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    let dados = {
        name: name,
        rg: rg,
        num: num,
        district: district,
        row: row,
        state: state,
        city: city,
    };

    let old_dados = JSON.parse(localStorage.getItem('dados')) || [];
	if (name == '' || rg == '') 
	{
		alert('Campo Nome & RG não podem ficar vazio');
		return;
	} 

	else
	{
		// verificar se o botão salvar foi clicado para editar um item existente
		let id = document.getElementById("btn_savg").getAttribute("data-id");
		if (id) {
			old_dados[id] = dados;
		} else {
			old_dados.push(dados);
		}

		localStorage.setItem('dados', JSON.stringify(old_dados));
		console.log("dados :", dados);
		document.getElementById("btn_savg").style.display = "none";
		
	mostrar();
	}

}
