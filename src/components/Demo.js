import React from 'react';
import Schedule from './index';

// example of events
const events = [
  {
    id: 1,
    title: 'Team Itsuki',
    date: '2020-09-07',
    hourStart: '15:30',
    hourEnd: '16:30',
  },
  {
    id: 2,
    title: 'Team Miku',
    date: '2020-09-09',
    hourStart: '13:30',
    hourEnd: '14:00',
  },
  {
    id: 3,
    title: 'Team Nino',
    date: '2020-09-10',
    hourStart: '14:30',
    hourEnd: '15:30',
  },
  {
    id: 4,
    title: 'Team ichika',
    date: '2020-09-12',
    hourStart: '15:30',
    hourEnd: '17:30',
  },
  {
    id: 5,
    title: 'Team youtsuba',
    date: '2020-09-07',
    hourStart: '14:00',
    hourEnd: '14:30',
  },
];

const Demo = () => (
  <section style={{ padding: '20px 0' }}>
    <div className='alert-message'>
      <img
        src='https://vignette.wikia.nocookie.net/5toubun-no-hanayome/images/d/d6/Miku_Nakano_Anime.png/revision/latest?cb=20190420141556'
        width={150}
        alt='picture'
      />
      <p>
        Hello developer this is a demo, feel free to be able to modify it and
        even improve it.
      </p>
    </div>
    <Schedule events={events} startHour={13} endHour={18} diffMinutUnit={30} />
    <div className='wrapper schedule__previewEvents'>
      <h4>Example Events</h4>
      <pre>
        <code>{JSON.stringify(events, null, 2)}</code>
      </pre>
    </div>
  </section>
);

export default Demo;
