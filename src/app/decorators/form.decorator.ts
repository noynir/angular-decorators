
export interface FormSchema {

  getFormFieldsNames(): string[];
  getFormConfiguration(): any[];
}

export function form<T extends FormSchema >(constructor: {new()}) {

    const ctor = constructor;
    return class extends constructor {

      getFormFieldsNames(): string[] {
        return Object.keys(ctor.prototype);
      }

      getFormConfiguration(): any[] {
       return Object.values(ctor.prototype);
      }
    }
}
