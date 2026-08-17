import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { SiteData } from '../../shared/interfaces/site-data';

@Injectable({ providedIn: 'root' })
export class SiteDataService {
  private siteData?: SiteData;

  async load(): Promise<void> {
    this.siteData = await firstValueFrom(
      this.http.get<SiteData>(`data/site.json?cacheBust=${Date.now()}`)
    );
  }

  get data(): SiteData {
    if (!this.siteData) {
      throw new Error('Site data has not been loaded.');
    }

    return this.siteData;
  }

  constructor(private readonly http: HttpClient) {}
}
