import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '@shared/components';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [SectionHeaderComponent]
})
export class HomePageComponent {
  title = signal('NG Project Tracking Tool');
}
