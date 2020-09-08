### Scripts

**dev** run mode development

**test** run tests

### Props

| Name          | Type   | Description                            |
| ------------- | ------ | -------------------------------------- |
| startHour     | Number | sets start hour of timeline            |
| endHour       | Number | sets end hour of timeline              |
| diffMinutUnit | Number | sets the unit of difference in minutes |
| events        | Array  | sets events                            |

### Example

```
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
  }
];

<Schedule events={events} startHour={13} endHour={20} diffMinutUnit={30}>
```
