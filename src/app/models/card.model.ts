import { TransactionModel } from "./transaction.model";

export interface CardModel {
  id: number;
  number: string;
  bank: string;
  type: string;
  brand: string;
  limitAvailable: string;
  bestPurchaseDay?: number;
  transactions: TransactionModel[];
}

