
export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
	let newConstructor: Function = function() {
        console.log(`Creating new instance.`);
        console.log(target);
    }
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}


export function writable(isWritable: boolean) {
    return function(target: Object,
                    propertyKey: string,
                    descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey}.`);
        descriptor.writable = isWritable;
    }
}

export function deprecated(t:any, p:string, d:PropertyDescriptor): void {
    console.log("This is deprecated");
    console.log(t);
    console.log(p);
    console.log(d);
}