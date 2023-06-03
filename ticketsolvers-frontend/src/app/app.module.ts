// --------- Angular core imports --------- //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// --------- Angular extra imports --------- //
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// --------- Module App imports --------- //
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

// --------- Module UsuarioLogeado --------- //
import { BuzonClienteComponent } from './ModuloUsuarioLogeado/Vistas/buzon-cliente/buzon-cliente.component';
import { RecepcionSupervisorComponent } from './ModuloUsuarioLogeado/Vistas/recepcion-supervisor/recepcion-supervisor.component';
import { AsignacionesEmpleadoComponent } from './ModuloUsuarioLogeado/Vistas/asignaciones-empleado/asignaciones-empleado.component';
import { CerrarSesionComponent } from './ModuloUsuarioLogeado/Dialogs/cerrar-sesion/cerrar-sesion.component';
import { MisDatosComponent } from './ModuloUsuarioLogeado/Dialogs/mis-datos/mis-datos.component';
import { CrearTicketComponent } from './ModuloUsuarioLogeado/Dialogs/crear-ticket/crear-ticket.component';

// --------- Material imports --------- //
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

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
    CrearTicketComponent,
    MisDatosComponent,
    CerrarSesionComponent,
    BuzonClienteComponent,
    RecepcionSupervisorComponent,
    AsignacionesEmpleadoComponent
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
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
