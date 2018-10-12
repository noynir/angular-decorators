// export function time(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
//
//   return {
//     ...descriptor,
//     value:function (...args: any[]) {
//         console.time(propertyKey);
//           const res = descriptor.value.apply(this, args);
//         console.timeEnd(propertyKey);
//
//         return res;
//     }
//   }
//
// }
//

export function time(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  return  {
    ...descriptor,
    value: function(...args) {
      console.time(propertyKey);
        const res = descriptor.value.apply(this, args);
      console.timeEnd(propertyKey);
      return res;
    }
  }
}
