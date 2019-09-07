export const professionalProjects = [
  {
    title: 'ODIN 3',
    mainCaption: 'ODIN is a next generation CRM system designed for the hospitality industry. It integrates with various services such as Slack, Stripe, Sevenrooms, SilverwarePOS and Mailgun to allow venues to cater amazing experiences for their valued guests. It can take care of everything from recognizing repeat customers, marketing campaigns to charging credit cards',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-3-facial-recognition-login.mov',
    heroAssetType: 'video',
    features: [
      'Facial Recognition for learned faces, allows to recognize guests and allow users to login quickly.',
      'Powerful analytics for generating audiences for marketing purposes',
      'Slack notifications for guest events, such as check in, seated at table and repeat visit',
      'Reporting system for measuring labour performance',
      'Billing system with ticket sales and recurring billing',
      'Drip-campaign feature for automatic recurring outreach (ie: for reviews)'
    ],
    implementation: [
      'Front-end: SPA (Single Page Application) built with React.js',
      'Rails 5 API backend, Postgresql database with Redis in memory caching and sidekiq queue backend.',
      'ActionCable livestream',
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
     ,
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/bev-demo.mov',
      caption: "A bird's eye view of the venue shows where guests are seated along with guest specific information so managers & servers can deliver elevated service.",
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/render1.png',
      caption: "There are multiple ways to login: email & password, PIN or via facial recognition.",
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/labour-panel-desktop.png',
      caption: "Seamlessly assign user roles and permissions so data stays compartmentalized",
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/Screen+Shot+2019-09-06+at+6.32.52+PM.png',
      caption: "Real time analytics dashboard shows the performance of the venue as well as staff",
      type: 'image'
     },
    ]
  },
  {
    title: 'ECHO 3',
    mainCaption: 'ECHO is a fast text messaging middleware that can integrate with a given CRM system (currently the text messaging handmaiden of ODIN).',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/echo.mov',
    heroAssetType: 'video',
    features: [
      'Platform agnostic: just expose a queryable endpoint for retrieving phone numbers so when messages are recieved conversations are automatically initialized within ECHO',
      'Low latency',
      'Live stream messages to the single page application',
      'Emoji support',
      'Slack integration: recieve and respond to incoming text messages via Slack',
      'Ability to track metrics such as average response time'
    ],
    implementation: [
      'Front-end: SPA (Single Page Application) built with React.js',
      'Powered by ODIN CRM',
      'ODIN Oauth for authentication',
      'Slack bot for routing messages/notifications',
    ],
    path: '/professional-projects/echo',
    id: 'echo',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/Screen+Shot+2019-08-27+at+3.01.53+PM.png',
      caption: 'When new messages come in users are notified via Slack so they can respond right away.',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/Screen+Shot+2019-08-29+at+11.12.39+AM.png',
      caption: "Daily report sent out to managers/stakeholders so they can see the average response time.",
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/messages-scroll.mov',
      caption: "The performant interface of ECHO allows users to respond quickly to lists of conversations",
      type: 'video'
     }
     ,
    ]
  },
  {
    title: 'OVERSEER',
    mainCaption: "OVERSEER is a native application for leveraging ODIN's powerful facial recognition features by detecting faces in videos and uploading them to the ODIN API for processing.",
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/overseer-facial-detection-in-livestream.mov',
    heroAssetType: 'video',
    features: [
      'Compatible with any USB camera or RTSP feed',
      'perform client-side facial detection and upload snapshots to the ODIN API for facial recognition processing',
      'Multi-platform; Windows, Linux & MacOS',
      'Ability to upload pictures of faces',
    ],
    implementation: [
      'Electron.JS',
      'WebRTC API for media capture',
      'ODIN Oauth for authentication',
    ],
    path: '/professional-projects/overseer',
    id: 'overseer',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/overseer-search-desktop.png',
      caption: 'Facial recognition can be performed either on a video stream or snapshot',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/overseer-facial-detection-in-livestream.mov',
      caption: "Facial recognition with a livestream in action",
      type: 'video'
     },
    ]
  },
  {
    title: 'Sanjay Singhal',
    mainCaption: "Sanjay Singhal, a prominent Canadian venture capitalist & angel investor's personal website",
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/sanjay-website.mov',
    heroAssetType: 'video',
    hasLiveSite: true, 
    liveSite: 'https://www.sanjaysinghal.com',
    features: [
      '3 responsive breakpoints: desktop, mobile & tablet with custom CSS',
      'Single page application',
      'Assets hosted on CDN',
      'Custom domain & SSL certificate',
    ],
    implementation: [
      'React.js',
      'Amazon Web Services',
      'Godaddy DNS',
    ],
    path: '/professional-projects/sanjay-singhal',
    id: 'sanjay-singhal',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/sanjay-website.mov',
      caption: 'Desktop breakpoint with parallax effect',
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/sanjay-website-mobile.mov',
      caption: "Mobile breakpoint, introduces a sidebar with a hamburger collapse",
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/sanjay-website-ipad.mov',
      caption: "Tablet breakpoint, similar to desktop. No parallax, larger images slightly different layout.",
      type: 'video'
     },
    ]
  },
]