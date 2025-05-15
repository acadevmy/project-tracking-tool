import { Component, computed, effect, output, signal } from '@angular/core';

import { Priority } from '../../models/project.model';
import { SearchProject } from '../../models/search-project.model';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent {
  searching = output<SearchProject>();

  name = signal<string | undefined>(undefined);
  priority = signal<string | undefined>(undefined);
  done = signal<string | undefined>(undefined);

  private searchProject = computed<SearchProject>(() => {
    return {
      name: this.name(),
      priority: this.priority() as Priority,
      done: this.done() ? this.done() === 'true' : undefined
    };
  });

  constructor() {
    effect(() => {
      this.searching.emit(this.searchProject());
    });
  }
}
