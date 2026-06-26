import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrls: ['./section.scss']
})
export class Section {

  readonly eyebrow = input('');

  readonly title = input.required<string>();

  readonly subtitle = input('');

  readonly center = input(false);

}