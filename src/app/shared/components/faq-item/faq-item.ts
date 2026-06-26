import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.html',
  styleUrls: ['./faq-item.scss']
})
export class FaqItemComponent {

  readonly question = input.required<string>();

  readonly answer = input.required<string>();

  protected readonly open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }

}