import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { CardModel } from '../../../models/card.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cards: CardModel[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsService.loadCards().subscribe({
      next: (cards) => (this.cards = cards),
      error: (error) => console.error('Erro ao carregar os cartões', error),
      complete: () => console.log('Carregamento dos cartões completo'),
    });
  }
}
