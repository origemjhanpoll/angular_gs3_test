import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { CardModel } from '../../../models/card.model';
import { CardComponent } from '../../molecules/card/card.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransactionComponent } from '../../molecules/transaction/transaction.component';
import { TransactionModel } from '../../../models/transaction.model';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    TransactionComponent,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: CardModel[] = [];
  transactions: TransactionModel[] = [];
  activedCardIndex!: number;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.activedCardIndex = 0;
    this.cardsService.loadCards().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.transactions = this.cards[0].transactions;
      },
      error: (error) => console.error('Erro ao carregar os cartões', error),
      complete: () => console.log('Carregamento dos cartões completo'),
    });
  }

  onCardClick(card: CardModel, index: number) {
    this.activedCardIndex = index;
    this.transactions = card.transactions;
  }
}
