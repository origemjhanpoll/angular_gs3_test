import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { BottombarComponent } from '../core/components/bottombar/bottombar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BottombarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-gs3-test';
}
