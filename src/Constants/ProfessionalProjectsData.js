export const professionalProjects = [
  {
    title: 'ODIN 3',
    mainCaption: 'ODIN is a next generation CRM system designed for the hospitality industry. It integrates with various services to enable venues to create amazing experiences for their guests. It can take care of everything from recognizing repeat customers, marketing to payment processing',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/render1.png',
    heroAssetType: 'image',
    features: [
      'Facial Recognition identifies familiar faces and enables venues to recognize frequent guests. It also allows staff to login quickly.',
      'Powerful analytics for generating audiences for marketing purposes',
      'Slack notifications for guest events ranging from checked in, table assigned to repeat visit',
      'Reporting system for measuring labour performance',
      'Billing system for handling event ticket sales and recurring billing',
      'Drip-campaign feature for automatic recurring outreach (ie: for reviews)'
    ],
    implementation: [
      'Front-end: SPA (Single Page Application) built with React.js',
      'Rails 5 API backend, Postgresql database with Redis in memory caching and sidekiq queue backend.',
      'ActionCable livestream',
      'Billing system is powered by Stripe',
      'Slack bot is used for routing notifications',
    ],
    technologies: [
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/postgresql.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/stripe.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/redis.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/react.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/rails-red-logo.png'
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
      caption: "The ODIN profile tracks a guests information including their contact details, events they have attended, visitors they have brought in and their full text message history",
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
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/silverware-analytics.mov',
      caption: "SilverwarePOS integration shows POS data aggregated against other data sources. Presents key indicators of labour performance, inventory and sales",
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/odin-3-facial-recognition-login.mov',
      caption: "There are multiple ways to login: email & password, PIN or via facial recognition.",
      type: 'video'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/labour-panel-desktop.png',
      caption: "Seamlessly assign user roles and permissions so data stays secure and compartmentalized",
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
    title: 'Marked Restaurant',
    mainCaption: "This tasteful website was built for Toronto premier grill-house, Marked. Its responsive design not only changes based on screen size, but also orientation.",
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/desktop-marked.png',
    heroAssetType: 'image',
    hasLiveSite: true, 
    liveSite: 'https://www.markedrestaurant.com',
    features: [
      "Single page application",
      "The site's design changes based on device orientation"
    ],
    implementation: [
      'Front-end: SPA (Single Page Application) built with React.js',
      "Assets hosted on AWS S3",
      "Custom CSS",
    ],
    technologies: [
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/react.png',
    ],
    path: '/professional-projects/marked',
    id: 'marked',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/desktop-marked.png',
      caption: 'This is the view presented to desktop users',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/tablet-landscape-marked.png',
      caption: 'This view is shown to tablet users if their device is in landscape mode',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/tablet-portrait-marked.png',
      caption: 'This view is shown to tablet users if their device is in portrait mode',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/mobile-portrait-marked.png',
      caption: 'This view is shown to mobile users if their device is in portrait mode',
      type: 'image'
     },
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/mobile-landscape-marked.png',
      caption: 'This view is shown to mobile users if their device is in landscape mode',
      type: 'image'
     },
    ]
  },
  {
    title: 'ECHO 3',
    mainCaption: 'ECHO is a fast text messaging service that can integrate with a given CRM system',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/echo-messages-desktop-2.png',
    heroAssetType: 'image',
    features: [
      'Platform agnostic: just expose a queryable endpoint for retrieving customers by phone number.',
      'When messages are recieved conversations are automatically initialized within ECHO',
      'Low latency',
      'Live interface shows messages as they come in',
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
    technologies: [
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/react.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/slack-logo.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/redis.png',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/rails-red-logo.png'
    ],
    path: '/professional-projects/echo',
    id: 'echo',
    media: [
      {
       link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/echo.mov',
       caption: "The mobile-first design allows Echo's interface to translate well to mobile screens",
       type: 'video'
      },
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
     },
    ]
  },
  {
    title: 'OVERSEER',
    mainCaption: "OVERSEER is a native application for leveraging ODIN's powerful facial recognition features. It can detect faces in videos and upload them to ODIN for processing.",
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/overseer-search-desktop.png',
    heroAssetType: 'image',
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
    technologies: [
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/electron-logo.svg',
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/webrtc.png'
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
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/Screen+Shot+2020-02-02+at+3.44.27+PM.png',
    heroAssetType: 'image',
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
    technologies: [
      'https://shashike-portfolio-site-assets.s3.amazonaws.com/react.png',
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

