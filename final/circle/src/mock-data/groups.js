import groupCategories from "./group-categories";

import group1Img from "../assets/img/groups/group1.jpg";
import group2Img from "../assets/img/groups/group2.jpg";
import group3Img from "../assets/img/groups/group3.jpg";
import group4Img from "../assets/img/groups/group4.jpg";
import group5Img from "../assets/img/groups/group5.jpg";
import group6Img from "../assets/img/groups/group6.jpg";
import group7Img from "../assets/img/groups/group7.jpg";
import group8Img from "../assets/img/groups/group8.jpg";
import group9Img from "../assets/img/groups/group9.jpg";
import group10Img from "../assets/img/groups/group10.jpg";
import group11Img from "../assets/img/groups/group11.jpg";
import group12Img from "../assets/img/groups/group12.jpg";
import group13Img from "../assets/img/groups/group13.jpg";
import group14Img from "../assets/img/groups/group14.jpg";
import group15Img from "../assets/img/groups/group15.jpg";
import group16Img from "../assets/img/groups/group16.jpg";
import group17Img from "../assets/img/groups/group17.jpg";
import group18Img from "../assets/img/groups/group18.jpg";
import group19Img from "../assets/img/groups/group19.jpg";

import founderBoy from "../assets/img/groups-founders/boy.png";
import founderGirl from "../assets/img/groups-founders/girl.png";

function getCategoryColor(categoryName) {
  const category = groupCategories.find((cat) => cat.name === categoryName);
  return category ? category.color : "grey";
}

const groups = [
  {
    id: 1,
    name: "Eco Innovators",
    description:
      "This group focuses on pioneering sustainable solutions to environmental issues. Members collaborate on projects that promote green technology and sustainable living practices.",
    img: group1Img,
    imgAlt: "group image for Eco Innovators",
    category: "Environment",
    categoryColor: getCategoryColor("Environment"),
    isSubscribed: false,
    founder: {
      name: "Alice Turner",
      pronoun: "she/her",
      email: "alice.turner@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 2,
    name: "Quantum Leap",
    description:
      "Quantum Leap explores the mysteries of quantum mechanics and its applications. The group organizes seminars and workshops to discuss recent advancements and theories.",
    img: group2Img,
    imgAlt: "group image for Quantum Leap",
    category: "Science",
    categoryColor: getCategoryColor("Science"),
    isSubscribed: false,
    founder: {
      name: "Carl Knox",
      pronoun: "he/him",
      email: "carl.knox@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 3,
    name: "Medieval History Buffs",
    description:
      "A community for enthusiasts of medieval history. Members engage in discussions, book readings, and visits to historical sites to deepen their understanding of the Middle Ages.",
    img: group3Img,
    imgAlt: "group image for Medieval History Buffs",
    category: "History",
    categoryColor: getCategoryColor("History"),
    isSubscribed: false,
    founder: {
      name: "Diana Reed",
      pronoun: "she/her",
      email: "diana.reed@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 4,
    name: "Code Wizards",
    description:
      "A club for programming enthusiasts of all skill levels. Weekly coding challenges, hackathons, and guest lectures aim to improve members' coding skills and understanding of computer science.",
    img: group4Img,
    imgAlt: "group image for Code Wizards",
    category: "Technology",
    categoryColor: getCategoryColor("Technology"),
    isSubscribed: false,
    founder: {
      name: "Eric Norman",
      pronoun: "he/him",
      email: "eric.norman@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 5,
    name: "Urban Gardeners",
    description:
      "This group brings together gardening enthusiasts to transform urban spaces into green, productive environments. It's about creating community gardens to promote sustainable urban living.",
    img: group5Img,
    imgAlt: "group image for Urban Gardeners",
    category: "Environment",
    categoryColor: getCategoryColor("Environment"),
    isSubscribed: false,
    founder: {
      name: "Fiona Cheng",
      pronoun: "she/her",
      email: "fiona.cheng@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 6,
    name: "Health Matters",
    description:
      "Health Matters is dedicated to promoting physical and mental well-being. Members share tips on healthy living, organize fitness challenges, and host talks on mental health awareness.",
    img: group6Img,
    imgAlt: "group image for Health Matters",
    category: "Health",
    categoryColor: getCategoryColor("Health"),
    isSubscribed: false,
    founder: {
      name: "George Patel",
      pronoun: "he/him",
      email: "george.patel@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 7,
    name: "Blockchain Explorers",
    description:
      "A forum for enthusiasts and professionals to explore blockchain technology, discuss its potential and engage in development workshops.",
    img: group7Img,
    imgAlt: "group image for Blockchain Explorers",
    category: "Technology",
    categoryColor: getCategoryColor("Technology"),
    isSubscribed: false,
    founder: {
      name: "Harry Smith",
      pronoun: "he/him",
      email: "harry.smith@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 8,
    name: "Art and Soul",
    description:
      "A creative group for artists and art lovers. Regular workshops, art shows, and guest lectures aim to foster a thriving artistic community.",
    img: group8Img,
    imgAlt: "group image for Art and Soul",
    category: "Arts",
    categoryColor: getCategoryColor("Arts"),
    isSubscribed: false,
    founder: {
      name: "Emily Rose",
      pronoun: "she/her",
      email: "emily.rose@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 9,
    name: "Eco Warriors",
    description:
      "Active environmentalists focused on making a tangible impact on conservation efforts through cleanups, education, and advocacy.",
    img: group9Img,
    imgAlt: "group image for Eco Warriors",
    category: "Environment",
    categoryColor: getCategoryColor("Environment"),
    isSubscribed: false,
    founder: {
      name: "Laura Green",
      pronoun: "she/her",
      email: "laura.green@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 10,
    name: "Film Fanatics",
    description:
      "A group for movie buffs interested in watching and discussing films from various genres and time periods.",
    img: group10Img,
    imgAlt: "group image for Film Fanatics",
    category: "Arts",
    categoryColor: getCategoryColor("Arts"),
    isSubscribed: false,
    founder: {
      name: "Mike Johnson",
      pronoun: "he/him",
      email: "mike.johnson@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 11,
    name: "Theater Troupe",
    description:
      "A group for theater enthusiasts to explore and participate in local and classic plays. Members engage in monthly play readings and annual performances.",
    img: group11Img,
    imgAlt: "group image for Theater Troupe",
    category: "Arts",
    categoryColor: getCategoryColor("Arts"),
    isSubscribed: false,
    founder: {
      name: "Sarah Connor",
      pronoun: "she/her",
      email: "sarah.connor@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 12,
    name: "Finance Leaders",
    description:
      "A network for finance professionals and enthusiasts to discuss trends, share insights, and develop financial strategies.",
    img: group12Img,
    imgAlt: "group image for Finance Leaders",
    category: "Business",
    categoryColor: getCategoryColor("Business"),
    isSubscribed: false,
    founder: {
      name: "John Marker",
      pronoun: "he/him",
      email: "john.marker@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 13,
    name: "Tech Innovators",
    description:
      "A hub for technology creators and consumers to explore emerging tech, participate in workshops, and foster innovation.",
    img: group13Img,
    imgAlt: "group image for Tech Innovators",
    category: "Technology",
    categoryColor: getCategoryColor("Technology"),
    isSubscribed: false,
    founder: {
      name: "Linda Tech",
      pronoun: "she/her",
      email: "linda.tech@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 14,
    name: "Startup Innovators",
    description:
      "A hub for budding entrepreneurs and startup enthusiasts. This group facilitates networking opportunities, startup pitches, and discussions on venture capital trends to help members launch and scale their business ideas.",
    img: group14Img,
    imgAlt: "group image for Startup Innovators",
    category: "Business",
    categoryColor: getCategoryColor("Business"),
    isSubscribed: false,
    founder: {
      name: "Eva Long",
      pronoun: "she/her",
      email: "eva.long@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 15,
    name: "Mind and Meditation",
    description:
      "A spiritual group focused on meditation techniques and mental well-being. Sessions include guided meditation and group discussions.",
    img: group15Img,
    imgAlt: "group image for Mind and Meditation",
    category: "Health",
    categoryColor: getCategoryColor("Health"),
    isSubscribed: false,
    founder: {
      name: "Mona Spirit",
      pronoun: "she/her",
      email: "mona.spirit@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 16,
    name: "Bookworms United",
    description:
      "A book club for avid readers to discuss literature, participate in book exchanges, and meet authors.",
    img: group16Img,
    imgAlt: "group image for Bookworms United",
    category: "Education",
    categoryColor: getCategoryColor("Education"),
    isSubscribed: false,
    founder: {
      name: "Lisa Read",
      pronoun: "she/her",
      email: "lisa.read@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 17,
    name: "History Enthusiasts",
    description:
      "A group for those passionate about learning and discussing historical events, with trips to museums and historical sites.",
    img: group17Img,
    imgAlt: "group image for History Enthusiasts",
    category: "History",
    categoryColor: getCategoryColor("History"),
    isSubscribed: false,
    founder: {
      name: "Tom Oldlove",
      pronoun: "he/him",
      email: "tom.oldlove@example.com",
      avatarImg: founderBoy,
    },
  },
  {
    id: 18,
    name: "Language Learners",
    description:
      "A community for those interested in learning new languages. Members use apps, attend workshops, and practice speaking with native speakers.",
    img: group18Img,
    imgAlt: "group image for Language Learners",
    category: "Education",
    categoryColor: getCategoryColor("Education"),
    isSubscribed: false,
    founder: {
      name: "Ana Lingua",
      pronoun: "she/her",
      email: "ana.lingua@example.com",
      avatarImg: founderGirl,
    },
  },
  {
    id: 19,
    name: "Gardening Gurus",
    description:
      "A group dedicated to gardening lovers who share tips on growing vegetables and flowers, arranging plant swaps, and organizing local gardening events.",
    img: group19Img,
    imgAlt: "group image for Gardening Gurus",
    category: "Environment",
    categoryColor: getCategoryColor("Environment"),
    isSubscribed: false,
    founder: {
      name: "Fleur Green",
      pronoun: "he/him",
      email: "fleur.green@example.com",
      avatarImg: founderBoy,
    },
  },
];

export default groups;
