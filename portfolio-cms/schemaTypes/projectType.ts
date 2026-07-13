import { defineField, defineType } from 'sanity'

export const projectType = defineType ({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'previewVideo',
      title: 'Preview Video',
      type: 'file',
      options: { accept: 'video/*' }
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'cardDescription',
      type: 'string',
    }),
    defineField({
      name: 'deepDescription',
      title: 'Deep Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})
