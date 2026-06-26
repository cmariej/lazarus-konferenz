export interface ScheduleItem {

  day: 'friday' | 'saturday' | 'sunday';

  time: string;

  title: string;

  speaker?: string;

  room?: string;

  type?: 'talk' | 'workshop' | 'break' | 'meal' | 'network';

}