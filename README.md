# delegate
Multicast delegate for TypeScript and JavaScript

## Install
```shell
npm install @steelbreeze/delegate
```

## Usage
```typescript
import { create as delegate } from "../delegate";

const a = delegate(param => console.log(param + " Hello"), param => console.log(param + " World "));
const b = delegate(param => console.log(param + " Hello world"));

const c = delegate(a, b);

a("1")
c("3");
```

## License
MIT
