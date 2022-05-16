import { MdAttractions } from 'react-icons/md'

export default {
  name: 'attraction',
  title: 'Attraction',
  icon: MdAttractions,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Please enter a slug'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Please enter an image'),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(250)
          .error('Please keep description under 250 characters'),
    },
    {
      name: 'attractionType',
      title: 'Attraction Type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'attractionType' }],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error(
            'Please enter at least one attraction type, if none on the list are applicable to this attraction, please add a new attraction type'
          ),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
  ],
}
