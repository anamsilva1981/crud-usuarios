import { MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.css'
})

export class ModalFormUserComponent {

  formUser!: FormGroup;
  editUser: boolean = false;
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
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){
    this.buildForm();
    if(this.data && this.data.name){
      this.editUser = true;
    }
  }

  saveUser(){
    const objectUserForm: User = this.formUser.getRawValue();

    if(this.data && this.data.name){
      
      this.userService.updateUser(this.data.firebaseId, objectUserForm).then(
      (response: any) => {
        window.alert('Usuário editado com sucesso');
        this.closeModal();
      }
    )

    } else {
    //   this.userService.addUser(objectUserForm).then(
    //   (response: any) => {
    //     window.alert('Usuário salvo com sucesso');
    //     this.closeModal();
    //   }
    // )
    
    this.userService.addUser(objectUserForm).then(
      (response: any) => {
        window.alert('Usuário salvo com sucesso');
        this.closeModal();
      }
    ).catch(
      (err: any) => {
        console.log('Erro ao cadastrar usuário', err)
        window.alert('Usuário salvo com sucesso');
      });
    } 
  }
  
  buildForm(){
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(3)]],
      role: [null, [Validators.required, Validators.minLength(3)]],
      healthPlan: [null],
      dentalPlan: [null]
    })

    if(this.data && this.data.name){
      this.fillForm();
    }
  }

  fillForm(){
    this.formUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      sector: this.data.sector,
      role: this.data.role,
      healthPlan: this.data.healthPlan,
      dentalPlan: this.data.dentalPlan
    });
  }

  closeModal(){ 
    this.dialogRef.close()
  }
}