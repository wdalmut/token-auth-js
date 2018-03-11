# Token Authentication layer for @wdalmut/mini-auth

A simple authentication layer for `token auth`

```
npm install --save @wdalmut/token-auth
```

## Usage

```js
token((token) => {
  return Promise.resolve({id: 1, ...})
})(res)
```

### Usage with `@wdalmut/mini-auth`

```js
// just an example
const fromDB = (token) => {
  return User.find(/*...*/),
};

auth(token(fromDb))
```

