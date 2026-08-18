export interface ScheduleItem {

  day: 'friday' | 'saturday' | 'sunday';

  time: string;

  title: string;

  speaker?: string;

  description?: string;

}
