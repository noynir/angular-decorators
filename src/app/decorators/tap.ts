import {tap} from 'rxjs/operators';
import {isObservable} from 'rxjs/internal/util/isObservable';

export interface TapOptions {
  color?: string;
  logType?: 'log' | 'info' | 'table';
}

// export function tap$(target, key){
//
//   let propValue;
//
//   function getter() {
//     return propValue;
//   }
//
//   function setter(value) {
//
//     if (isObservable(value)) {
//       propValue = value.pipe(
//         tap((data) => {
//             console.log(`${key} %O`, data);
//         })
//       );
//     } else {
//       propValue = value;
//     }
//   }
//
//   Object.defineProperty(target, key,{
//     get: getter,
//     set: setter,
//     enumerable: true,
//     configurable: true
//   });
//
// }

export function tap$(options: TapOptions) {

  console.log('this %O', this);
  return function(target, key) {

    console.log('this %O', this);
    let propValue;

    function getter() {
      return propValue;
    }

    function setter(value) {

      if (isObservable(value)) {
        const logType = options.logType || 'log';
        const color = options.color || 'black';
        propValue = value.pipe(
          tap((data) => {
            if(logType === 'table' && Array.isArray(data) ) {
              console.table(data);
            } else {
              console[logType](`%c${key} %O`, `color:${color}`, data);
            }
          })
        );
      } else {
        propValue = value;
      }
    }

    Object.defineProperty(target, key,{
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  };

}
