# mercadolibre

# Como Rodar o Projeto mercadolibretest

Este documento explica como configurar e executar o projeto `mercadolibretest` localizado na pasta `mercadolibretest`.

---

## Requisitos

- Node.js (versão recomendada >= 18) (versão utilizada para desenvolvimento v24.1.0)
- npm (gerenciador de pacotes do Node.js) (versão utilizada para desenvolvimento v11.3.0)

---

## Passos para executar o projeto

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/felipegomiero/mercadolibre.git
   cd mercadolibre/mercadolibretest
   ```

2. **Instalar dependências**
   No diretório mercadolibretest, rode:
   ```bash
   npm install
   ```
3. **Rodar o servidor de desenvolvimento**
   Para iniciar o projeto em modo de desenvolvimento (com hot reload via Vite):
   ```bash
   npm run dev
   ```
   A aplicação então vai ficar disponível no endereço: http://localhost:5173 (porta padrão do Vite)
4. **Criar build para produção**
   Para compilar o projeto:
   ```bash
   npm run build
   ```
5. **Rodar build localmente para preview**
   Após gerar o build, para pré-visualizá-lo:
   ```bash
   npm run preview
   ```
6. **Executar testes**
   Para rodar todos os testes com o Vitest:
   ```bash
   npm test
   ```
7. **Executar testes com relatorio de cobertura**
   Para gerar um relatório de cobertura dos testes:
   ```bash
   npm run coverage
   ```
8. **Executar lint**
   Para verificar e corrigir problemas de estilo de código:
   ```bash
   npm run lint
   ```
