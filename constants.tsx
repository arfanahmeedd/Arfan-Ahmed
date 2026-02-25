import React from 'react';
import { 
  Project, 
  Service, 
  Award, 
  FAQItem, 
  GalleryItem,
  Experience
} from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether OS',
    category: 'PRODUCT DESIGN',
    imageUrl: 'https://picsum.photos/seed/aether/1200/800',
    description: 'Next-generation spatial operating system interface focusing on minimalist interaction paradigms.'
  },
  {
    id: '2',
    title: 'Kinetix Branding',
    category: 'IDENTITY',
    imageUrl: 'https://picsum.photos/seed/kinetix/1200/800',
    description: 'Visual identity for a high-performance athletic tech startup based in Berlin.'
  },
  {
    id: '3',
    title: 'Nova App',
    category: 'PRODUCT DESIGN',
    imageUrl: 'https://picsum.photos/seed/nova/1200/800',
    description: 'A revolutionary mental wellness application using biometric feedback and generative soundscapes.'
  },
  {
    id: '4',
    title: 'Monolith VR',
    category: 'CREATIVE DIRECTION',
    imageUrl: 'https://picsum.photos/seed/monolith/1200/800',
    description: 'Architectural visualization and creative strategy for an immersive digital gallery.'
  },
  {
    id: '5',
    title: 'Social Media Poster I',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://i.pinimg.com/474x/69/1b/9a/691b9a504f9736cb9ef554c39706f53e.jpg',
    description: 'Strategic visual content designed for high-impact social media engagement.'
  },
  {
    id: '6',
    title: 'Social Media Poster II',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://i.pinimg.com/1200x/5a/45/29/5a452943d6fe1aa041972ede4c9bb75b.jpg',
    description: 'Premium editorial-style social media graphics for brand storytelling.'
  },
  {
    id: '7',
    title: 'Social Media Poster III',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://i.pinimg.com/736x/d9/fb/11/d9fb11556c43055db1eaf0a101169c7c.jpg',
    description: 'Minimalist and modern social media poster design for digital campaigns.'
  },
  {
    id: '8',
    title: 'Social Media Poster IV',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://i.pinimg.com/736x/a8/d8/36/a8d836f5d090fdf83e2b2c3bdcf0e3cd.jpg',
    description: 'Creative direction and visual identity for social media presence.'
  },
  {
    id: '9',
    title: 'Social Media Poster V',
    category: 'SOCIAL MEDIA',
    imageUrl: 'https://media.discordapp.net/attachments/1345426296360144988/1423778443727736943/USM.jpg?ex=699d6a41&is=699c18c1&hm=3b6c09516b5ecda779327890fe8f14964a2ed06526c8b2089cd278635a2fcb64&=&format=webp&width=1220&height=452',
    description: 'High-fidelity multimedia content for strategic brand communication.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Industrial Sustainability',
    description: 'Technical expertise in Effluent Treatment Plants (ETP) and environmental compliance systems for the textile industry.',
    tags: ['ETP', 'Compliance', 'Sustainability'],
    icon: 'compass'
  },
  {
    id: 's2',
    title: 'Fashion Graphic Design',
    description: 'Aesthetic narratives for high-end apparel, blending streetwear culture with avant-garde visual expressions.',
    tags: ['Apparel', 'Print', 'Culture'],
    icon: 'shirt'
  },
  {
    id: 's3',
    title: 'Brand Identity',
    description: 'Crafting distinctive visual identities that resonate with market innovators and forward-thinking founders.',
    tags: ['Logo Design', 'Guidelines', 'Identity'],
    icon: 'sparkles'
  },
  {
    id: 's4',
    title: 'Creative Strategy',
    description: 'Holistic vision and execution of high-end digital campaigns and interactive experiences.',
    tags: ['Vision', 'Narrative', 'Execution'],
    icon: 'layout'
  },
  {
    id: 's5',
    title: 'Research Work',
    description: 'In-depth industrial research and analysis focusing on textile evolution and sustainable manufacturing paradigms.',
    tags: ['Analysis', 'Textile', 'Innovation'],
    icon: 'compass'
  }
];

export const AWARDS: Award[] = [
  { id: 'a1', title: 'Awwwards Site of the Year', year: '2024', organization: 'Awwwards' },
  { id: 'a2', title: 'Red Dot: Best of the Best', year: '2023', organization: 'Red Dot' },
  { id: 'a3', title: 'FWA of the Month', year: '2023', organization: 'FWA' },
  { id: 'a4', title: 'Behance Featured: Product Design', year: '2024', organization: 'Adobe' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'What is your typical project timeline?',
    answer: 'Most comprehensive branding and product design projects span 6 to 12 weeks, depending on the scope and complexity of requirements.'
  },
  {
    id: 'f2',
    question: 'Do you work with early-stage startups?',
    answer: 'Absolutely. We specialize in helping founders transition from MVP to a polished, premium market presence.'
  },
  {
    id: 'f3',
    question: 'How do you incorporate AI into your workflow?',
    answer: 'We use generative tools for rapid ideation, conceptual visualization, and streamlining repetitive design tasks to focus on strategy.'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476148944823255154/IMG_3549.jpg?ex=69a01255&is=699ec0d5&hm=c327486b98bfbb37c4bf5a94ad488a3bf306792d19878e2aa793700dedcf3f11&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g2', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149046639853669/IMG_2280.jpg?ex=69a0126e&is=699ec0ee&hm=7d5ab44abf6aed54502e387aaf13ce31657856d8daa43f8d8cae9b75f4297a58&=&format=webp&width=530&height=717', category: 'social' },
  { id: 'g3', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149049584517212/IMG_2987.jpg?ex=69a0126e&is=699ec0ee&hm=9c773c3d2577d41e4cf7b935ef7ba4005df849198000b74bf1405ea2f2850256&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g4', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149045864042648/IMG_1946.jpg?ex=69a0126e&is=699ec0ee&hm=6dacb0b372cd2932071f297f9f824a3bbb882f33dd6407e209460485c12437d7&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g5', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149117250961530/IMG_6124.jpg?ex=69a0127f&is=699ec0ff&hm=142c24f7d69fdfd1557d774c36e38e4ac354616751bbb5f94351ab7cd5cca60e&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g6', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149044089716860/IMG_0321.jpg?ex=69a0126d&is=699ec0ed&hm=b2025c50edc7379cfc21019f458ec762577e6579552c67370dde713a5f8d3d3d&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g7', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149045419442250/IMG_1717.jpg?ex=69a0126d&is=699ec0ed&hm=ae9d3c5b8db3c506aa39834a6e81847520404d4b4f605faabc2b5a74c407a01f&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g8', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149117641293824/IMG_6116.jpg?ex=69a0127f&is=699ec0ff&hm=d0d6266053ad834ebf41cbdb0f9194b5129d811ab5d930af6f192e9aa042a507&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g9', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476149119360696371/IMG_4356.jpg?ex=69a0127f&is=699ec0ff&hm=5661c452c12f5bbc6c371f16fbbcf16107816808839a15b542394fc5592615da&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g10', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476148943896313856/IMG_5411_jpg.jpg?ex=69a01255&is=699ec0d5&hm=06f6269f2dfe4a61dbc77a081e4d11a07968ef611e1b81de67cc26a779af8ec6&=&format=webp&width=538&height=717', category: 'social' },
  { id: 'g11', url: 'https://media.discordapp.net/attachments/1346902716177186840/1476148945913647155/IMG_6090.jpg?ex=69a01256&is=699ec0d6&hm=97307aa5f89305701d3a33ebfadfb5e0f2b7feaab9d0fa734fbd5fd975c5aa8d&=&format=webp&width=538&height=717', category: 'social' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e0.00',
    role: 'Founder',
    company: 'Ghash',
    logoUrl: 'https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-6/449307970_122150174072122536_3631744304378177195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XCvVaxDDVnEQ7kNvwEr6sAP&_nc_oc=AdkfSB-2teOfQPqJuO8_zdgsuIzEpoxVcypftxUGZD_rtqSVlBW0OhQOJUbzhPsbDnY&_nc_zt=23&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=NFNdyWiYzXy5e5NSShGRug&oh=00_AftMtSBXNCQJhf2cKX5X3nbH0cLLvtrw9yxlBzpQnzKhfg&oe=69A24A59',
    period: '2024 - Present',
    description: 'Founded and leading a sustainable clothing brand dedicated to eco-friendly fashion and ethical production practices. Overseeing brand strategy, product design, and community engagement to promote conscious consumerism.',
    achievements: [
      'Established a sustainable supply chain focusing on organic and recycled materials.',
      'Developed the brand identity and creative direction for seasonal collections.',
      'Launched digital marketing campaigns that grew the brand\'s community and awareness.'
    ]
  },
  {
    id: 'e0.0',
    role: 'Deputy Secretary',
    company: 'CTEC Career Club - CCC',
    logoUrl: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/465665759_982216620592074_7558442621391191374_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=3XVpkoFe1v4Q7kNvwHQNjDA&_nc_oc=AdkNMtgJVQZ5xf60unz2ZKUEWVnK-g0r9SAtxJWbnN9iOnWZ-RdRUQjiU6EvbJs4zC4&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=fozm2mLtzSY1tMmNLuk73w&oh=00_AfvdyciML2lbwoDwmqSPEW5-87vTJxZMqbI9QczgDQY0Aw&oe=699FC68E',
    location: 'Chattogram, Bangladesh',
    type: 'Part-time',
    period: 'Nov 2025 - Present',
    description: 'Leading the video and graphics division to strengthen the club\'s visual presence and strategic communication. Responsible for overseeing multimedia content creation and ensuring cohesive branding across all club initiatives and events.',
    achievements: [
      'Managing and overseeing the club’s video and graphics division to support branding and promotions.',
      'Creating engaging multimedia content for events, campaigns, and official communication.',
      'Collaborating with executive members to enhance the club’s visual identity.',
      'Ensuring timely delivery of creative assets and contributing to strategic communication efforts.',
      'Supporting club initiatives through content planning, design, and technical execution.'
    ]
  },
  {
    id: 'e0.1',
    role: 'Assistant Secretary',
    company: 'CTEC English Club',
    logoUrl: 'https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/328287393_839327397165614_4563122539428590073_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Mk0-SFk2yCoQ7kNvwFPaI8A&_nc_oc=AdnJS9RpvPBVoHkWKH_FI8pXZuT0WF9UPXMYFPd6j-18ofDjbwCkzPXmDcuSH2eS240&_nc_zt=23&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=ybnMLXxtxoynW8ksjRYsJg&oh=00_AftWP-vT0xz57I4_56qK-jTfDD8VGCgPaOAoEmcO8eWVHA&oe=69A24AA1',
    location: 'Bangladesh · Hybrid',
    type: 'Part-time',
    period: 'Nov 2024 - Present',
    description: 'Empowering Bangla-medium university students to excel in English-medium academic environments by providing a supportive, immersive on-campus platform. As Assistant Secretary, I lead initiatives that facilitate seamless linguistic transitions and enhance overall English proficiency through structured programs and community engagement.',
    achievements: [
      'Facilitated the transition of Bangla-medium students to English-medium university curricula through targeted support programs.',
      'Orchestrated on-campus events and workshops designed to enhance English language proficiency in a peer-led environment.',
      'Collaborated with club leadership to develop strategic initiatives that foster a bilingual academic culture on campus.'
    ]
  },
  {
    id: 'e0',
    role: 'Executive of Marketing and Sales',
    company: 'M/S Mohammad A.E Engineer',
    logoUrl: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/450802280_499316522610119_9011308149871832584_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=lznCj6x7O7IQ7kNvwH78Voq&_nc_oc=AdkXzYzxRiVk_bFhnNABbd_f7h3z96ZV2qSJ-8FmfUfGdoXPD0MS-eoyGCwpeR-S0OE&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=gPe2BVcROdI1_Y4yAAFggw&oh=00_AfsMTYMZtjGD1OYGEUcYJEnBA2o7NWl77kbK7NYQOwQSHQ&oe=699FF60A',
    location: 'Dhaka, Bangladesh · Hybrid',
    type: 'Part-time',
    period: 'Oct 2024 - Present',
    description: 'Contributing to layout planning, design, and project coordination for sustainable wastewater solutions. Assist in preparing detailed certification documents for the Department of Environment of Bangladesh (DoE) and help ensure full compliance with national environmental regulations.',
    achievements: [
      'Contributing to layout planning and design for sustainable wastewater solutions.',
      'Project coordination for environmental compliance.',
      'Preparing detailed certification documents for the Department of Environment of Bangladesh (DoE).'
    ]
  },
  {
    id: 'e0.5',
    role: 'Brand Designer and Consultant',
    company: 'Digital Resolution',
    logoUrl: 'https://media.discordapp.net/attachments/1411730278417960970/1423778962013950033/DR-logo.png?ex=699d6abd&is=699c193d&hm=d907acf661c4ba7204618a28368f64b9d549abab88d82792635344108c783dbe&=&format=webp&quality=lossless&width=834&height=834',
    location: 'Dubai, United Arab Emirates · Remote',
    type: 'Part-time',
    period: 'Apr 2024 - Present',
    description: 'Leading the creative strategy and brand development for a diverse portfolio of international clients. Specializing in crafting cohesive visual identities and high-impact digital marketing campaigns that drive brand recognition and market growth in the UAE region and beyond.',
    achievements: [
      'Developed and executed comprehensive brand guidelines for multiple digital-first startups.',
      'Collaborated with marketing teams to design high-fidelity visual assets for cross-channel campaigns.',
      'Consulted on digital strategy and visual storytelling to enhance online presence and user engagement.'
    ]
  },
  {
    id: 'e0.6',
    role: 'Brand Designer',
    company: 'The Markers IT',
    logoUrl: 'https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-6/475694895_122095835306760237_425869461553075324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Jcox-lwdZN4Q7kNvwE1KjWy&_nc_oc=Adli3XMo82qM9y9B_Sq7AOp13MXGsGJuHy-aUd-5v-YNJ8PnriHTXfCMYVOo6usxquI&_nc_zt=23&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=pTIbv6roQnH8FcLVVis9lQ&oh=00_AfvwlfRgneiPWGANaZvzQ6VM87xho5kKMOAacShPGm-Jkw&oe=69A23562',
    period: 'May 2024 - Jan 2026',
    description: 'Crafted compelling brand identities and visual systems for a variety of digital products and services. Focused on creating cohesive design languages that bridge the gap between technical functionality and user-centric aesthetics.',
    achievements: [
      'Designed and implemented comprehensive brand identities for multiple IT solutions and software products.',
      'Collaborated with development teams to ensure visual consistency across web and mobile platforms.',
      'Produced high-quality marketing collateral and digital assets to support product launches and brand awareness.'
    ]
  }
];
