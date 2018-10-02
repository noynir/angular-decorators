import * as ownKeys from 'core-js/fn/reflect/own-keys';
import * as Reflect from 'core-js/fn/reflect';

export function spyable(target: any){


  const proto = target.prototype;

  const methods = ownKeys(proto).filter((key) => {
    return typeof proto[key] === 'function' && key !== 'constructor';
  })


  console.log(methods);
  Reflect.defineMetadata('spyableMethods', methods, target  );

  return target;

}
