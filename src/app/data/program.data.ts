import { ScheduleItem } from '../shared/interfaces/schedule-item';
import { LOCATION } from './location.data';


//Zeilenumbruch bei der Beschreibung (description) mit \n einfügen, z.B. "Ort\nAdresse"

export const PROGRAM: ScheduleItem[] = [

  // Freitag

  {
    day: 'friday',
    time: '13:00',
    title: 'Einlass',
    description: `${LOCATION.location}\n${LOCATION.address}`
  },
  {
    day: 'friday',
    time: '13:30',
    title: 'Begrüßung & News'
  },
  {
    day: 'friday',
    time: '19:00',
    title: 'Gemeinsames Abendessen & Get Together'
  },

  // Samstag

  {
    day: 'saturday',
    time: '09:00',
    title: 'Einlass',
    description: `${LOCATION.location}\n${LOCATION.address}`
  },

  {
    day: 'saturday',
    time: '09:30',
    title: 'Begrüßung & Keynote',
    description: 'TBA',
  },

  {
    day: 'saturday',
    time: '10:00',
    title: 'Block I',
    description: 'TBA'
  },
  {
    day: 'saturday',
    time: '13:00',
    title: 'Mittagspause'
  },
  {
    day: 'saturday',
    time: '14:15',
    title: 'Block II',
    description: 'TBA',
  },
  {
    day: 'saturday',
    time: '18:20',
    title: 'Planung der nächsten Konferenz',
  },
  {
    day: 'saturday',
    time: '19:20',
    title: 'Gemeinsames Abendessen & Get Together',
  },

  // Sonntag

  {
    day: 'sunday',
    time: '09:00',
    title: 'Einlass',
    description: `${LOCATION.location}\n${LOCATION.address}`
  },
  {
    day: 'sunday',
    time: '09:30',
    title: 'Community Roundtable'
  },
  {
    day: 'sunday',
    time: '13:00',
    title: 'Mittagessen'
  },
  {
    day: 'sunday',
    time: '14:00',
    title: 'Nachmittagsprogramm',
    description: 'TBA'
  }
];