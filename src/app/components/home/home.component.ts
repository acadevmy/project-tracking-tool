import { Component, signal } from '@angular/core';

import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [SectionHeaderComponent]
})
export class HomeComponent {
  title = signal('NG Project Tracking Tool');
}
