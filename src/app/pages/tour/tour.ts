import { Component } from '@angular/core';

interface Venue {
  title: string;
  copy: string;
}

interface Experience {
  title: string;
  copy: string;
}

interface Photo {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-tour',
  imports: [],
  templateUrl: './tour.html',
  styleUrl: './tour.scss',
})
export class Tour {
  protected readonly venues: Venue[] = [
    { title: 'Rave íntima', copy: 'Fiestas de aforo reducido y espacios no convencionales. La energía se concentra y el set se vuelve cercano e intenso.' },
    { title: 'Club underground', copy: 'Clubes de la escena techno. Es donde mi propuesta se expresa con mayor naturalidad: conexión directa entre cabina, pista y comunidad.' },
    { title: 'Warehouse e industrial', copy: 'Naves y galpones de gran volumen, donde las texturas y las atmósferas mecánicas del set toman toda su dimensión.' },
    { title: 'Festival', copy: 'Escenarios de festival y eventos de gran escala, manteniendo la misma esencia: libertad, conexión y liberación emocional.' },
  ];

  protected readonly experience: Experience[] = [
    { title: 'Formación en Black Line Academy', copy: 'Mezcla, selección musical y manejo de equipamiento profesional. El paso que convirtió mi curiosidad por el DJing en un proyecto con objetivos concretos.' },
    { title: 'Creación de la identidad artística GIØR', copy: 'Concepto, símbolo y visión propia. El nombre nace de la evolución del mío; la Ø simboliza ruptura, transformación y la decisión de cuestionar lo establecido.' },
    { title: 'Sets en espacios privados, reuniones y afters', copy: 'Donde exploré la relación entre la selección musical y la energía del público antes de dar el salto a la cabina.' },
  ];

  protected readonly photos: Photo[] = [
    { title: 'Azotea', desc: 'Mezclando de noche en una azotea, con las luces de la ciudad desenfocadas al fondo.' },
    { title: 'Proyección', desc: 'De pie sobre una proyección roja con su nombre repetido en todo el fondo.' },
    { title: 'Estudio Pioneer', desc: 'Retrato de estudio en blanco y negro, de brazos cruzados tras un controlador Pioneer.' },
    { title: 'Calle con grafiti', desc: 'Apoyado en un muro con grafiti, en una calle de Santiago de noche.' },
    { title: 'Ojo de pez', desc: 'Tendido frente a un controlador, tomado con lente ojo de pez.' },
    { title: 'Cortina metálica', desc: 'Con capucha, de cuerpo entero frente a una cortina metálica.' },
  ];
}
