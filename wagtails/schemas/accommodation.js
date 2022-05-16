export default {
  name: 'accommodation',
  title: 'Accommodation Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Accommodation',
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().min(1).error('Please upload at least 1 image'),
        Rule.max(20).warning(
          'Please try and upload no more than 20 images, seems loads'
        ),
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
}
