
 const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Hidden Gem in the Mountains",
    description:
      "Discover this secluded mountain cabin with breathtaking views and peaceful surroundings.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1800,
    location: "Rocky Mountains",
    country: "United States",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Luxury Waterfront Villa",
    description:
      "Relax in this stunning villa with a private pool and direct access to crystal-clear waters.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 5000,
    location: "Santorini",
    country: "Greece",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Charming Countryside Cottage",
    description:
      "Escape the city and enjoy the peaceful countryside in this cozy cottage.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1100,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Modern Studio Apartment",
    description:
      "A stylish studio apartment located in the center of the city with easy access to attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1300,
    location: "Tokyo",
    country: "Japan",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Desert Luxury Camp",
    description:
      "Experience luxury camping in the middle of the desert under a sky full of stars.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 2800,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Arctic Glass Igloo",
    description:
      "Sleep beneath the Northern Lights in a cozy glass igloo with panoramic Arctic views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 4200,
    location: "Rovaniemi",
    country: "Finland",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Tropical Island Bungalow",
    description:
      "Wake up to turquoise waters and white sandy beaches in this overwater bungalow.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 4500,
    location: "Maldives",
    country: "Maldives",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Classic Paris Apartment",
    description:
      "Enjoy stunning Eiffel Tower views from this elegant apartment in the heart of Paris.",
    image: {
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 2200,
    location: "Paris",
    country: "France",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Jungle Eco Lodge",
    description:
      "Reconnect with nature in this eco-friendly lodge surrounded by lush rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1700,
    location: "Amazon Rainforest",
    country: "Brazil",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
  {
    title: "Lakefront Family Cabin",
    description:
      "A spacious wooden cabin with private lake access, perfect for family vacations.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
      filename: "wanderlust_DEV",
    },
    price: 1600,
    location: "Banff",
    country: "Canada",
    owner: "6a5cabdd5a99d36ad4b7d24f",
  },
];
module.exports = { data: sampleListings };