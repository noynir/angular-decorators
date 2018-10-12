import * as Reflect from 'core-js/fn/reflect';
import {ANNOTATIONS} from '@angular/core/src/util/decorators';



export function TestHost(...args){
  console.log(args);
  return function(constructor:any){


    console.log(constructor['__annotations__']);
    console.log(constructor['__prop__metadata__']);
    console.log(constructor['__parameters__']);

  }
}
