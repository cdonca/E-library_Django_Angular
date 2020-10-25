import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedUser;
  korisniks = [{ username: 'Test' }];
  constructor(private router: Router, private userService: UserService) {
    this.selectedUser = {
      id: -1, username: '', password: '', rola: ''
    };
  }

  login = () => {
    this.userService.loginUser(this.selectedUser).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('id_clana', this.selectedUser.id);
        localStorage.setItem('username', this.selectedUser.username);
        localStorage.setItem('rola', this.selectedUser.rola);
        alert('Poštovani ' + this.selectedUser.username + ' uspešno ste se ulogovali.');
        this.router.navigate(['/']);
      },
      error => {
        console.log('Došlo je do greške prilikom logovanja korisnika.', error)
      }
    );
  }
}
