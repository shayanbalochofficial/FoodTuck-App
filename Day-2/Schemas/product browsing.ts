import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'productBrowsing',
  title: 'Product Browsing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Product Description',
              type: 'text',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'reference',
              to: [{ type: 'category' }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'filters',
      title: 'Filters',
      type: 'object',
      fields: [
        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'category' }] }],
        }),
        defineField({
          name: 'priceRange',
          title: 'Price Range',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum Price',
              type: 'number',
              validation: (Rule) => Rule.min(0),
            }),
            defineField({
              name: 'max',
              title: 'Maximum Price',
              type: 'number',
              validation: (Rule) => Rule.min(0),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        }),
        defineField({
          name: 'metaImage',
          title: 'Meta Image',
          type: 'image',
        }),
      ],
    }),
  ],
});
