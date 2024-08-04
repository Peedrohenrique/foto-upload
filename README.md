# Galeria de Fotos com Upload para Amazon S3

Este projeto é uma galeria de fotos simples desenvolvida com o objetivo de permitir o upload direto para o Amazon S3 (AWS) utilizando Next.js, React e TailwindCSS. A integração com a biblioteca de upload Uppy facilita a interação dos usuários, permitindo que eles arrastem e soltem imagens na interface para realizar uploads e visualizar as imagens já armazenadas no S3.

## Tecnologias Utilizadas

- **Next.js:** Utilizado para criar uma aplicação React server-side renderizada.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TailwindCSS:** Framework CSS utilizado para estilização com classes utilitárias.
- **Uppy:** Biblioteca JavaScript para upload de arquivos, utilizada para facilitar o processo de upload de imagens.
- **AWS S3:** Serviço de armazenamento de objetos da Amazon Web Services, utilizado para armazenar as imagens enviadas pelos usuários.

## Funcionalidades Principais

- Upload de imagens diretamente para o Amazon S3.
- Arrastar e soltar imagens na interface para facilitar o processo de upload.
- Visualização das imagens já armazenadas no S3 na galeria da aplicação.
- Layout responsivo utilizando TailwindCSS, otimizado para diferentes dispositivos.

## Como Executar o Projeto Localmente

Para executar este projeto localmente, siga estas instruções:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Peedrohenrique/foto-upload.git
   cd foto-upload

2. **Instale as dependências:**

```bash
   npm install
    # ou
   yarn install
```

3. **Configure as variáveis de ambiente:**

```bash
   Renomeie o arquivo .env.example para .env.local e 
   configure as variáveis necessárias, como as credenciais da AWS S3.
```
4. **Inicie o servidor de desenvolvimento:**

```bash
   npm run dev
   # ou
   yarn dev
```

5. **Acesse a aplicação no navegador:**

```bash
  Abra http://localhost:3000 no seu navegador para visualizar a aplicação.
```