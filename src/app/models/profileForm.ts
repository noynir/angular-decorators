import {email, formControl, FormControlType, formGroup, maxLength, required} from '../decorators/formControl.decorator';

@formGroup()
export class ProfileForm{

  @required()
  @maxLength(5)
  @formControl({ label: 'First Name' })
  firstName: string ;

  @required()
  @formControl({label: 'Last Name'})
  lastName: string;


  @required()
  @email()
  @formControl({
    label: 'Email'
  })
  email: string;


  @formControl({
      type: FormControlType.Selection,
      selectionOptions:[
        { value: 0, text: 'Male' },
        { value: 1, text: 'Female' }
      ]
  })
  gender: number;





}
