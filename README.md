# Web App da Escolinha F3

Este projeto é um aplicativo web desenvolvido para a comissão técnica de uma escolinha de futebol, com o objetivo de simplificar o gerenciamento de alunos e o registro de presença nos treinos.<br>
O sistema é uma ferramenta valiosa para organizar as informações da equipe e monitorar a participação dos atletas.

## Funcionalidades
- Cadastro de Alunos: Permite adicionar novos alunos com informações essenciais, como nome, data de nascimento e contato.
- Registro de Presença: Possibilita que a comissão técnica registre a presença dos alunos em cada sessão de treino.

## Tecnologias Utilizadas
O projeto é construído com tecnologias modernas e eficientes, garantindo uma experiência de usuário rápida e uma arquitetura escalável.

- Front-end: Aplicação React desenvolvida através do framework Next.js.
- Back-end: API REST e Autenticação JWT utilizando os serviços do Supabase (uma plataforma "Backend as a Service" que fornece um banco de dados PostgreSQL, autenticação e APIs em tempo real).
- Deploy: O deploy e a hospedagem é realizada utilizando a solução de CI/CD da Vercel.

## Documentação
A documentação do projeto está disponível na pasta docs/. <br>
Ela contém artefatos importantes para entender a estrutura, o fluxo de dados e os requisitos do sistema.

### Diagramas:

- Diagramas de Casos de Uso: Representam as interações do usuário com o sistema.
- Diagrama de Entidade e Relacionamento (DER): Detalha a estrutura do banco de dados e as relações entre as tabelas.
- Documento de Requisitos de Software (DRS): Descreve em detalhes as funcionalidades e os requisitos do projeto.

## Como Executar o Projeto
Siga estes passos para clonar o repositório e rodar o projeto localmente.

### Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou Yarn) instalados na sua máquina.

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/frontend
```

2. Instale as dependências:
```bash
npm install
# ou
# yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env.local na pasta frontend/ e adicione suas chaves de API do Supabase. Você pode encontrar essas chaves no painel do seu projeto Supabase.

```env
NEXT_PUBLIC_SUPABASE_URL=sua-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
# yarn dev
```

O projeto estará acessível em http://localhost:3000.

## Status do Projeto

Este projeto está em desenvolvimento e as funcionalidades mencionadas estão sendo implementadas.<br>
O objetivo é expandir o sistema com recursos adicionais, como gestão de treinos e relatórios de frequência.
