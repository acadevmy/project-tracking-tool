import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button, defaultButton } from '@shared/models';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  imports: [NgClass, RouterLink]
})
export class SectionHeaderComponent {
  title = input('');
  button = input<Required<Button>, Button>(defaultButton, {
    transform: (value) => ({ ...defaultButton, ...value })
  });
}
