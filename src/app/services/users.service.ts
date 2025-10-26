import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private dataBaseStore: AngularFirestore
  ) { }

  getAllUsers(){
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  addUser(user: any){
    return this.dataBaseStore.collection('users').add(user);
  }

  updateUser(userId: string, user: any){
    return this.dataBaseStore.collection('users').doc(userId).update(user)
  }

  deleteUser(userId: string){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
