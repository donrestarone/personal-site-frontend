export const professionalProjects = [
  {
    title: 'ODIN 3',
    mainCaption: 'ODIN is a next generation CRM system designed for the hospitality industry. It integrates with various services such as Slack, Stripe, Sevenrooms, SilverwarePOS and Mailgun to allow venues to cater amazing experiences for their valued guests. It can take care of everything from recognizing repeat customers, marketing campaigns to charging credit cards',
    heroImage: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-3-facial-recognition-login.mov',
    features: [
      'Facial Recognition for learned faces, allows to recognize guests and allow users to login quickly.',
      'Powerful analytics for generating audiences for marketing purposes',
      'Slack notifications for guest events, such as check in, seated at table and repeat visit',
      'Reporting system for measuring labour performance',
      'Billing system with ticket sales and recurring billing',
      'Drip-campaign feature for automatic recurring outreach (ie: for reviews)'
    ],
    implementation: [
      'Front-end: SPA (Single Page Application)',
      'API backend',
      'Billing system is powered by Stripe',
      'Slack bot is used for routing notifications',
    ],
    path: '/professional-projects/odin',
    id: 'odin',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-audience-generator.png',
      caption: 'Generate marketing audiences based on custom defined parameters. Here we see lists of guests who have attended events.',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-profile.mov',
      caption: "The ODIN profile tracks a guests information including their contact details, events they have attended, visitors they have brought in and their full message history",
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-recurring-billing.png',
      caption: "The billing system handles memberships seamlessly. It supports multiple currencies/card types and one off payments.",
      type: 'image'
     }
    ]
  },
  {
    title: 'ECHO 3',
    mainCaption: 'ECHO is a fast text messaging middleware that can integrate with a given CRM system (currently the text messaging handmaiden of ODIN).',
    heroImage: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/echo.mov',
    description: '',
    path: '/professional-projects/echo',
    id: 'echo',
    media: [
      {
        link: '',
        caption: ''
       },
       {
        link: '',
        caption: ''
       }
    ]
  },
  {
    title: 'OVERSEER',
    mainCaption: "OVERSEER is a native application for leveraging ODIN's powerful facial recognition features by detecting faces in videos and uploading them to the ODIN API for processing.",
    heroImage: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/overseer-facial-detection-in-livestream.mov',
    description: '',
    path: '/professional-projects/overseer',
    id: 'overseer',
    media: [
      '',
      '',
    ]
  }
]