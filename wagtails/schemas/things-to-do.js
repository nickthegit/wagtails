export default {
  name: 'things-to-do',
  title: 'Things To Do Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Things To Do',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'blockContent',
    },
  ],
}
