export const sportsCategories = [
  {
    id: 1,
    name: 'Basketball',
    image: `${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`,
    count: 3,
    color: 'from-orange-500 to-red-500'
  }
];

export const venues = [
  {
    id: 1,
    name: 'Piramal Vaikunth Thane',
    sport: 'Basketball',
    location: 'Piramal',
    rating: 4.8,
    reviews: 120,
    image: `${import.meta.env.BASE_URL}images/august-phlieger-CREqtqgBFcU-unsplash.jpg`,
    about: 'Premium basketball court at Piramal Vaikunth.',
    amenities: ['Parking', 'Changing Rooms', 'Floodlights'],
    slots: ['06:00 AM', '07:00 AM', '06:00 PM', '07:00 PM']
  },
  {
    id: 2,
    name: 'Lodha Park Worli',
    sport: 'Basketball',
    location: 'Lodha Park',
    rating: 4.9,
    reviews: 85,
    image: `${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`,
    about: 'State of the art basketball facility at Lodha Park.',
    amenities: ['Parking', 'AC', 'Locker Room'],
    slots: ['07:00 AM', '08:00 AM', '05:00 PM', '06:00 PM']
  },
  {
    id: 3,
    name: 'Lodha NCP Wadala',
    sport: 'Basketball',
    location: 'Lodha NCP',
    rating: 4.7,
    reviews: 64,
    image: `${import.meta.env.BASE_URL}images/jesse-orrico-mse1vdzZXjA-unsplash.jpg`,
    about: 'Excellent indoor basketball court at Lodha NCP.',
    amenities: ['Parking', 'Water Cooler', 'Seating Area'],
    slots: ['06:00 AM', '08:00 PM', '09:00 PM']
  }
];

export const locations = ['Mumbai (All)', 'Piramal', 'Lodha Park', 'Lodha NCP'];

