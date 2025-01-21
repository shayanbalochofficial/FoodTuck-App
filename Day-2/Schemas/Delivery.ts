import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'delivery',
  title: 'Delivery',
  type: 'document',
  fields: [
    defineField({
      name: 'deliveryId',
      title: 'Delivery ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carrier',
      title: 'Carrier',
      type: 'string',
      options: {
        list: [
          { title: 'FedEx', value: 'fedex' },
          { title: 'UPS', value: 'ups' },
          { title: 'DHL', value: 'dhl' },
          { title: 'USPS', value: 'usps' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Delivery Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Out for Delivery', value: 'out_for_delivery' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Failed', value: 'failed' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimatedDelivery',
      title: 'Estimated Delivery Date',
      type: 'datetime',
    }),
    defineField({
      name: 'deliveryAddress',
      title: 'Delivery Address',
      type: 'object',
      fields: [
        defineField({
          name: 'recipientName',
          title: 'Recipient Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],
});
