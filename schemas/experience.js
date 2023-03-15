// schemas/pet.js
export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'company',
    },
    {
      name: 'position',
      type: 'string',
      title: 'position',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'start_date',
      type: 'string',
      title: 'Start Date',
    },
    {
      name: 'end_date',
      type: 'string',
      title: 'End Date',
    },
  ],
}
