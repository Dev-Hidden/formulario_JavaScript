<h1>Página de Formulário em HTML e JavaScript</h1>

>https://gilhjm.github.io/formulario_JavaScript/main.html

Este é um script em JavaScript responsável por salvar, exibir, editar e excluir informações de pessoas em uma tabela na página HTML. As informações são armazenadas no Local Storage do navegador.

<h3>Funcionalidades</h3>

Gravar:
>A função gravar(id) é responsável por capturar os valores dos campos de entrada na página HTML e salvá-los no Local Storage. Se o ID for fornecido, atualiza um item existente, caso contrário, adiciona um novo item.

Mostrar:
>A função mostrar() é responsável por exibir todos os itens salvos no Local Storage em uma tabela na página HTML.

Editar:
>A função editar(id) é responsável por recuperar os dados de uma pessoa do Local Storage com base no ID fornecido e preencher os campos de entrada HTML com esses dados. Isso permite que o usuário edite as informações de uma pessoa já salva.

Excluir:
>A função excluir(id) é responsável por excluir um item específico do Local Storage com base no ID fornecido e, em seguida, atualizar a tabela exibida na página HTML.

<h3>Como usar</h3>
Adicionar uma pessoa
Para adicionar uma pessoa, basta preencher os campos de entrada na página HTML e clicar no botão "Salvar". As informações serão salvas no Local Storage e exibidas na tabela na página HTML.

Editar uma pessoa
Para editar uma pessoa já salva, clique no botão "Editar" correspondente na tabela. Os dados da pessoa serão preenchidos nos campos de entrada na página HTML. Faça as alterações necessárias e clique no botão "Salvar" para atualizar as informações.

Excluir uma pessoa
Para excluir uma pessoa já salva, clique no botão "Deletar" correspondente na tabela. A pessoa será removida do Local Storage e a tabela na página HTML será atualizada.

<h3>Limitações</h3>
A validação dos campos de entrada não é realizada neste script. É responsabilidade do desenvolvedor garantir que os dados inseridos sejam válidos.
Este script utiliza o Local Storage do navegador para armazenar as informações. Portanto, se o usuário limpar o cache ou trocar de dispositivo, as informações serão perdidas.
Este script foi desenvolvido para fins educacionais e pode não ser adequado para uso em projetos de produção. É altamente recomendável que o código seja revisado e testado antes de ser usado em um projeto de produção.

<h3>Tecnologias Utilizadas:</h3>

>_HTML_

>_CSS_

>_JavaScript_

Conclusão
>Este script oferece uma maneira simples e fácil de salvar, exibir, editar e excluir informações de pessoas em uma tabela na página HTML. Com algumas modificações, pode ser adaptado para atender às necessidades de diferentes projetos.

Licença
>Este projeto é licenciado sob a Licença MIT. Você pode usá-lo livremente para fins comerciais e não comerciais.
