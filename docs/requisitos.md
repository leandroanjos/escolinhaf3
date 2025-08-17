# **Documento de Requisitos de Software (DRS)** 📝

### **1. Introdução**

Este documento descreve os requisitos funcionais e não-funcionais do **Web App da Escolinha F3**. O sistema tem como objetivo principal auxiliar a comissão técnica na gestão de alunos e no controle de presença nos treinos, substituindo processos manuais e ineficientes.

### **2. Requisitos Funcionais**

Estes requisitos detalham as funcionalidades que o sistema deve oferecer.

---

### **2.1. Autenticação**

- **Descrição**: O sistema deve permitir que os membros da comissão técnica acessem o sistema de forma segura, usando suas credenciais de usuário.
- **RF01.01**: O sistema deve fornecer uma tela de login com campos para e-mail e senha.
- **RF01.02**: Após o login bem-sucedido, o sistema deve redirecionar o usuário para a página inicial da aplicação.
- **RF01.03**: O sistema deve oferecer uma funcionalidade de "logout" para encerrar a sessão do usuário.
- **RF01.04**: O sistema deve proteger as rotas da aplicação, impedindo o acesso de usuários não autenticados.

---

### **2.2. Cadastro de Usuários**

- **Descrição**: O sistema deve permitir que um usuário com permissão de administrador cadastre novos membros da comissão.
- **RF02.01**: O sistema deve fornecer um formulário para o cadastro de novos usuários.
- **RF02.02**: O formulário deve coletar os seguintes campos:
    - Nome Completo (obrigatório)
    - E-mail (obrigatório, será o login do usuário)
    - Senha (obrigatório, deve ser criptografada)
    - Grupo de Permissão (Administração ou Comissão)
- **RF02.03**: O sistema deve validar se o e-mail inserido já existe no banco de dados.
- **RF02.04**: O sistema deve enviar uma notificação de sucesso após o cadastro do novo usuário.

---

### **2.3. Gerenciamento de Usuários**

- **Descrição**: O sistema deve permitir que um usuário com permissão de administrador gerencie os usuários cadastrados.
- **RF03.01**: O sistema deve exibir uma lista de todos os usuários cadastrados.
- **RF03.02**: O sistema deve permitir a um administrador **bloquear** um usuário, impedindo seu acesso ao sistema.
- **RF03.03**: O sistema deve permitir a um administrador **desbloquear** um usuário.
- **RF03.04**: O sistema deve permitir que um administrador visualize o grupo de permissão de cada usuário.

---

### **2.4. Grupos de Permissão**

- **Descrição**: O sistema deve implementar dois grupos de permissão para controlar o acesso às funcionalidades.
- **RF04.01**: **Grupo "Administração"**:
    - Deve ter acesso total a todas as funcionalidades do sistema, incluindo cadastro e gerenciamento de usuários.
- **RF04.02**: **Grupo "Comissão"**:
    - Deve ter acesso apenas às funcionalidades de **Cadastro de Alunos** e **Registro de Presença**.
    - Não deve ter acesso às funcionalidades de cadastro e gerenciamento de usuários.

---

### **2.5. Cadastro de Alunos**

- **Descrição**: O sistema deve permitir que a comissão técnica cadastre novos alunos na plataforma, incluindo informações para a confecção do uniforme.
- **RF05.01**: O sistema deve fornecer um formulário para inserir os dados de um novo aluno.
- **RF05.02**: O formulário deve coletar os seguintes campos:
    - Nome Completo (obrigatório)
    - Data de Nascimento (obrigatório)
    - Nome do Responsável
    - Telefone de Contato (obrigatório)
    - E-mail de Contato
    - **Apelido**
    - **Número da Camisa**
    - **Tamanho do Short**
    - **Tamanho da Camiseta**
- **RF05.03**: Após o cadastro, o sistema deve exibir uma mensagem de confirmação para o usuário.
- **RF05.04**: O sistema deve validar se todos os campos obrigatórios foram preenchidos antes de salvar o registro.

---

### **2.6. Registro de Presença**

- **Descrição**: O sistema deve permitir que a comissão técnica registre a presença dos alunos nos treinos.
- **RF06.01**: O sistema deve exibir uma lista de todos os alunos cadastrados.
- **RF06.02**: Para cada aluno, o sistema deve fornecer uma opção para marcar a presença ou a falta em um treino específico.
- **RF06.03**: O sistema deve associar o registro de presença a uma data.
- **RF06.04**: O registro de presença deve ser armazenado no banco de dados para consulta futura.
- **RF06.05**: O sistema deve permitir visualizar o histórico de presença de um aluno individualmente.

---

### **2.7. Trilha de Auditoria**

- **Descrição**: O sistema deve registrar e manter um histórico de auditoria para as tabelas de dados principais (alunos, usuários, presenças).
- **RF07.01**: Cada registro adicionado ou alterado no banco de dados deve conter os seguintes campos de auditoria:
    - `createdAt`: Data e hora da criação do registro.
    - `updatedAt`: Data e hora da última alteração do registro.
    - `createdBy`: ID do usuário que criou o registro.
    - `updatedBy`: ID do último usuário que alterou o registro.
- **RF07.02**: O sistema deve preencher automaticamente esses campos sem a necessidade de intervenção do usuário.

---

### **3. Requisitos Não-Funcionais**

Estes requisitos descrevem características do sistema que não estão diretamente ligadas às funcionalidades, mas que são cruciais para a experiência do usuário e para o desempenho.

---

### **3.1. Usabilidade**

- **RNF01**: A interface do usuário deve ser intuitiva e fácil de usar, permitindo que a comissão técnica realize as tarefas rapidamente.
- **RNF02**: O design deve ser responsivo e se adaptar a diferentes tamanhos de tela (desktop, tablet e mobile).

---

### **3.2. Desempenho**

- **RNF03**: O tempo de resposta para carregar as páginas de cadastro e registro de presença deve ser inferior a 3 segundos.

---

### **3.3. Segurança**

- **RNF04**: As credenciais do Supabase (URL e `anon key`) devem ser armazenadas de forma segura e não devem ser expostas no código do lado do cliente.
- **RNF05**: O sistema deve garantir que apenas usuários autorizados tenham acesso às funcionalidades de cadastro e registro.

---

### **3.4. Manutenção**

- **RNF06**: O código-fonte do projeto deve estar bem documentado e seguir as melhores práticas para facilitar futuras manutenções e expansões.

---

### **4. Tecnologias e Ferramentas**

O projeto será desenvolvido utilizando as seguintes tecnologias:

- **Next.js**: Framework front-end.
- **Supabase**: Backend-as-a-Service para o banco de dados e APIs.
- **NextAuth**: Biblioteca para autenticação.
- **Vercel**: Plataforma de deploy.

---

### **5. Limitações e Restrições**

- **RL01**: Não haverá relatórios ou análises estatísticas. O histórico de presença será apenas para visualização.
- **RL02**: O foco do projeto é demonstrar as funcionalidades básicas de CRUD (Criar, Ler, Atualizar, Deletar), por isso não haverá funcionalidades complexas, como pagamentos ou agendamentos.