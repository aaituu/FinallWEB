// Run in mongosh:
//   use rentify
//   load('seeds/seed.mongosh.js')

// Clean
DB_NAME = db.getName();
print('Seeding DB:', DB_NAME);

db.users.deleteMany({});
db.apartments.deleteMany({});
db.requests.deleteMany({});
db.categories.deleteMany({});
db.reports.deleteMany({});
db.contactmessages.deleteMany({});

const adminId = new ObjectId();
const govId = new ObjectId();
const userId = new ObjectId();

// Password hashes are bcrypt (10 rounds)
// admin password: Admin123!
// gov password: Gov123!
// user password: User123!

db.users.insertMany([
  {
    _id: adminId,
    name: 'Rentify Admin',
    email: 'admin@rentify.local',
    passwordHash: '$2b$10$w8Hk7BUzJAUD5XBSz88gQuqVTvXB18E64opTXnGtNux6hIfRM9xV.',
    role: 'admin',
    isBanned: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: govId,
    name: 'United Free Republic Housing Office',
    email: 'housing@ufr.gov',
    passwordHash: '$2b$10$NUOGRgc4b0WdsvMZEtaEDe59.aIUwDPymtFZ.2867TAxpoEKy8.7y',
    role: 'user',
    isBanned: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: userId,
    name: 'Citizen Tester',
    email: 'citizen@test.com',
    passwordHash: '$2b$10$j/TjnZ0JJGnUcwUs2bzLo.UG.xZehkgMnnDf.GsvXJDn0GOnHdrMa',
    role: 'user',
    isBanned: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

const catApartment = new ObjectId();
const catHouse = new ObjectId();
const catRoom = new ObjectId();

db.categories.insertMany([
  { _id: catApartment, name: 'Apartment', createdAt: new Date(), updatedAt: new Date() },
  { _id: catHouse, name: 'House', createdAt: new Date(), updatedAt: new Date() },
  { _id: catRoom, name: 'Room', createdAt: new Date(), updatedAt: new Date() }
]);


const apartments = [
  {
    title: 'Free Government Studio (UFR Program)',
    description: 'Provided by the United Free Republic. Zero rent for citizens. Simple studio near public transport.',
    price: 0,
    type: 'rent',
    city: 'Almaty',
    address: 'UFR District 1, Building 7',
    rooms: 1,
    area: 38,
    floor: 3,
    status: 'approved',
    images: ['https://picsum.photos/800/600?random=11'],
    categoryId: catApartment,
    isHidden: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'UFR Family Apartment — No Down Payment',
    description: 'Government-backed housing. For families. Documentation handled by the housing office.',
    price: 100,
    type: 'sale',
    city: 'Astana',
    address: 'UFR Avenue 12',
    rooms: 3,
    area: 98,
    floor: 5,
    status: 'approved',
    images: ['https://picsum.photos/800/600?random=12'],
    categoryId: catApartment,
    isHidden: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Citizen Rental — Cozy 2 Rooms',
    description: 'A simple rental listing by a citizen. Near shops and a park.',
    price: 900,
    type: 'rent',
    city: 'Shymkent',
    address: 'Green Park St 5',
    rooms: 2,
    area: 70,
    floor: 2,
    status: 'approved',
    images: ['https://picsum.photos/800/600?random=13'],
    categoryId: catApartment,
    isHidden: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

db.apartments.insertMany(apartments);

print('Done. Users:', db.users.countDocuments(), 'Apartments:', db.apartments.countDocuments());
