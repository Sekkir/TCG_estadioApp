import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/servicios//auth/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  usuario: string = '';
  clave: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {

  }



  // Método para manejar el envío del formulario
  login() {
    const credentials = { usuario: this.usuario, clave: this.clave };

    this.authService.login(credentials).subscribe(
      (response) => {
        if (response.success) {
          // Guardamos el token en localStorage
          this.authService.saveToken(response.token);
          console.log('Login exitoso', response);
          this.router.navigate(['/productos']); // Redirigir a la página de productos
        }
      },
      (error) => {
        console.error('Error de login', error);
        alert('Credenciales incorrectas');
      }
    );
  }

}
