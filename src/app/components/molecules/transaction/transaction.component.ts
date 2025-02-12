import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  providers: [DatePipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  @Input() id: number | undefined;
  @Input() merchant: string | undefined;
  @Input() amount: string | undefined;
  @Input() installments: number | undefined;
  @Input() date: string | undefined;
  @Input() category: string | undefined;

  icon!: string;
  month!: string;
  formattedDate!: string;

  constructor(private datePipe: DatePipe) {}

  ngOnChanges() {
    if (this.date) {
      const dateObj = new Date(this.date);
      this.formattedDate =
        this.datePipe.transform(dateObj, "dd/MM 'às' HH:mm") || '';
    }
  }
}
