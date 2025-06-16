import { Component, linkedSignal, signal } from '@angular/core';
import { User, userMock } from '@auth/models/user.model';
import { SectionHeaderComponent } from '@shared/components';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [SectionHeaderComponent]
})
export class HomePageComponent {
  title = signal('NG Project Tracking Tool');

  currentUser = linkedSignal<User | null>(() => {
    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  });

  login(): void {
    this.currentUser.set(userMock);
    localStorage.setItem('user', JSON.stringify(userMock));
  }
}
