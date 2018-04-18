import React from 'react';
import Day from './Day';

const masterDayList = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function WeeklySchedule(){
  return (
    <div>
      <h2 id="schedule-header">Our Weekly Schedule</h2>
      {masterDayList.map((day, index) =>
        <Day day={day.day}
          location={day.location}
          hours={day.hours}
          booth={day.booth}
          key={index}/>
      )}
      <hr></hr>
      <style jsx>{`
        div {
          text-align: center;
        }
        #schedule-header {
          font-weight: lighter;
          margin-bottom: 4px;
        }
            `}
      </style>
    </div>
  );
}

export default WeeklySchedule;
