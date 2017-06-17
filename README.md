# delegate
Multicast delegate for TypeScript and JavaScript

[![NPM Version][npm-image]][npm-url]

## Install
```shell
npm install @steelbreeze/delegate
```

## Usage
### TypeScript

```typescript
import { create as delegate } from "../delegate";

const a = delegate(param => console.log(param + " Hello"), param => console.log(param + " World "));
const b = delegate(param => console.log(param + " Hello world"));

const c = delegate(a, b);

a("1")
a("2")
c("3");
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/state.js.svg
[npm-url]: https://npmjs.org/package/state.js
