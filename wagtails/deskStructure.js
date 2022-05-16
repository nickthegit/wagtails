// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

import {
  MdSettingsSuggest,
  MdOutlineWeb,
  MdOutlineHome,
  MdOutlineKingBed,
  MdOutlineAttractions,
  MdOutlineTravelExplore,
} from 'react-icons/md'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Website Global Settings')
        .icon(MdSettingsSuggest)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Website Global Settings')
        ),
      S.listItem()
        .title('Website')
        .icon(MdOutlineWeb)
        .child(
          S.list()
            .title('Website')
            .items([
              S.listItem()
                .title('Home')
                .icon(MdOutlineHome)
                .child(
                  S.document()
                    .schemaType('home')
                    .documentId('home')
                    .title('Home')
                ),
              S.listItem()
                .title('Accommodation')
                .icon(MdOutlineKingBed)
                .child(
                  S.document()
                    .schemaType('accommodation')
                    .documentId('accommodation')
                    .title('Accommodation')
                ),
              S.listItem()
                .title('Things to do')
                .icon(MdOutlineAttractions)
                .child(
                  S.document()
                    .schemaType('things-to-do')
                    .documentId('things-to-do')
                    .title('Things to do')
                ),
              S.listItem()
                .title('Contact')
                .icon(MdOutlineTravelExplore)
                .child(
                  S.document()
                    .schemaType('contact')
                    .documentId('contact')
                    .title('Contact')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'settings',
            'home',
            'accommodation',
            'things-to-do',
            'contact',
          ].includes(listItem.getId())
      ),
    ])
