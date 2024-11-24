import { LightSvg, PigiBankSvg, TelephonSvg } from '@/data/svg/page-svg';
import { ApexOptions } from 'apexcharts';

export const teamMembers = [
  {
    name: 'Julia Holmes',
    role: 'CEO',
    image: '/assets/images/inner-pages/team/1.jpg',
  },
  {
    name: 'Lucas Smith',
    role: 'marketing',
    image: '/assets/images/inner-pages/team/2.jpg',
  },
  {
    name: 'Pablo Himenez',
    role: 'customer service',
    image: '/assets/images/inner-pages/team/3.jpg',
  },
  {
    name: 'Lucas Smith',
    role: 'marketing',
    image: '/assets/images/inner-pages/team/2.jpg',
  },
];

export const factsData = [
  {
    icon: '/assets/images/icon/facts/1.png',
    counter: 2745,
    label: 'happy client',
  },
  {
    icon: '/assets/images/icon/facts/2.png',
    counter: 953,
    label: 'complete tour',
  },
  { icon: '/assets/images/icon/facts/3.png', counter: 450, label: 'guiders' },
  {
    icon: '/assets/images/icon/facts/4.png',
    counter: 180,
    label: 'tour country',
  },
];

export const serviceData = [
  {
    icon: <PigiBankSvg />,
    title: 'Guaranteed savings',
    description:
      'Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum the has been standard dummy text ever 1500s..',
    discount: '15% discount',
  },
  {
    icon: <TelephonSvg />,
    title: '24 X 7 helpline',
    description:
      'Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum the has been standard dummy text ever 1500s..',
    discount: 'free 1 ride',
  },
  {
    icon: <LightSvg />,
    title: 'live booking on hotel',
    description:
      'Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum the has been standard dummy text ever 1500s..',
    discount: '2% discount',
  },
];

export const imageData = [
  {
    src: '/assets/images/inner-pages/about/1.jpg',
    title: 'Venezuela',
    subTitle: 'water fall',
  },
  {
    src: '/assets/images/inner-pages/about/2.jpg',
    title: 'Shillong',
    subTitle: 'paragliding',
  },
  {
    src: '/assets/images/inner-pages/about/3.jpg',
    title: 'Berlin',
    subTitle: 'River Front',
  },
];

export const tabs = [
  { id: 'general', label: 'general' },
  { id: 'about', label: 'about' },
  { id: 'pricing', label: 'pricing' },
  { id: 'booking', label: 'booking' },
  { id: 'payment', label: 'payment' },
  { id: 'cancellation', label: 'cancellation & refunds' },
  { id: 'visa', label: 'visa & insurance' },
  { id: 'forex', label: 'Foreign Exchange (FOREX)' },
  { id: 'hotels', label: 'hotels' },
  { id: 'account', label: 'my account' },
  { id: 'support', label: 'support' },
  { id: 'contact', label: 'contact' },
];

export const userTabs = [
  { path: '/profile', label: 'profile' },
  { path: '/bookings', label: 'bookings' },
  { path: '/cards', label: 'cards & payment' },
  { path: '/security', label: 'security' },
];

export const counters = [
  {
    iconSrc: '/assets/images/icon/hotel.png',
    count: 25,
    label: 'hotel booked',
  },
  {
    iconSrc: '/assets/images/icon/flight.png',
    count: 12,
    label: 'flight booked',
  },
  { iconSrc: '/assets/images/icon/taxi.png', count: 50, label: 'cab booked' },
  { iconSrc: '/assets/images/icon/food.png', count: 40, label: 'food ordered' },
];

export const activities = [
  { icon: 'fas fa-plane', text: 'Paris to Dubai', date: '3 days ago' },
  { icon: 'fas fa-plane', text: 'Paris to Dubai', date: '23 june' },
  {
    icon: 'fas fa-hotel',
    text: 'hotel sea view',
    date: '20 april',
    className: 'blue-line',
  },
  {
    icon: 'fas fa-taxi',
    text: 'Paris To Toulouse',
    date: '12 feb',
    className: 'yellow-line',
  },
  { icon: 'fas fa-plane', text: 'Paris to Dubai', date: '14 jan' },
  {
    icon: 'fas fa-hotel',
    text: 'hotel sea view',
    date: '12 jan',
    className: 'blue-line',
  },
];

export const chartDataOption: ApexOptions = {
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (val: string) {
            return '80';
          },
        },
      },
    },
  },
  colors: ['#fa4962', '#379cf9', '#a264ff'],
  labels: ['Completed', 'Upcoming', 'Cancelled'],
  stroke: {
    lineCap: 'round',
  },
  responsive: [
    {
      breakpoint: 1830,
      options: {
        chart: {
          offsetX: -40,
        },
      },
    },
    {
      breakpoint: 1750,
      options: {
        chart: {
          offsetX: -50,
        },
      },
    },
    {
      breakpoint: 1661,
      options: {
        chart: {
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1530,
      options: {
        chart: {
          offsetX: -25,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          offsetX: 10,
        },
      },
    },
    {
      breakpoint: 1300,
      options: {
        chart: {
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 255,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 245,
        },
      },
    },
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
};
export const chartData = {
  series: [50, 30, 20],
};

export const bookingsData = [
  {
    id: '1',
    date: '14',
    type: 'flight',
    destination: 'dubai to paris',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'upcoming',
    icon: 'fas fa-plane',
  },
  {
    id: '2',
    date: '14',
    type: 'hotel',
    destination: 'sea view hotel',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'upcoming',
    icon: 'fas fa-hotel',
  },
  {
    id: '3',
    date: '14',
    type: 'taxi',
    destination: 'paris to Toulouse',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'upcoming',
    icon: 'fas fa-taxi',
  },
  {
    id: '4',
    date: '14',
    type: 'flight',
    destination: 'dubai to paris',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'past',
    icon: 'fas fa-plane',
  },
  {
    id: '5',
    date: '14',
    type: 'hotel',
    destination: 'sea view hotel',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'past',
    icon: 'fas fa-hotel',
  },
  {
    id: '6',
    date: '14',
    type: 'taxi',
    destination: 'paris to Toulouse',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'past',
    icon: 'fas fa-taxi',
  },
  {
    id: '7',
    date: '14',
    type: 'flight',
    destination: 'dubai to paris',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'cancelled',
    icon: 'fas fa-plane',
  },
  {
    id: '8',
    date: '14',
    type: 'hotel',
    destination: 'sea view hotel',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'cancelled',
    icon: 'fas fa-hotel',
  },
  {
    id: '9',
    date: '14',
    type: 'taxi',
    destination: 'paris to Toulouse',
    amount: 2500,
    orderDate: '20 oct, 2020',
    status: 'cancelled',
    icon: 'fas fa-taxi',
  },
];

export const cardsData = [
  {
    type: 'master',
    number: 'XXXX-XXXX-XXXX-2510',
    validThru: '12/23',
    name: 'mark jecno',
    imgSrc: '/assets/images/icon/master.png',
  },
  {
    type: 'visa',
    number: 'XXXX-XXXX-XXXX-2510',
    validThru: '12/23',
    name: 'mark jecno',
    imgSrc: '/assets/images/icon/visa.png',
  },
  {
    type: 'american-express',
    number: 'XXXX-XXXX-XXXX-2510',
    validThru: '12/23',
    name: 'mark jecno',
    imgSrc: '/assets/images/icon/american.jpg',
  },
];

export const bookmarks = [
  {
    imgUrl: '/assets/images/tour/tour/7.jpg',
    title: 'Beautiful bali',
    duration: '6N 7D',
  },
  {
    imgUrl: '/assets/images/tour/tour/8.jpg',
    title: 'best of europe',
    duration: '6N 7D',
  },
  {
    imgUrl: '/assets/images/hotel/room/13.jpg',
    title: 'sea view hotel',
    duration: '$250/ night',
  },
  {
    imgUrl: '/assets/images/restaurant/environment/3.jpg',
    title: 'italian restro',
    duration: 'fast food | $25 for two',
  },
  {
    imgUrl: '/assets/images/flights/flight-breadcrumb2.jpg',
    title: 'dubai to paris',
    duration: 'egyptair | $2500',
  },
  {
    imgUrl: '/assets/images/tour/tour/12.jpg',
    title: 'simply mauritius',
    duration: '6N 7D',
  },
  {
    imgUrl: '/assets/images/tour/tour/13.jpg',
    title: 'canadian delight',
    duration: '6N 7D',
  },
  {
    imgUrl: '/assets/images/tour/tour/14.jpg',
    title: 'Egyptian Wonders',
    duration: '6N 7D',
  },
  {
    imgUrl: '/assets/images/tour/tour/15.jpg',
    title: 'South Africa',
    duration: '6N 7D',
  },
];

export const imageUrls = [
  '/assets/images/tour/tour/7.jpg',
  '/assets/images/tour/tour/8.jpg',
  '/assets/images/tour/tour/9.jpg',
  '/assets/images/tour/tour/10.jpg',
];

export const themeButtons = [
  { href: '#', className: 'btn btn-solid', label: 'read more' },
  { href: '#', className: 'btn btn-solid', label: 'read more' },
  { href: '#', className: 'btn btn-curve', label: 'read more' },
  { href: '#', className: 'btn btn-curve btn-lower', label: 'read more' },
];

export const roundedButtons = [
  { href: '#', className: 'btn btn-rounded color1', label: 'read more' },
  { href: '#', className: 'btn btn-rounded color2', label: 'read more' },
  { href: '#', className: 'btn btn-rounded btn-sm color1', label: 'read more' },
  { href: '#', className: 'btn btn-rounded btn-sm color2', label: 'read more' },
];

export const whiteBlackButtons = [
  { href: '#', className: 'btn btn-curve white-btn', label: 'white button' },
  { href: '#', className: 'btn btn-curve black-btn', label: 'black button' },
];

export const buttonTags = [
  { className: 'btn btn-primary', href: '#', role: 'button', label: 'Link' },
  { className: 'btn btn-primary', type: 'submit', label: 'Button' },
  {
    className: 'btn btn-primary',
    type: 'button',
    value: 'Input',
    label: 'Input',
  },
  {
    className: 'btn btn-primary',
    type: 'submit',
    value: 'Submit',
    label: 'Submit',
  },
  {
    className: 'btn btn-primary',
    type: 'reset',
    value: 'Reset',
    label: 'Reset',
  },
];

export const buttonSizes = [
  { className: 'btn btn-primary btn-lg', label: 'Large button' },
  { className: 'btn btn-secondary btn-lg', label: 'Large button' },
  { className: 'btn btn-primary btn-sm', label: 'Small button' },
  { className: 'btn btn-secondary btn-sm', label: 'Small button' },
];

export const bootstrapButtons = [
  { className: 'btn btn-primary', label: 'Primary' },
  { className: 'btn btn-secondary', label: 'Secondary' },
  { className: 'btn btn-success', label: 'Success' },
  { className: 'btn btn-danger', label: 'Danger' },
  { className: 'btn btn-warning', label: 'Warning' },
  { className: 'btn btn-info', label: 'Info' },
  { className: 'btn btn-dark', label: 'Dark' },
];

export const buttonOutline = [
  { className: 'btn btn-outline-primary', label: 'Primary' },
  { className: 'btn btn-outline-secondary', label: 'Secondary' },
  { className: 'btn btn-outline-success', label: 'Success' },
  { className: 'btn btn-outline-danger', label: 'Danger' },
  { className: 'btn btn-outline-warning', label: 'Warning' },
  { className: 'btn btn-outline-info', label: 'Info' },
  { className: 'btn btn-outline-dark', label: 'Dark' },
];

export const buttonSearch = [
  { className: 'Block level button', label: 'Primary' },
  { className: '>Block level button', label: 'Secondary' },
];
