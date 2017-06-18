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

a("a")
b("b")
c("c");
```
### JavaScript
```javascript
var delegate = require("@steelbreeze/delegate");

var a = delegate.create(function (param) { console.log(param + " Hello"); }, function (param) { console.log(param + " World "); });
var b = delegate.create(function (param) { console.log(param + " Hello world"); });

var c = delegate.create(a, b);

a("a");
b("b");
c("c");
```
### Output
The output of the above code will be:
```shell
a Hello
a World
b Hello world
c Hello
c World
c Hello world
```
## API
### Interfaces
#### Delegate
### Functions
#### create
#### isCallable
## License
MIT
