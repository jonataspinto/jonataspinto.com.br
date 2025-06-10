---
date: 2025-01-27 06:18:00
title: Detectando Interação Mínima do Usuário no Google Tag Manager
description: Uma técnica simples em JavaScript para detectar interações mínimas
  dos usuários e integrá-la ao Google Tag Manager (GTM) para rastrear essas
  interações de forma eficaz.
image: /assets/img/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_9hyptyrv67sx5nwxk5om.webp
category: GTM
---
Ao analisar o comportamento dos usuários em um site, um dos principais desafios é identificar quando um usuário realmente interage com a página. Neste post, exploraremos uma técnica simples em JavaScript para detectar interações mínimas dos usuários e integrá-la ao Google Tag Manager (GTM) para rastrear essas interações de forma eficaz.

---

## Por que Rastrear Interação Mínima do Usuário?

Detectar interações mínimas do usuário é particularmente útil para:

- Diferenciar entre usuários ativos e passivos.
- Melhorar a precisão das análises ao garantir que eventos sejam disparados apenas por engajamento real.
- Ativar tags de marketing ou rastreamento no GTM apenas após o usuário demonstrar interesse genuíno.

Interações mínimas incluem ações como movimentos do mouse, cliques ou rolagem — essencialmente qualquer atividade pequena que indique que o usuário não está inativo.

---

## A Solução em JavaScript

Aqui está o código que detecta interação mínima do usuário e envia um evento para o `dataLayer` do GTM:

```html
<script>
    (function () {
      var fired = false;
      var listener = function () {
        if (fired === true) {
          return false;
        }
        
        console.log("minimal-user-interaction: ok");
        dataLayer.push({ "minimal-user-interaction": true });
        dataLayer.push({ event: "minimal-user-interaction" });

        fired = true;
        return true;
      };

      document.addEventListener("focus", listener, { once: true });
      document.addEventListener("mousemove", listener, { once: true });
      document.addEventListener("mousewheel", listener, { once: true });
      document.addEventListener("mouseout", listener, { once: true });
      document.addEventListener("mouseup", listener, { once: true });
      document.addEventListener("contextmenu", listener, { once: true });
      document.addEventListener("keydown", listener, { once: true });
      document.addEventListener("click", listener, { once: true });
      document.addEventListener("scroll", listener, { once: true });
      document.addEventListener("touchstart", listener, { once: true });
    })();
</script>
```

---

## Como Funciona

### 1. **Inicialização de Variáveis**
A variável `fired` garante que o evento seja disparado apenas uma vez, mesmo que o usuário realize múltiplas interações.

### 2. **A Função de Gatilho**
A função `listener`:
- Verifica se o evento de interação já foi disparado.
- Registra uma mensagem de confirmação no console.
- Envia dados para o `dataLayer` para uso no GTM.
- Define `fired` como `true` para evitar execuções duplicadas.

### 3. **Eventos Monitorados**
Vários eventos são monitorados no `document` para detectar interações comuns do usuário, como:
- `mousemove`: Quando o cursor se move.
- `click`: Quando o usuário clica em qualquer lugar da página.
- `scroll`: Quando o usuário rola a página.
- `touchstart`: Quando um evento de toque ocorre (ex.: em dispositivos móveis).

A opção `{ once: true }` garante que cada listener seja removido após a primeira execução, otimizando o desempenho.

---

## Integração com o Google Tag Manager

Para fazer isso funcionar com o GTM:

1. **Envie Eventos para o `dataLayer`**
   - O método `dataLayer.push()` no código adiciona dois dados:
     - `{ "minimal-user-interaction": true }`: Um indicador de que houve interação.
     - `{ event: "minimal-user-interaction" }`: Um evento personalizado que pode acionar tags no GTM.

2. **Configure um Gatilho no GTM**
   - Crie um gatilho no GTM para ouvir o evento `minimal-user-interaction`:
     - **Tipo de Gatilho**: Evento Personalizado.
     - **Nome do Evento**: `minimal-user-interaction`.

3. **Ative Tags Baseadas na Interação**
   - Vincule o gatilho a quaisquer tags que você deseje disparar apenas após a interação do usuário, como eventos do Google Analytics ou tags de remarketing.

---

## Casos de Uso Práticos

Esta técnica pode ser particularmente úteis em cenários como:

- **Medição de Engajamento**: Disparar eventos analíticos apenas para usuários ativos, melhorando a confiabilidade dos dados.
- **Carregamento Preguiçoso (Lazy Loading)**: Carregar recursos pesados ou scripts de terceiros somente quando o usuário interagir com a página.
- **Rastreamento de Conversão**: Garantir que tags de rastreamento sejam disparadas apenas após engajamento real do usuário.

---

## Considerações Finais

Rastrear interação mínima do usuário é uma forma simples e poderosa de melhorar a configuração analítica do seu site. Ao combinar esta técnica em JavaScript com o Google Tag Manager, você pode capturar insights mais significativos e otimizar o desempenho do seu site.

O que achou? Você já implementou soluções semelhantes em seus projetos? Compartilhe sua experiência ou opinião.

