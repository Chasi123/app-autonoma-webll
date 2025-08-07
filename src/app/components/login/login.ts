import { Component } from '@angular/core';
import { AuthService } from '../../servicio/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

 email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}  // <-- inyectar Router

  loginUsuario() {
    this.http.get<any[]>(`http://localhost:3000/users?email=${this.email}`)
      .subscribe({
        next: (usuarios) => {
          if (usuarios.length === 0) {
            alert('Usuario no encontrado');
            return;
          }

          const usuario = usuarios[0];

          if (usuario.password === this.password) {
            alert('¡Inicio de sesión exitoso!');
            this.router.navigate(['/home']);  
          } else {
            alert('Contraseña incorrecta');
          }
        },
        error: (err) => {
          console.error('Error al intentar iniciar sesión', err);
        }
      });
  }
}