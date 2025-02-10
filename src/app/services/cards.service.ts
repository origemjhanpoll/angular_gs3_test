import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly url =
    'https://raw.githubusercontent.com/origemjhanpoll/flutter_GS3_test/refs/heads/main/test/json/response.json';

  constructor(private clien: HttpClient) {}

  loadCards(): Observable<CardModel[]> {
    return this.clien
      .get<{ cards: any[] }>(this.url)
      .pipe(
        map((response) =>
          response.cards.map((cardJson) => this.mapToCardModel(cardJson))
        )
      );
  }

  private mapToCardModel(json: any): CardModel {
    return {
      id: json.id,
      number: json.number,
      bank: json.bank,
      type: json.type,
      brand: json.brand,
      limitAvailable: json.limit_available,
      bestPurchaseDay: json.best_purchase_day,
      transactions: json.transactions || [],
    };
  }
}
