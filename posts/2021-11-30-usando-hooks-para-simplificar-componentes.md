---
date: 2021-11-30 02:15:11
title: Usando hooks para simplificar componentes.
description: Separando jsx de sua lógica com custom hooks.
image: /assets/img/andrew-keymaster-ln6bumfkns0-unsplash.jpg
category: Frontend
---
![organization](/assets/img/andrew-keymaster-ln6bumfkns0-unsplash.jpg "organization")*Crédito da imagem: [Andrew Keymaster](https://unsplash.com/@arnidan)*

## Introdução

Uma coisa muito comum quando criamos principalmente componentes de páginas é muita lógica sendo feita no mesmo arquivo que o JSX e com isso temos componentes de 100, 200, 400 linhas e quando paramos para observar, 80 linhas são realmente de JSX e o restante apenas validações, handlers, consumo de serviços ou contextos e etc. 

O que tenho utilizado para melhorar um pouco isso é fazer hooks que implementam tudo o que preciso e devolvem apenas o que será de fato utilizado pelo JSX.

## Exemplo de código

No exemplo a seguir temos uma página de Autenticação onde tudo que é necessário está sendo implementado no corpo da função contabilizando 98 linhas.

```jsx
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input } from '../../components';
import actions from '../../actions';
import './styles.css';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const minimumPasswordLength = 6;

  const [readyToSend, setReadyToSend] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.authenticate(credentials));
    history.push('/carteira');
  }, [credentials, dispatch, history]);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;

    const handlers = {
      email: () => setCredentials((prevState) => ({ ...prevState, email: value })),
      password: () => setCredentials((prevState) => ({ ...prevState, password: value })),
    };

    return handlers[name]();
  }, []);

  const validateEmail = useCallback((email) => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return re.test(String(email).toLowerCase());
  }, []);

  const handleValidationForm = useCallback((values) => {
    if (!validateEmail(values.email)) {
      return setReadyToSend(false);
    }
    if ([...values.password].length < minimumPasswordLength) {
      return setReadyToSend(false);
    }
    setReadyToSend(true);
  }, [validateEmail]);

  useEffect(() => {
    handleValidationForm(credentials);
  }, [credentials, handleValidationForm]);

  return (
    <div className="login-container">
      <form className="login-container-form" onSubmit={ handleSubmit }>
        <img
          src="brand-logo-full.png"
          alt="logo completa"
          className="login-container-form__brand-logo"
        />
        <Input
          type="email"
          className="form-control"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          value={ credentials.email }
          onChange={ handleChange }
        />
        <Input
          type="password"
          className="form-control"
          id="password"
          data-testid="password-input"
          placeholder="Senha"
          name="password"
          value={ credentials.password }
          onChange={ handleChange }
        />
        <button
          type="submit"
          className="btn btn-success"
          data-testid="submit-button"
          disabled={ !readyToSend }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
```

Para melhorar a legibilidade e organização criaremos um arquivo chamado `useLoginPage.js` e colocaremos lá, tudo que não for JSX.

```javascript
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../actions';

export const useLoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const minimumPasswordLength = 6;

  const [readyToSend, setReadyToSend] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.authenticate(credentials));
    history.push('/carteira');
  }, [credentials, dispatch, history]);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;

    const handlers = {
      email: () => setCredentials((prevState) => ({ ...prevState, email: value })),
      password: () => setCredentials((prevState) => ({ ...prevState, password: value })),
    };

    return handlers[name]();
  }, []);

  const validateEmail = useCallback((email) => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return re.test(String(email).toLowerCase());
  }, []);

  const handleValidationForm = useCallback((values) => {
    if (!validateEmail(values.email)) {
      return setReadyToSend(false);
    }
    if ([...values.password].length < minimumPasswordLength) {
      return setReadyToSend(false);
    }
    setReadyToSend(true);
  }, [validateEmail]);

  useEffect(() => {
    handleValidationForm(credentials);
  }, [credentials, handleValidationForm]);

  return {
    credentials,
    handleSubmit,
    handleChange,
    readyToSend,
  };
};
```


Feito isso, podemos alterar nosso componente para:

```jsx
import React from 'react';
import useLoginPage from './useLoginPage';
import { Input } from '../../components';
import './styles.css';

const Login = () => {
  const {
    credentials,
    handleSubmit,
    handleChange,
    readyToSend,
  } = useLoginPage();

  return (
    <div className="login-container">
      <form className="login-container-form" onSubmit={ handleSubmit }>
        <img
          src="brand-logo-full.png"
          alt="logo completa"
          className="login-container-form__brand-logo"
        />
        <Input
          type="email"
          className="form-control"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          value={ credentials.email }
          onChange={ handleChange }
        />
        <Input
          type="password"
          className="form-control"
          id="password"
          data-testid="password-input"
          placeholder="Senha"
          name="password"
          value={ credentials.password }
          onChange={ handleChange }
        />
        <button
          type="submit"
          className="btn btn-success"
          data-testid="submit-button"
          disabled={ !readyToSend }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
```


Agora temos no total, 53 linhas em nosso componente principal e toda implementação de lógica, consumo de serviços, efeitos colaterais está isolada em um hook.

## Conclusão

Espero que tenham gostado da dica e se tem algo que viu que pode ser melhorado, não deixe de entrar em contato. ✌🏽 