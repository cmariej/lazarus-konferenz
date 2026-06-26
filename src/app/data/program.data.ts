import { ScheduleItem } from '../shared/interfaces/schedule-item';

export const PROGRAM: ScheduleItem[] = [

  // Freitag

  {
    day: 'friday',
    time: '18:00',
    title: 'Anreise & Check-In',
    type: 'network'
  },

  {
    day: 'friday',
    time: '19:30',
    title: 'Get Together',
    type: 'network'
  },

  // Samstag

  {
    day: 'saturday',
    time: '09:00',
    title: 'Begrüßung',
    type: 'talk'
  },

  {
    day: 'saturday',
    time: '09:30',
    title: 'Keynote',
    speaker: 'TBA',
    type: 'talk'
  },

  {
    day: 'saturday',
    time: '11:00',
    title: 'Lazarus 4.x',
    speaker: 'TBA',
    type: 'talk'
  },

  {
    day: 'saturday',
    time: '12:30',
    title: 'Mittagspause',
    type: 'meal'
  },

  {
    day: 'saturday',
    time: '14:00',
    title: 'Workshop',
    speaker: 'TBA',
    type: 'workshop'
  },

  // Sonntag

  {
    day: 'sunday',
    time: '09:30',
    title: 'Community Roundtable',
    type: 'talk'
  },

  {
    day: 'sunday',
    time: '11:00',
    title: 'Abschluss',
    type: 'talk'
  }

];