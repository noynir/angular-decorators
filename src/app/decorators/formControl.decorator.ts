import * as Reflect from 'core-js/fn/reflect';
import {Validators} from '@angular/forms';


const FIELD_METADATA = Symbol('fieldMeta');

export const FORM_METADATA = Symbol('formMeta');


export function formControl(options: any) {

  return (target, key) => {
    const fieldMeta = {label: options.label || key, name: key, validators: options.validators || [] };
    Reflect.defineMetadata(FIELD_METADATA, fieldMeta, target, key);

    Object.defineProperty(target, key,
      {
        enumerable: true,
        configurable: true,
        writable: true
      });
  }
}


export function formGroup(options?: any){

  return (target) => {

    const proto = target.prototype;
    const formfields =  Object.keys(proto).reduce( (obj, key) => {

      const fieldMeta = Reflect.getMetadata(FIELD_METADATA, proto, key) || {};
      const {validators, ...field} = fieldMeta;
      const configuration = { ...obj.configuration, [key]: ['', validators] };
      const fields = [...obj.fields, field];
      return  { fields, configuration };
    }, {fields:[], configuration:{} });

    Reflect.defineMetadata(FORM_METADATA, formfields, target);



  };
}
//
// export function required(target, key) {
//   console.log(target, key);
//   const proto = target;
//   const fieldMeta = Reflect.getMetadata(FIELD_METADATA, proto, key) || {};
//   const fieldConfig = [ ...(fieldMeta.config || []), Validators.required];
//   Reflect.defineMetadata(FIELD_METADATA, {...fieldMeta, config: fieldConfig }, target, key);
// }

export const required = makeValidationDecorator(Validators.required);
export const email = makeValidationDecorator(Validators.email);
export const maxLength = makeValidationDecorator(Validators.maxLength, true);

function makeValidationDecorator(validationFn, argsRequired = false) {
    return function (...args) {
      return function(target, key) {
          const fn = argsRequired ? validationFn.apply(this, args) : validationFn;
          setValidationField(target, key, fn);
      }
    }
}

function setValidationField(target, key, validation){
  const proto = target;
  const fieldMeta = Reflect.getMetadata(FIELD_METADATA, proto, key) || { validators: []};
  fieldMeta.validators.push(validation)
  Reflect.defineMetadata(FIELD_METADATA, fieldMeta, target, key);
}


