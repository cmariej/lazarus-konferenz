import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [
    RouterLink
  ],
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class Button {

  readonly text = input.required<string>();

  readonly routerLink = input<string>();

  readonly href = input<string>();

  readonly external = input(false);

  readonly variant = input<'primary' | 'secondary' | 'outline'>('primary');

}