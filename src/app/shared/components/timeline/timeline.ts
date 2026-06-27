import { Component, input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})
export class Timeline {

  readonly year = input.required<string>();

  readonly title = input.required<string>();

  readonly text = input.required<string>();

  readonly image = input.required<string>();

}