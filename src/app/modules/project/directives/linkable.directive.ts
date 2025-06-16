import { Directive } from '@angular/core';

import { CursorDirective } from './cursor.directive';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[appLinkable]',
  standalone: true,
  hostDirectives: [
    { directive: CursorDirective },
    { directive: UnderlineDirective },
    {
      directive: HighlightDirective,
      inputs: ['appHighlight']
    }
  ]
})
export class LinkableDirective {}
