// schemas/pet.js
export default {
  name: 'hero_section',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
    {
      name: 'hero_image',
      type: 'image',
      title: 'Hero Image',
    },
  ],
}
