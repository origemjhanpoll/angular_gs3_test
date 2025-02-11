import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  showLimit = signal(true);
  color: string = '#346cbd';

  @Input() id: number | undefined;
  @Input() number: string | undefined;
  @Input() bank: string | undefined;
  @Input() type: string | undefined;
  @Input() brand: string | undefined;
  @Input() limitAvailable: string | undefined;
  @Input() bestPurchaseDay: number | undefined;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.color = this.brand == 'Visa' ? '#346cbd' : '#00494B';
  }
  onShowLimit() {
    this.showLimit.update((value) => !value);
  }
  handleClick() {
    this.onClick.emit();
  }
}
