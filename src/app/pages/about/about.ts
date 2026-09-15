import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface SetShare {
  label: string;
  range: string;
  pct: number;
}

interface Photo {
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  @ViewChild('mixSection') mixSection!: ElementRef<HTMLElement>;

  protected readonly setShares: SetShare[] = [
    { label: 'Schranz', range: '60–70%', pct: 70 },
    { label: 'Hard Techno', range: '20–30%', pct: 30 },
    { label: 'Industrial / Experimental', range: '10–20%', pct: 20 },
  ];

  protected mixVisible = false;

  protected readonly photos: Photo[] = [
    { title: '', desc: 'GIØR · Santiago de Chile', img: '/fotos/azotea-cabina.webp' },
    { title: '', desc: 'Live session', img: '/fotos/proyeccion-gior.webp' },
    { title: '', desc: '', img: '/fotos/estudio-pioneer.webp' },
    { title: '', desc: '', img: '/fotos/cortina-metalica.webp' },
    { title: '', desc: '', img: '/fotos/estudio-ojo-de-pez.webp' },
    { title: '', desc: '', img: '/fotos/calle-grafiti.webp' },

  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.mixVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(this.mixSection.nativeElement);
  }
}