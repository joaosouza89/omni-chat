# 📌 Setup do Projeto Omnichannel User Management

## 📖 Visão Geral
Este projeto implementa a **criação de contas de usuários** com validação de endereço utilizando a API do **ViaCEP**. A aplicação é baseada em uma arquitetura **microservices** para garantir escalabilidade e disponibilidade, permitindo a continuidade de interações em diferentes canais digitais.

## 📂 Estrutura do Projeto
```
📁 omnichannel-user-management
│── 📂 backend
│   ├── 📂 user-service
│   ├── 📂 address-service
│   ├── 📂 notification-service
│   ├── 📂 api-gateway
│── 📂 frontend
│   ├── 📂 web-app
│   ├── 📂 mobile-app
│── 📂 database
│── 📜 docker-compose.yml
│── 📜 README.md
│── 📜 SETUP.md
```

## 🔧 Pré-requisitos
Antes de iniciar a configuração, certifique-se de ter instalado:

- **[Docker](https://www.docker.com/get-started)** (para rodar os serviços)
- **[Node.js](https://nodejs.org/)** v16+ (para rodar o backend e frontend localmente)
- **[PostgreSQL](https://www.postgresql.org/)** ou **MongoDB** (para armazenamento de dados)
- **[Redis](https://redis.io/)** (para cache)

## 🚀 Configuração e Execução

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/seuusuario/omnichannel-user-management.git
cd omnichannel-user-management
```

### **2️⃣ Configuração do Backend**

#### **2.1 Criando o arquivo de ambiente**
Copie o arquivo de exemplo `.env.example` para `.env` e configure as variáveis:
```bash
cp backend/.env.example backend/.env
```

Edite o arquivo `.env` e adicione suas credenciais:
```env
DATABASE_URL=postgres://user:password@localhost:5432/userdb
VIACEP_API=https://viacep.com.br/ws/
```

#### **2.2 Subindo os containers do backend**
```bash
docker-compose up -d
```

Caso queira rodar sem Docker, entre na pasta do serviço e execute:
```bash
cd backend/user-service
npm install
npm start
```

### **3️⃣ Configuração do Frontend**
Entre na pasta do Web App e instale as dependências:
```bash
cd frontend/web-app
npm install
npm start
```
O aplicativo estará disponível em `http://localhost:3000`.

### **4️⃣ Testando a API**
Utilize **Postman** ou **cURL** para testar o cadastro de usuários:
```bash
curl -X POST http://localhost:8080/api/users -H "Content-Type: application/json" -d '{
  "name": "Carlos Fontinelle",
  "email": "carlos@email.com",
  "cep": "69000-000"
}'
```

Se tudo estiver correto, a resposta será:
```json
{
  "id": 1,
  "name": "Carlos Fontinelle",
  "email": "carlos@email.com",
  "address": "Rua Exemplo, Manaus, AM"
}
```

## 📜 Notas
- O backend pode ser acessado via `http://localhost:8080`
- O Web App roda em `http://localhost:3000`
- O banco de dados PostgreSQL roda em `localhost:5432`
- O Redis pode ser testado em `localhost:6379`

## 📬 Contato
Caso tenha dúvidas, entre em contato pelo e-mail **seuemail@email.com** ou abra uma **issue** no repositório do GitHub.