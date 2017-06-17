# delegate
Multicast delegate for TypeScript and JavaScript

## Install
```shell
npm install @steelbreeze/delegate
```

## Usage
### TypeScript
```typescript
import { create as delegate } from "@steelbreeze/delegate";

const a = delegate(param => console.log(param + " Hello"), param => console.log(param + " World "));
const b = delegate(param => console.log(param + " Hello world"));

const c = delegate(a, b);

a("1")
b("2")
c("3");
```
### JavaScript
```javascript
var delegate = require("@steelbreeze/delegate");

var a = delegate.create(function (param) { return console.log(param + " Hello"); }, function (param) { return console.log(param + " World "); });
var b = delegate.create(function (param) { return console.log(param + " Hello world"); });

var c = delegate.create(a, b);

a("1");
b("2");
c("3");
```

## License
MIT
