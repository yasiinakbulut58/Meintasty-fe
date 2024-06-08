const MENUITEMS: IMenuItemProps[] = [
  {
    title: 'restaurant',
    type: 'sub',
    megaMenu: false,
    children: [
      {
        title: 'Listing',
        type: 'sub',
        children: [
          {
            title: 'Grid View',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/grid-view/grid-2',
                title: '2 Grid',
                type: 'link',
              },
              {
                path: '/restaurant/listing/grid-view/grid-3',
                title: '3 Grid',
                type: 'link',
              },
              {
                path: '/restaurant/listing/grid-view/grid-4',
                title: '4 Grid',
                type: 'link',
              },
            ],
          },
          {
            title: 'Sidebar',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/sidebar/left-sidebar',
                title: 'Left Sidebar',
                type: 'link',
              },
              {
                path: '/restaurant/listing/sidebar/right-sidebar',
                title: 'Right Sidebar',
                type: 'link',
              },
              {
                path: '/restaurant/listing/sidebar/no-sidebar',
                title: 'No Sidebar',
                type: 'link',
              },
            ],
          },
          {
            title: 'map',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/map/google-map',
                title: 'Google Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/map/leaflet-map',
                title: 'Leaflet Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/map/pigeon-map',
                title: 'Pigeon Map',
                type: 'link',
              },
            ],
          },
          {
            title: 'map modal',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/map-modal/google-map-modal',
                title: 'Google Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/map-modal/leaflet-map-modal',
                title: 'Leaflet Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/map-modal/pigeon-map-modal',
                title: 'Pigeon Map',
                type: 'link',
              },
            ],
          },
          {
            title: 'onclick map',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/on-click-map/google-map-click',
                title: 'Google Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/on-click-map/leaflet-map-click',
                title: 'Leaflet Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/on-click-map/pigeon-map-click',
                title: 'Pigeon Map',
                type: 'link',
              },
            ],
          },
          {
            title: 'Left side map',
            type: 'sub',
            children: [
              {
                path: '/restaurant/listing/left-side-map/google-map',
                title: 'Google Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/left-side-map/leaflet-map',
                title: 'Leaflet Map',
                type: 'link',
              },
              {
                path: '/restaurant/listing/left-side-map/pigeon-map',
                title: 'Pigeon Map',
                type: 'link',
              },
            ],
          },
          {
            title: 'full width',
            type: 'link',
            path: '/restaurant/listing/full-width',
          },
          {
            title: 'image slider',
            type: 'link',
            path: '/restaurant/listing/image-slider',
          },
          {
            title: 'not found',
            type: 'link',
            path: '/restaurant/listing/not-found',
          },
        ],
      },
      {
        title: 'single page',
        type: 'sub',
        children: [
          {
            path: '/restaurant/single-page/classic',
            title: 'classic',
            type: 'link',
          },
          {
            path: '/restaurant/single-page/360-view',
            title: '360 view',
            type: 'link',
          },
          {
            path: '/restaurant/single-page/image-slider',
            title: 'image slider',
            type: 'link',
          },
          {
            path: '/restaurant/single-page/left-cart',
            title: 'left cart',
            type: 'link',
          },
        ],
      },
      {
        title: 'booking',
        type: 'sub',
        children: [
          {
            path: '/restaurant/booking/checkout',
            title: 'checkout',
            type: 'link',
          },
          {
            path: '/restaurant/booking/order-failed',
            title: 'order failed',
            type: 'link',
          },
          {
            path: '/restaurant/booking/order-success',
            title: 'order success',
            type: 'link',
          },
        ],
      },
    ],
  },
];

export default MENUITEMS;

export const RightNavMenuItem: IRightNavMenuItem[] = [
  {
    title: 'language',
    option: [
      { id: 1, lang: 'en', language: 'ENG' },
      { id: 2, lang: 'fr', language: 'FRE' },
      { id: 3, lang: 'es', language: 'SPA' },
      { id: 4, lang: 'ar', language: 'ARB' },
    ],
  },
  { title: 'user' },
  { title: 'setting' },
];

export const currencyDropDownData = {
  title: 'currency',
  type: [
    {
      id: 1,
      currency: 'USD',
      name: 'USD',
      symbol: '$',
      value: 1,
    },
    {
      id: 2,
      currency: 'EUR',
      name: 'EUR',
      symbol: '€',
      value: 0.997,
    },
    {
      id: 3,
      currency: 'INR',
      name: 'INR',
      symbol: '₹',
      value: 79.9,
    },
    {
      id: 4,
      currency: 'AUD',
      name: 'AUD',
      symbol: '$',
      value: 79.9,
    },
  ],
};

export const languageDropDownData = {
  title: 'language',
  option: [
    { id: 1, lang: 'en', language: 'ENG' },
    { id: 2, lang: 'fr', language: 'FRE' },
    { id: 3, lang: 'es', language: 'SPA' },
    { id: 4, lang: 'ar', language: 'ARB' },
  ],
};
