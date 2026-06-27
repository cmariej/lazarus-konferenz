import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GENERAL_INFO } from '../../../data/general.data';
import { LOCATION } from '../../../data/location.data';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {

  protected readonly year = new Date().getFullYear();
  protected readonly general = GENERAL_INFO;
  protected readonly location = LOCATION;

}