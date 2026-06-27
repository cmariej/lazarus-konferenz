import { Component, computed, signal } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { ScheduleItem } from '../../shared/components/schedule-item/schedule-item';

import { PROGRAM } from '../../../../public/data/program.data';

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

  protected readonly hero = {
    title: 'Programm',
    subtitle: 'Drei Tage voller Vorträge, Workshops und Networking'
  };

  protected readonly selectedDay =
    signal<'friday' | 'saturday' | 'sunday'>('friday');

  protected readonly program = computed(() =>
    PROGRAM.filter(item => item.day === this.selectedDay())
  );

}