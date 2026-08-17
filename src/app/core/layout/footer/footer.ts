import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../data/site-data.service';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  private readonly siteData = inject(SiteDataService);
  protected readonly year = new Date().getFullYear();
  protected readonly general = this.siteData.data.general;
  protected readonly location = this.siteData.data.location;

}
