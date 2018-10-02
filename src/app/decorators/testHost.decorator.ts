import * as Reflect from 'core-js/fn/reflect';

export function TestHost(constructor:any) {

  console.log(constructor['__annotations__']);

  console.log(Reflect.getMetadataKeys(constructor));
  console.log(Reflect.getOwnMetadata('annotations', constructor));
  console.log(Reflect.getMetadata('annotations', constructor));
  console.log(Reflect.getMetadataKeys(constructor.prototype));


}
