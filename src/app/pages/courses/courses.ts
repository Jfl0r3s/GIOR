import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Program {
  title: string;
  modality: string;
  duration: string;
  copy: string;
}

interface Testimonial {
  quote: string;
  name: string;
}

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  protected readonly programs: Program[] = [
    {
      title: 'Iniciación a la mezcla',
      modality: 'Presencial · Santiago',
      duration: '4 semanas',
      copy: 'Selección musical, manejo de equipamiento profesional y las bases de la mezcla en vivo, partiendo de cero.',
    },
    {
      title: 'Schranz & Hard Techno Intensivo',
      modality: 'Online',
      duration: '6 semanas',
      copy: 'Construcción de sets de alta intensidad: transiciones, dinámicas de energía y curaduría de un set propio.',
    },
    {
      title: 'Mentoría 1 a 1',
      modality: 'Online / Presencial',
      duration: 'A medida',
      copy: 'Sesiones personalizadas para artistas que ya mezclan y buscan definir una identidad sonora propia.',
    },
  ];

  protected readonly testimonials: Testimonial[] = [
    { quote: 'Aprendí a construir un set que realmente cuenta algo, no solo a encadenar tracks.', name: 'Alumno, Iniciación a la mezcla' },
    { quote: 'La mentoría me ayudó a encontrar mi propio sonido dentro del hard techno.', name: 'Alumna, Mentoría 1 a 1' },
  ];
}
