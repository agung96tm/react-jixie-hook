# React Jixie Hook
[![Build Status](https://app.travis-ci.com/agung96tm/react-jixie-hook.svg?branch=main)](https://app.travis-ci.com/agung96tm/react-jixie-hook)

This package is a library for integrate jixie analytics in your react project and inspired by [react-gtm-hook](https://github.com/elgorditosalsero/react-gtm-hook).


## Getting Started
In your React project run

```
npm i --save react-jixie-hook
```


## How to use

```jsx
import { JixieProvider, useJixieDispatch } from 'react-jixie-hook';

const App = () => {
  const jixieParams = {
    id: 'jixie-123',
  }

  return (
    <JixieProvider state={jixieParams}>
      <div>
        <LoginView />
      </div>
    </JixieProvider>
  )
}

const LoginView = () => {
  const sendDataToJixie = useJixieDispatch()
  const handleClick = () => sendDataToJixie({ event: 'login', value: 'imAwesome' });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
```

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://agung96tm.com/">
        <img src="https://avatars.githubusercontent.com/u/1901484?v=4" width="100px;" alt=""/><br />
        <b>Agung Yuliyanto</b><br>
      </a>
      <div>💻</div>
    </td>
  </tr>
</table>
