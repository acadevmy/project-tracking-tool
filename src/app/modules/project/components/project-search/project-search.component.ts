import { Component, computed, effect, output, signal } from '@angular/core';
import { Priority, SearchProject } from '@project/models';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html'
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
