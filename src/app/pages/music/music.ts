import { Component } from '@angular/core';

interface SetItem {
  title: string;
  desc: string;
  duration: string;
  featured?: boolean;
}

@Component({
  selector: 'app-music',
  imports: [],
  templateUrl: './music.html',
  styleUrl: './music.scss',
})
export class Music {
  protected readonly sets: SetItem[] = [
    {
      title: 'Øbliteration Mode',
      desc: 'Este set no busca entretener: busca romper, consumir, transformar. Los cuerpos se sacuden, los espíritus despiertan, y el deseo se vuelve materia que vibra con cada golpe. La colisión entre lo visceral y lo trascendental, entre el caos y la comunión.',
      duration: '58 min',
      featured: true,
    },
    {
      title: 'Caos Ritual',
      desc: 'Selección más industrial, pensada para naves y galpones de gran volumen.',
      duration: '46 min',
    },
    {
      title: 'Fricción',
      desc: 'Un recorrido de club: schranz cerrado con pasajes de hard techno.',
      duration: '52 min',
    },
  ];
}
