export default {
  name: 'scheduleRow',
  title: 'Schedule Row',
  type: 'document',
  fields: [
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday', 'Sunday',
        ],
      },
    },
    { name: 'time', title: 'Time', type: 'string' },
    { name: 'className', title: 'Class Name', type: 'string' },
    { name: 'level', title: 'Level', type: 'string' },
    {
      name: 'isActive',
      title: 'Show on site',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
