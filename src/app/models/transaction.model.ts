export interface TransactionModel {
  id: number;
  merchant: string;
  amount: string;
  installments: number;
  date: string;
  category: string;
}
