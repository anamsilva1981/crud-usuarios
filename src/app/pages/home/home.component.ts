import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName!: string | null;

  ngOnInit(){
    // this.userName = sessionStorage.getItem('user')
    this.userName = 'Ana Maria';
  }

}
