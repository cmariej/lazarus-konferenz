import { Component, computed, inject, signal } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { ScheduleItem } from '../../shared/components/schedule-item/schedule-item';
import { SiteDataService } from '../../core/data/site-data.service';

interface ConferenceDates {
    friday: string;
    saturday: string;
    sunday: string;
}

@Component({
  selector: 'app-program',
  imports: [
    Hero,
    Section,
    ScheduleItem
  ],
  templateUrl: './program.html',
  styleUrls: ['./program.scss']
})
export class Program {
  private readonly siteData = inject(SiteDataService);
  private readonly data = this.siteData.data;

  protected readonly hero = {
    title: 'Programm',
    subtitle: 'Drei Tage voller Vorträge, Workshops und Networking'
  };

  protected readonly selectedDay =
    signal<'friday' | 'saturday' | 'sunday'>('friday');

  protected readonly program = computed(() =>
    this.data.program.filter(item => item.day === this.selectedDay())
  );

  date = this.data.general.date;

  getConferenceDates(): ConferenceDates {

    const value = this.date;

    const months: Record<string, string> = {
        januar: '01',
        februar: '02',
        märz: '03',
        maerz: '03',
        april: '04',
        mai: '05',
        juni: '06',
        juli: '07',
        august: '08',
        september: '09',
        oktober: '10',
        november: '11',
        dezember: '12'
    };

    let input: string;

    try {

        input = value
            .trim()
            .replace(/[–—]/g, '-')
            .replace(/\s+/g, ' ');

    } catch {
        return {
          friday: '',
          saturday: '',
          sunday: ''
        }
    }

    const startDayMatch = input.match(/^\d{1,2}/);

    if (!startDayMatch) {
        return {
          friday: '',
          saturday: '',
          sunday: ''
        }
    }

    const startDay = Number(startDayMatch[0]);

    let month: string | undefined;

    // numerischer Monat (09)
    const numericMonth = input.match(/\.(\d{1,2})/);

    if (numericMonth) {

        month = numericMonth[1].padStart(2, '0');

    } else {

        const textMonth = Object.keys(months).find(m =>
            input.toLowerCase().includes(m)
        );

        if (!textMonth) {
            return {
              friday: '',
              saturday: '',
              sunday: ''
            }
          }
        month = months[textMonth];

    }

    const format = (day: number) =>
        `, ${day.toString().padStart(2, '0')}.${month}.`;

    return {
        friday: format(startDay),
        saturday: format(startDay + 1),
        sunday: format(startDay + 2)
    };

}
}
