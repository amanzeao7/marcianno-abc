export default {
  name: 'fight',
  title: 'Fight',
  type: 'document',
  fields: [
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'venue', title: 'Venue', type: 'string' },
    { name: 'ourFighter', title: 'Our Fighter', type: 'string' },
    { name: 'opponent', title: 'Opponent', type: 'string' },
    { name: 'opponentClub', title: 'Opponent Club', type: 'string' },
    { name: 'weightClass', title: 'Weight Class', type: 'string' },
    { name: 'result', title: 'Result (optional)', type: 'string' },
    { name: 'ticketUrl', title: 'Ticket Link URL', type: 'url' },
    {
      name: 'isActive',
      title: 'Show on site',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [
    {
      name: 'dateDesc',
      title: 'Date, newest first',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
}
