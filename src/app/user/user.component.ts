import { Component } from '@angular/core';
import { UserService } from './../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    ime: new FormControl(''),
    prezime: new FormControl(''),
    rola: new FormControl('')
  });
  selectedUser;
  korisniks = [{ username: 'Test' }];
  constructor(private userService: UserService) {
    this.getUsers();
    this.selectedUser = {
      id: -1, username: '', password: '', ime: '', prezime: '', email: '', rola: ''
    };
  }

  getUsers = () => {
    this.userService.getAllUsers().subscribe(
      data => {
        this.korisniks = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  korisnikClicked = (korisnik) => {
    this.userService.getOneUser(korisnik.id).subscribe(
      data => {
        this.selectedUser = data;
        this.deleteKorisnik();
      },
      error => {
        console.log(error);
      }
    );
   
  }

  registerKorisnik = () => {
    this.userService.registerNewUser(this.selectedUser).subscribe(
      data => {
        this.korisniks.push(data);
        alert('Korisnik ' + this.selectedUser.username + ' je uspešno kreiran.')
      },
      error => console.log('Došlo je do greške u kreiranju korisnika.', error)
    );
  }

  deleteKorisnik = () => {
    this.userService.deleteUser(this.selectedUser.id).subscribe(
      _data => {
        this.getUsers();
      },
      error => {
        console.log(error);
      }
    );
  }
}
