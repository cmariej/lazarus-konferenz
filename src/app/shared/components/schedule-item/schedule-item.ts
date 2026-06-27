import { Component, input } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [],
  templateUrl: './schedule-item.html',
  styleUrls: ['./schedule-item.scss']
})
export class ScheduleItem {

  readonly time = input.required<string>();

  readonly title = input.required<string>();

  readonly description = input('');

}