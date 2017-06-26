import { create as delegate } from "../lib/node/delegate";

const a = delegate(param => { console.log(param + " Hello"); }, param => { console.log(param + " World "); });
const b = delegate(param => { console.log(param + " Hello world"); });

const c = delegate(a, b);

a("a")
b("b")

for ( const result of c("c")) {
	console.log(result);
}