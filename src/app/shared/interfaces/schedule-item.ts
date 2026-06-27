export interface ScheduleItem {

  day: 'friday' | 'saturday' | 'sunday';

  time: string;

  title: string;

  description?: string;

}