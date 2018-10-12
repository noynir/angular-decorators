import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {ProfileForm} from '../models/profileForm';
import * as Reflect from 'core-js/fn/reflect';
import {FORM_METADATA} from '../decorators/formControl.decorator';
import {DeclarativeFormService} from '../models/DeclarativeForm';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit{

  form: ProfileForm;
  fields: any;
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });

  profileForm: FormGroup;
  formfields: string[];


  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }


  constructor(private fb: FormBuilder, private formService: DeclarativeFormService) { }

  ngOnInit(){

    this.form = new ProfileForm();
    this.fields = Object.values(Object.getPrototypeOf(this.form));
    console.log(this.form);
    // this.fields =  this.form.
    const formfields =  this.formService.getformFields(this.form);

    this.fields = formfields.fields;

    this.profileForm = this.fb.group(formfields.configuration);
    this.form.firstName = 'nir';
    this.form.lastName = 'noy';
    this.form.email = 'nirn@sela.co.il';

    // setTimeout(() => {
    //   this.profileForm.setValue(this.form);
    // }, 10);

    // console.log(formGroup);
    // console.log(this.profileForm.controls);


  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.form = Object.assign(this.form, this.profileForm.value);
    console.log(this.form);

  }
}

