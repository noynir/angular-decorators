import * as Reflect from "core-js/fn/reflect";
import {FORM_METADATA} from '../decorators/formControl.decorator';
import {Injectable} from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DeclarativeFormService {
  getformFields(formModel: any){
    return Reflect.getMetadata(FORM_METADATA, formModel.constructor);
  }
}
