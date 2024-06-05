const MENUITEMS: IMenuItemProps[] = [
  {
    title: 'home',
    type: 'sub',
    megaMenu: false,
    children: [
      {
        title: 'restaurant Demo',
        type: 'sub',
        children: [
          { path: '/home/restaurant/classic', title: 'Classic', type: 'link' },
          { path: '/home/restaurant/minimal', title: 'Minimal', type: 'link' },
        ],
      },
      {
        title: 'Mix Demo',
        type: 'sub',
        children: [
          { path: '/home/mix-demo/classic', title: 'Classic', type: 'link' },
          { path: '/home/mix-demo/minimal', title: 'Minimal', type: 'link' },
        ],
      },
    ],
  },
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
  {
    title: 'pages',
    type: 'sub',
    megaMenu: true,
    children: [
      {
        type: 'sub',
        children: [
          {
            title: 'portfolio',
            children: [
              {
                path: '/pages/portfolio/grid-2',
                title: '2 grid',
                type: 'link',
              },
              {
                path: '/pages/portfolio/grid-3',
                title: '3 grid',
                type: 'link',
              },
              {
                path: '/pages/portfolio/grid-4',
                title: '4 grid',
                type: 'link',
              },
              {
                path: '/pages/portfolio/grid-2-title',
                title: '2 grid title',
                type: 'link',
              },
              {
                path: '/pages/portfolio/grid-3-title',
                title: '3 grid title',
                type: 'link',
              },
              {
                path: '/pages/portfolio/grid-4-title',
                title: '4 grid title',
                type: 'link',
              },
              {
                path: '/pages/portfolio/masonry-3',
                title: '3 masonry',
                type: 'link',
              },
              {
                path: '/pages/portfolio/masonry-4',
                title: '4 masonry',
                type: 'link',
              },
              {
                path: '/pages/portfolio/parallax',
                title: 'parallax',
                type: 'link',
              },
              {
                path: '/pages/portfolio/center-slides',
                title: 'central sliders',
                type: 'link',
              },
              {
                path: '/pages/portfolio/creative-1',
                title: 'creative 1',
                type: 'link',
              },
              {
                path: '/pages/portfolio/creative-2',
                title: 'creative 2',
                type: 'link',
              },
              {
                path: '/pages/portfolio/creative-3',
                title: 'creative 3',
                type: 'link',
              },
              {
                path: '/pages/portfolio/creative-4',
                title: 'creative 4',
                type: 'link',
              },
            ],
          },
        ],
      },
      {
        type: 'sub',
        children: [
          {
            title: 'blog page',
            children: [
              {
                path: '/pages/blog-pages/left-sidebar',
                title: 'left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/right-sidebar',
                title: 'right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/no-sidebar',
                title: 'no sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/creative-left-sidebar',
                title: 'creative left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/creative-right-sidebar',
                title: 'creative right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/creative-no-sidebar',
                title: 'creative no sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/list-left-sidebar',
                title: 'list left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/list-right-sidebar',
                title: 'list right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/list-no-sidebar',
                title: 'list no sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/masonry-left-sidebar',
                title: 'masonry left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/masonry-right-sidebar',
                title: 'masonry right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/masonry-no-sidebar',
                title: 'masonry no sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/mix-list-left-sidebar',
                title: 'mix list left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/mix-list-right-sidebar',
                title: 'mix list right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/mix-grid-left-sidebar',
                title: 'mix grid left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-pages/mix-grid-right-sidebar',
                title: 'mix grid right sidebar',
                type: 'link',
              },
            ],
          },
        ],
      },
      {
        type: 'sub',
        children: [
          {
            title: 'blog detail page',
            children: [
              {
                path: '/pages/blog-detail/left-sidebar',
                title: 'left sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-detail/right-sidebar',
                title: 'right sidebar',
                type: 'link',
              },
              {
                path: '/pages/blog-detail/no-sidebar',
                title: 'no sidebar',
                type: 'link',
              },

              {
                path: '/pages/blog-detail/detail-with-gallery',
                title: 'detail with gallery',
                type: 'link',
              },
              {
                path: '/pages/blog-detail/detail-with-video',
                title: 'detail with video',
                type: 'link',
              },
            ],
          },
          {
            title: 'elements- filter',
            children: [
              {
                path: '/pages/elements-filter/sidebar',
                title: 'sidebar',
                type: 'link',
              },
              {
                path: '/pages/elements-filter/popup',
                title: 'popup',
                type: 'link',
              },
              {
                path: '/pages/elements-filter/slide-down',
                title: 'slide down',
                type: 'link',
              },
              {
                path: '/pages/elements-filter/top-filter',
                title: 'top filter',
                type: 'link',
              },
            ],
          },
          {
            title: 'elements-breadcrumb',
            children: [
              {
                path: '/pages/elements-breadcrumbs/basic',
                title: 'basic',
                type: 'link',
              },
              {
                path: '/pages/elements-breadcrumbs/image-with-effect',
                title: 'image with effect',
                type: 'link',
              },
              {
                path: '/pages/elements-breadcrumbs/right-content',
                title: 'right content',
                type: 'link',
              },
              {
                path: '/pages/elements-breadcrumbs/only-image',
                title: 'only image',
                type: 'link',
              },
              {
                path: '/pages/elements-breadcrumbs/with-searchbar',
                title: 'with searchbar',
                type: 'link',
              },
              {
                path: '/pages/elements-breadcrumbs/bird-flying',
                title: 'bird fly',
                type: 'link',
              },
            ],
          },
        ],
      },
      {
        type: 'sub',
        children: [
          {
            title: 'other pages',
            children: [
              {
                path: '/pages/other-pages/about-us-1',
                title: 'about us 1',
                type: 'link',
              },
              {
                path: '/pages/other-pages/about-us-2',
                title: 'about us 2',
                type: 'link',
              },
              {
                path: '/pages/other-pages/contact-us-1',
                title: 'contact us 1',
                type: 'link',
              },
              {
                path: '/pages/other-pages/contact-us-2',
                title: 'contact us 2',
                type: 'link',
              },
              {
                path: '/pages/other-pages/contact-us-3',
                title: 'contact us 3',
                type: 'link',
              },
              {
                path: '/pages/other-pages/coming-soon-1',
                title: 'coming soon 1',
                type: 'link',
              },
              {
                path: '/pages/other-pages/coming-soon-2',
                title: 'coming soon 2',
                type: 'link',
              },
              {
                path: '/pages/other-pages/coming-soon-3',
                title: 'coming soon 3',
                type: 'link',
              },
              { path: '/pages/other-pages/404', title: '404', type: 'link' },
              { path: '/pages/other-pages/faq', title: 'faq', type: 'link' },
              {
                path: '/pages/other-pages/login',
                title: 'login',
                type: 'link',
              },
              {
                path: '/pages/other-pages/register',
                title: 'register',
                type: 'link',
              },
              {
                path: '/pages/other-pages/user-dashboard',
                title: 'user details',
                type: 'link',
              },
            ],
          },
        ],
      },
      {
        type: 'sub',
        children: [
          {
            title: 'element page',
            children: [
              {
                path: '/pages/element-pages/image-ratio',
                title: 'image ratio',
                type: 'link',
              },
              {
                path: '/pages/element-pages/about',
                title: 'about',
                type: 'link',
              },
              {
                path: '/pages/element-pages/app',
                title: 'application',
                type: 'link',
              },
              {
                path: '/pages/element-pages/blog',
                title: 'blog',
                type: 'link',
              },
              {
                path: '/pages/element-pages/button',
                title: 'button',
                type: 'link',
              },
              {
                path: '/pages/element-pages/category',
                title: 'category',
                type: 'link',
              },
              {
                path: '/pages/element-pages/date-time-picker',
                title: 'date & time picker',
                type: 'link',
              },
              {
                path: '/pages/element-pages/full-banner',
                title: 'full banner',
                type: 'link',
              },
              {
                path: '/pages/element-pages/gallery',
                title: 'gallery',
                type: 'link',
              },
              {
                path: '/pages/element-pages/other-element',
                title: 'other element',
                type: 'link',
              },
              {
                path: '/pages/element-pages/service',
                title: 'service',
                type: 'link',
              },
              {
                path: '/pages/element-pages/subscribes',
                title: 'subscribe',
                type: 'link',
              },
              {
                path: '/pages/element-pages/testimonial',
                title: 'testimonial',
                type: 'link',
              },
              {
                path: '/pages/element-pages/title',
                title: 'title',
                type: 'link',
              },
              {
                path: '/pages/element-pages/video',
                title: 'video',
                type: 'link',
              },
            ],
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
