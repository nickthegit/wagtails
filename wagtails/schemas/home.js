export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'blockContent',
    },
    {
      name: 'backgroundImageGallery',
      title: 'Background Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().length(15).error('Please upload exactly 15 images'),
    },
  ],
}
