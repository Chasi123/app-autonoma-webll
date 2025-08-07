import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../interface/interfaceUsuarios';
import { AuthService } from '../../servicio/auth';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  registrarUsuario() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/users', nuevoUsuario)
      .subscribe({
        next: () => {
          alert('Usuario registrado correctamente');
        },
        error: (err) => {
          console.error('Error al registrar', err);
        }
      });
  }
}