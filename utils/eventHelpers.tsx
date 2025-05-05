// utils/eventHelpers.ts
export type Event = {
    EVNT_UPTO_DT: string;
    [key: string]: any;
  };
  
  export function splitEventsByDate(events: Event[]) {
    const now = new Date();
    const pastEvents: Event[] = [];
    const upcomingEvents: Event[] = [];
  
    for (const event of events) {
      const { EVNT_UPTO_DT } = event;
  
      if (!EVNT_UPTO_DT) continue;
  
      const eventEnd = new Date(EVNT_UPTO_DT);
      if (isNaN(eventEnd.getTime())) continue;
  
      if (eventEnd < now) {
        pastEvents.push(event);
      } else {
        upcomingEvents.push(event);
      }
    }
  
    return { pastEvents, upcomingEvents };
  }
  