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

var a = delegate.create(function (param) { console.log(param + " Hello"); }, function (param) { console.log(param + " World "); });
var b = delegate.create(function (param) { console.log(param + " Hello world"); });

var c = delegate.create(a, b);

a("1");
b("2");
c("3");
```
### Output
The output of the above code will be:
```shell
1 Hello
1 World
2 Hello world
3 Hello
3 World
3 Hello world
```
## License
MIT
