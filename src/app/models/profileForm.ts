import {formField} from '../decorators/formField.decorator';
import {email, formControl, formGroup, maxLength, required} from '../decorators/formControl.decorator';

@formGroup()
export class ProfileForm {

  @required()
  @maxLength(5)
  @formControl({ label:'First Name' })
  firstName: string ;

  @required()
  @formControl({label:'Last Name'})
  lastName: string;


  @required()
  @email()
  @formControl({label:'Email'})
  email: string;




}
