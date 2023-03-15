// schemas/pet.js
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'featured_image',
      type: 'image',
      title: 'Featured Image',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
  ],
}
