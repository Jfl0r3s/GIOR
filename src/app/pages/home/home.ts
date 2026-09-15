import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { About } from '../about/about';
 
interface Concept {
  title: string;
  copy: string;
}
 
interface Show {
  date: string;
  venue: string;
  city: string;
  type: string;
}
 
@Component({
  selector: 'app-home',
  imports: [RouterLink, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly concepts: Concept[] = [
    { title: 'Libertad', copy: 'La pista como un espacio sin juicio, donde el cuerpo decide.' },
    { title: 'Conexión', copy: 'Encuentros entre personas que quizás nunca se habían visto antes.' },
    { title: 'Catarsis', copy: 'La intensidad del set transformada en liberación emocional.' },
    { title: 'Comunidad', copy: 'Una escena que se sostiene entre cabina, pista y after.' },
  ];
 
  protected readonly shows: Show[] = [
    { date: '04 OCT', venue: 'Galpón Industrial', city: 'Santiago, CL', type: 'Warehouse' },
    { date: '18 OCT', venue: 'Club Subsuelo', city: 'Valparaíso, CL', type: 'Club underground' },
    { date: '08 NOV', venue: 'Rave Privada', city: 'Santiago, CL', type: 'Rave íntima' },
  ];
}
 

















