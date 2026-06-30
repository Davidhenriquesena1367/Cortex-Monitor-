# Cortex Monitor v2.0

Painel profissional de monitoramento de sistema, em tempo real.
Desenvolvido por **David Henrique Sena**.

---

## 🌐 Publicar como site online (Render — gratuito)

Isso gera um **link público de verdade** (`https://seu-projeto.onrender.com`),
acessível por qualquer pessoa, em qualquer dispositivo, sem instalar nada —
com **HTTPS / cadeado de site seguro** automático.

> **Importante para entender:** o painel mostrará os dados do **servidor onde
> o site está hospedado** (o computador do Render), não os dados de quem está
> *vendo* a página. Isso vale para qualquer site do mundo — nenhum site
> consegue ler a CPU/RAM da máquina do visitante por trás das costas, é uma
> proteção de segurança de todo navegador. Por isso a interface mostra um
> aviso "Servidor de Demonstração" no topo.

### Passo a passo

**1. Crie uma conta gratuita no GitHub** (se ainda não tiver)
→ https://github.com/signup

**2. Suba este projeto para um repositório no GitHub**
- Crie um novo repositório (botão verde "New")
- Nome sugerido: `cortex-monitor`
- Faça upload de todos os arquivos desta pasta (`server.js`, `package.json`,
  pasta `public/`, etc.) — pode usar "uploading an existing file" direto
  pelo navegador, sem precisar usar linha de comando

**3. Crie uma conta gratuita no Render**
→ https://render.com (pode entrar direto com sua conta do GitHub)

**4. Crie um novo Web Service**
- No painel do Render, clique em **New +** → **Web Service**
- Conecte sua conta do GitHub e selecione o repositório `cortex-monitor`
- Preencha:
  - **Name**: `cortex-monitor` (ou o nome que quiser — vira parte do link)
  - **Region**: Oregon (ou a mais próxima)
  - **Branch**: `main`
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
  - **Instance Type**: **Free**
- Clique em **Create Web Service**

**5. Aguarde o deploy**
Leva de 2 a 5 minutos. Quando terminar, o Render mostra o link, algo como:
```
https://cortex-monitor-xxxx.onrender.com
```

**6. Pronto!**
Esse link já tem HTTPS automático (cadeado de site seguro) e funciona em
qualquer dispositivo, sem instalar nada — celular, tablet, qualquer
computador.

> ⚠️ **Plano gratuito do Render**: o site "dorme" depois de alguns minutos
> sem acesso, e demora ~30-50 segundos para "acordar" no primeiro acesso
> depois disso. Para a apresentação, acesse o link uns 2 minutos antes de
> precisar mostrar, para garantir que já esteja "acordado".

---

## 🛠 Rodar localmente (para testes/desenvolvimento)

1. Abra a pasta no VS Code
2. `Ctrl + J` → terminal
3. `npm install`
4. `npm start`
5. Acesse `http://localhost:3000`

Ou dê dois cliques em `iniciar.bat` (Windows).

---

## Funcionalidades

- **CPU** — carga total, por núcleo, temperatura, modelo
- **RAM** — uso, swap, donut chart de distribuição
- **Disco** — todas as partições com barra de uso
- **Rede** — RX/TX por interface em Mbps
- **Processos** — top 10 por CPU com gráfico inline
- **Bateria** — detecta automaticamente se disponível
- Atualização a cada 3 segundos
- Interface dark premium, responsiva
- HTTPS automático quando hospedado no Render

---

**Desenvolvido por David Henrique Sena**
