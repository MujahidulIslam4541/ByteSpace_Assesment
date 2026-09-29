export interface TestimonialItem {
  id: string
  name: string
  role: string
  quote: string
  avatarSrc: string
  avatarAlt: string
}

export const TESTIMONIALS_CONTENT: TestimonialItem[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatarSrc: "https://randomuser.me/api/portraits/women/56.jpg",
    avatarAlt: "Portrait of Sarah M.",
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatarSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    avatarAlt: "Portrait of James L.",
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatarSrc: "https://randomuser.me/api/portraits/women/12.jpg",
    avatarAlt: "Portrait of Alex B.",
  },
]
