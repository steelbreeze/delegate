/**
 * @module delegate
 * 
 * Multicast delegate for TypeScript
 * 
 * Copyright (c) 2017 David Mesquita-Morris
 */

/***
 * A function that does nothing; this is returned from the [[create]] function if no [callable]{@link isCallable} [delegates]{@link Delegate} are passed in.
 * @hidden
 */
const noop = () => { return [] };

/**
 * The prototype for any callable function; one that takes an arbitory number of parameters and may return a value.
 */
export interface Delegate {
	/**
	 * @param args An arbitory number of parameters to pass to the [delegate]{@link Delegate}.
	 * @return An optional return from the [delegate]{@link Delegate}.
	 */
	(...args: any[]): any;
}

/**
 * Implementation of a [multicast delegate]{@link MulticastDelegate} as returned by the [[create]] function.
 * A [multicast delegate]{@link MulticastDelegate} encaptulates an arbitory number of [delegates]{@link Delegate} and returns an array of all their return values when called.
 * A [multicast delegate]{@link MulticastDelegate} is substitutable for a [delegates]{@link Delegate}.
 */
export interface MulticastDelegate {
	/**
	 * @param args An arbitory number of parameters to pass to the [multicast delegate]{@link MulticastDelegate}.
	 * @return An array of return values from the [multicast delegate]{@link MulticastDelegate}.
	 */
	(...args: any[]): any[];
}

/**
 * Tests a [delegate]{@link Delegate} to see if is contains callable behavior. 
 * @param delegate The [delegate]{@link Delegate} to test.
 * @return Returns true if the [delegate]{@link Delegate} contains callable behavior.
 */
export function isCallable(delegate: Delegate): boolean {
	return delegate !== undefined && delegate !== null;
}

/**
 * Tests a [delegate]{@link Delegate} to see if it contains behavior. 
 * @hidden
 */
function hasBehavior(delegate: Delegate): boolean {
	return delegate !== noop && isCallable(delegate);
}

/**
 * Creates a [multicast delegate]{@link Delegate} for one or more [delegates]{@link Delegate} (functions) that can be called as one.
 * @param delegates The set of [delegates]{@link Delegate} (functions) to aggregate into a single [delegate]{@link Delegate}.
 * @return Returns a [delegate]{@link Delegate} that when called calls the other [delegates]{@link Delegate} provided.
 */
export function create(...delegates: Delegate[]): MulticastDelegate {
	// filter the delegates passed to those that have callable behavior
	const callable = delegates.filter(hasBehavior);

	// return a new delegate that calls the ones passed; or the noop delegate if none are callable
	return callable.length !== 0 ? (...args: any[]) => callable.map(f => f(...args)) : noop;
}