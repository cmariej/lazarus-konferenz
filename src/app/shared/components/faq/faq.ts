import { Component, input } from '@angular/core';

import { FaqItemComponent } from '../faq-item/faq-item';
import { FaqItem } from '../../interfaces/faq-item';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    FaqItemComponent
  ],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss']
})
export class Faq {

  readonly items = input.required<FaqItem[]>();

}