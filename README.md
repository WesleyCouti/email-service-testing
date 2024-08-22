<<<<<<< HEAD
# redis-dba

Projeto final da cadeira de Banco de dados Avançado realizada no curso de Ciência da Computação na Universidade Federal de Pelotas. Buscamos realizar um estudo de caso com o banco NoSQL Redis, utilizando o mesmo como message broker em um sistema de disparo de e-mails em lote.


## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
    - [Bull](https://github.com/OptimalBits/bull)
    - [AWS.SES](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property)

## Como executar

1. Clone o repositório e entre na pasta
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Rode o projeto com o comando `npm start`
=======
# email-service-testing
Projeto: Banco-Dados-Avancado
Testes Unitários
Este projeto inclui testes unitários para garantir a funcionalidade correta do recurso de envio de e-mail usando AWS SES, um sistema de filas Redis com Bull, e Fastify para roteamento.

Executando os Testes
Para executar os testes unitários, use o seguinte comando:

bash
Copiar código
npm test
Estrutura dos Testes
Os testes são escritos utilizando Jest e estão localizados no diretório src/controllers/tests.

Detalhes dos Testes
EmailController.spec.js
Este arquivo contém testes unitários para o módulo EmailController, que é responsável por lidar com as requisições de envio de e-mail. O controlador interage com o MailQueue para adicionar e-mails à fila.

Funções Testadas:

sendEmail: Esta função processa a requisição para enviar um e-mail e adiciona o e-mail à fila.
Casos de Teste:

Envio de e-mail com sucesso:

Faz o mock do método MailQueue.add para simular a adição de um e-mail à fila.
Verifica se o e-mail foi adicionado à fila com os detalhes corretos.
Assegura que o código de resposta é 200 quando o e-mail é adicionado com sucesso à fila.
Tratamento de falha no envio de e-mail:

Faz o mock do método MailQueue.add para simular uma falha ao adicionar um e-mail à fila.
Verifica se o código de resposta é 500 e a mensagem de erro apropriada é retornada.
Configuração dos Testes
Configuração do Jest:
A configuração do Jest está definida em jest.config.js e especifica o ambiente como node, com os arquivos de teste correspondendo a padrões para arquivos em __tests__ e arquivos com extensões .spec.js ou .test.js.
Mocking
Os testes utilizam amplamente as capacidades de mocking do Jest para simular o comportamento de dependências externas, como o MailQueue. Isso garante que os testes se concentrem na lógica dentro do EmailController, sem depender de sistemas externos como Redis ou AWS SES.

Limpeza dos Mocks
Antes de cada teste, os mocks são limpos usando jest.clearAllMocks() para garantir que os testes sejam isolados e não interfiram uns com os outros.

Conclusão
Os testes unitários neste projeto são projetados para garantir que o recurso de envio de e-mails funcione conforme o esperado em várias condições. Esses testes ajudam a manter a confiabilidade do serviço e a identificar problemas cedo no processo de desenvolvimento.
>>>>>>> f2f9ac568659ed442fbe178f35b6ea21a9c856dc
