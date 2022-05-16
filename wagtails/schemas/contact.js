export default {
  name: 'contact',
  title: 'Find Us Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Contact',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'blockContent',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'directions',
      title: 'Directions',
      type: 'blockContent',
    },
  ],
}
