import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.css'
})
export class ModalFormUserComponent {

  formUser!: FormGroup;
  listHelthPlan = [
    {id: 1, description: 'Plano 300 Enfermaria'},
    {id: 2, description: 'Plano 400 Enfermaria'},
    {id: 3, description: 'Plano 500 Plus'} 
  ]

  listDentalPlan = [
    {id: 1, description: 'Plano basic'},
    {id: 2, description: 'Plano Midion'},
    {id: 3, description: 'Plano Plus'} 
  ]
  

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(3)]],
      role: [null, [Validators.required, Validators.minLength(3)]],
      healthPlan: [''],
      dentalPlan: ['']
    })
  }

  closeModal(){ 
    this.dialogRef.close()
  }
}
