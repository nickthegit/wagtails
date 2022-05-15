export default {
  name: 'settings',
  title: 'Website Global Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Website Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Website Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
