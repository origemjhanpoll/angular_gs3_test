import { Component, Input, OnInit } from '@angular/core';
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
export class TransactionComponent implements OnInit {
  @Input() id!: number;
  @Input() merchant!: string;
  @Input() amount!: string;
  @Input() installments: number | undefined;
  @Input() date!: string;
  @Input() category!: string;

  icon!: string;
  month!: string;
  formattedDate!: string;

  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.icon = this.getCategoryIcon(this.category);
  }

  ngOnChanges() {
    if (this.date) {
      const dateObj = new Date(this.date);
      this.formattedDate =
        this.datePipe.transform(dateObj, "dd/MM 'às' HH:mm") || '';
    }
  }

  getCategoryIcon(category: string) {
    switch (category.toLowerCase()) {
      case 'essential':
        return 'assets/icons/shopping.svg';
      case 'entertainment':
        return 'assets/icons/entertainment.svg';
      case 'transport':
        return 'assets/icons/transport.svg';
      default:
        return 'assets/icons/entertainment.svg';
    }
  }
}
