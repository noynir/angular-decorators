export function formField(target: any, key: string) {

    let propertyValue = { name: key, config: [''], value:'' }

    console.log(Object.keys(target));
    console.log(target.prototype);
    console.log(this);
    console.log(key);

    // console.log( target  )
    //
    //
    // if(!target.hasOwnProperty('formFields')){
    //   target.formFields = [key];
    // } else {
    //   target.formFields.push(key);
    // }

    function getter(){
      return propertyValue;
    }

    function setter(value: any){
      propertyValue =  { ...propertyValue, value};
    }

     Object.defineProperty(target, key,{
        get: getter,
        enumerable: true,
        configurable: true
     });






}
