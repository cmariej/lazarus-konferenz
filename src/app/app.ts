import { Component } from '@angular/core';

import { Layout } from './core/layout/layout/layout';

@Component({
  selector: 'app-root',
  imports: [
    Layout
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}