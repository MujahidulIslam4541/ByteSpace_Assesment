export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  studentAvatars: string[];
  extraStudents: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80",
    category: "UI/UX Design",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/women/12.jpg",
      "https://randomuser.me/api/portraits/men/34.jpg",
      "https://randomuser.me/api/portraits/women/56.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    category: "Digital Illustration",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/women/23.jpg",
      "https://randomuser.me/api/portraits/men/67.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "3",
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    category: "Data Science",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/women/33.jpg",
      "https://randomuser.me/api/portraits/men/22.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "4",
    title: "Balancing Productivity and Life",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",
    category: "Productivity",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/men/51.jpg",
      "https://randomuser.me/api/portraits/women/62.jpg",
      "https://randomuser.me/api/portraits/men/73.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "5",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    category: "Data Science",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/women/71.jpg",
      "https://randomuser.me/api/portraits/men/82.jpg",
      "https://randomuser.me/api/portraits/women/93.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    category: "Marketing",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/men/15.jpg",
      "https://randomuser.me/api/portraits/women/26.jpg",
      "https://randomuser.me/api/portraits/men/37.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "7",
    title: "Introduction to Animation Basics",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    category: "Animation",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/women/48.jpg",
      "https://randomuser.me/api/portraits/men/59.jpg",
      "https://randomuser.me/api/portraits/women/60.jpg",
    ],
    extraStudents: 26,
  },
  {
    id: "8",
    title: "Social Media Growth Strategy",
    instructor: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    category: "Social Media",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    studentAvatars: [
      "https://randomuser.me/api/portraits/men/28.jpg",
      "https://randomuser.me/api/portraits/women/39.jpg",
      "https://randomuser.me/api/portraits/men/50.jpg",
    ],
    extraStudents: 26,
  },
];

export const COURSE_CATEGORIES: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const EXTRA_COURSE_CATEGORIES: string[] = [
  "Business",
  "IT & Software",
  "Finance",
];