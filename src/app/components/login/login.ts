import { Component } from '@angular/core';
import { AuthService } from '../../servicio/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginComponent {

 email: string = '';
  password: string = '';
  errror:string= '';

  constructor(private http: HttpClient, private router: Router) {}  

loginUsuario() {
  this.http.get<any[]>(`http://localhost:3000/users?email=${this.email}`)
    .subscribe({
      next: (usuarios) => {
        if (usuarios.length === 0) {
          this.errror = 'Usuario no encontrado';
          alert(this.errror);
          return;
        }

        const usuario = usuarios[0];

        if (usuario.password === this.password) {
          alert('¡Inicio de sesión exitoso!');
          this.errror = '';
          this.router.navigate(['/home']);
        } else {
          this.errror = 'Contraseña incorrecta';
          alert(this.errror);
        }
      },
      error: (error) => {
        this.errror = 'Error al conectar con el servidor';
        console.error('Error al intentar iniciar sesión', error);
      }
    });
}
}