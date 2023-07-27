# Integration Google Sheets e HubSpot

Salvar os dados de uma planilha como contatos no HubSpot, filtrando contatos com domínio corporativo.


## Para utilizar o projeto faça um clone do projeto.

1. Vá em CODE no repositório
2. Copie a url do repositório
3. Abra o Git Bash
4. Digite `git clone`, logo em seguida cole a url.
5. Acesse a pasta ./integration.
6. Execute o comando `yarn install` para instalar as dependências.
7. Para iniciar o servidor execute o camando `yarn start`.
8. Use o cliente HTTP para fazer a chamada pro endpoint http://localhost:3001/get-rows (Postman, Insomnia ou navegador).


## Tecnologias

Essas foram as tecnologias utilizadas no projeto :D

- Javascript
- Node.Js
- Insomnia
- Express
- Axios
- @hubspot/api-client
- googleapis


## APIs

* Google Sheets API
* Hubspot API


## Utilizando

### 1 - Planilha usada como base de dados 

![Planilha](https://github.com/GMProf/integration/blob/master/public/planilha.png)

* Acesse a [planilha de contatos](https://docs.google.com/spreadsheets/d/14keJHdZNRUIFDfsbCdmdMsWte98cSEqxaFhthAWpzi4/edit#gid=0)

### 2 - Contatos adicionados (apenas os contatos novos e com email corporativo)

![Contatos salvos no Hubspot](https://github.com/GMProf/integration/blob/master/public/contacts-save.png)

### 3 - Teste para envio de dados usando o Insomnia

![Teste Insomnia](https://github.com/GMProf/integration/blob/master/public/test-insomnia.png)


## Links
 
  - Repository: https://github.com/GMProf/integration
    - Caso encontre algum bug ou vulnerabilidade, por favor entre em contato. :D
      gmc.contato@gmail.com 

  ## Versão

  1.0


  ## Autor

  * **Gabriel Moraes de Carvalho** 

