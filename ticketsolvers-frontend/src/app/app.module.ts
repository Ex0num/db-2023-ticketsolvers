import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Componentes/header/header.component';
import { LoginComponent } from './Dialogs/login/login.component';
import { RegistroComponent } from './Dialogs/registro/registro.component';
import { HamburgerMenuComponent } from './Componentes/hamburger-menu/hamburger-menu.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { ContactoComponent } from './Vistas/contacto/contacto.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { FaqComponent } from './Vistas/faq/faq.component';
import { BuzonComponent } from './Vistas/buzon/buzon.component';
import { CrearTicketComponent } from './Dialogs/crear-ticket/crear-ticket.component';
import { MisDatosComponent } from './Dialogs/mis-datos/mis-datos.component';
import { CerrarSesionComponent } from './Dialogs/cerrar-sesion/cerrar-sesion.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    HamburgerMenuComponent,
    FooterComponent,
    ErrorComponent,
    ContactoComponent,
    InicioComponent,
    FaqComponent,
    BuzonComponent,
    CrearTicketComponent,
    MisDatosComponent,
    CerrarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
