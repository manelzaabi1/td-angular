import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  searchText: string = '';
  
  events: Event[] = [
    {
      id: 1,
      titre: 'Angular Summit',
      description: 'Conférence sur Angular et l\'écosystème front-end.',
      date: new Date('2025-11-10'),
      lieu: 'Tunis',
      prix: 50.000,
      organisateurId: 1,
      imageUrl: 'https://picsum.photos/400/200?random=1',
      nbPlaces: 25,
      nbLike: 4
    },
    {
      id: 2,
      titre: 'Web Dev Days',
      description: 'Journée dédiée aux frameworks web modernes.',
      date: new Date('2025-01-05'),
      lieu: 'Adana',
      prix: 30.000,
      organisateurId: 2,
      imageUrl: 'https://picsum.photos/400/200?random=2',
      nbPlaces: 0,
      nbLike: 3
    },
    {
      id: 3,
      titre: 'Tech Innovation Conference',
      description: 'Découvrez les dernières innovations technologiques.',
      date: new Date('2025-03-15'),
      lieu: 'Sfax',
      prix: 75.000,
      organisateurId: 3,
      imageUrl: 'https://picsum.photos/400/200?random=3',
      nbPlaces: 10,
      nbLike: 8
    },
    {
      id: 4,
      titre: 'Digital Marketing Expo',
      description: 'Strategies de marketing digital pour les entreprises.',
      date: new Date('2025-06-20'),
      lieu: 'Tunis',
      prix: 40.000,
      organisateurId: 4,
      imageUrl: 'https://picsum.photos/400/200?random=4',
      nbPlaces: 50,
      nbLike: 12
    }
  ];

  get filteredEvents(): Event[] {
    if (!this.searchText.trim()) return this.events;
    const searchLower = this.searchText.toLowerCase();
    return this.events.filter(ev =>
      ev.titre.toLowerCase().includes(searchLower) ||
      ev.lieu.toLowerCase().includes(searchLower)
    );
  }

  likeEvent(event: Event): void {
    if (!this.isExpired(event)) {
      event.nbLike++;
    }
  }

  isExpired(event: Event): boolean {
    return event.date < new Date() || event.nbPlaces === 0;
  }

  getEventStatus(event: Event): string {
    if (event.nbPlaces === 0) return 'COMPLET';
    if (event.date < new Date()) return 'EXPIRÉ';
    return 'DISPONIBLE';
  }

  handleImageError(event: any): void {
    event.target.src = 'https://picsum.photos/400/200?random=99';
  }

  formatPrice(price: number): string {
    return `TND${price.toFixed(3)}`;
  }
}