export const personalProjects = [
  {
    title: 'Hacker News Clone',
    liveSite: 'https://clone-hackernews.herokuapp.com/',
    sourceLink: 'https://github.com/donrestarone/hackernews-clone',
    mainCaption: 'This was a coding challenge I completed for a full stack web developer position at Fintros in 2018. I used a rails 5 API backend with a vanilla javascript front end.',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/hacker-news-clone.mov',
    heroAssetType: 'video',
    hasSource: true,
    hasLiveSite: true, 
    features: [
      'Complete mapping of all links from API to the custom front end',
      'Infinite scroll',
      'Mobile responsive',
      'Keep track of which articles are currently loaded, so there would be no duplicate entries as the user scrolls'
    ],
    implementation: [
      'Rails 5 backend for fetching articles',
      'Vanilla javascript frontend, no libraries used for detecting scroll bottom and making ajax requests to the server'
    ],
    path: '/personal-projects/hacker-news-clone',
    id: 'hacker-news-clone',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/hacker-news-clone-mobile.mov',
      caption: 'While the app is loading, a loader is shown. Once articles data is recieved, the front end adds a bottom scroll listen which fires when the user scrolls to the bottom of the page. This event then calls an ajax request to the server which returns more articles.',
      type: 'video'
     },
    ]
  },
  {
    title: 'Menrva',
    liveSite: 'https://menrva.herokuapp.com/',
    sourceLink: 'https://github.com/donrestarone/menrva',
    mainCaption: 'When given a paragraph of text, Menrva will return some word statistics.',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/menrva.mov',
    heroAssetType: 'video',
    hasSource: true,
    hasLiveSite: true, 
    features: [
      'Count occurances of words in a given input',
      'Single page application layout',
      'Bootstrap for style',
    ],
    implementation: [
      'Full stack rails',
      'Remote-true ajax requests & view partials are used to construct the single page app'
    ],
    path: '/personal-projects/menrva-text-analyzer',
    id: 'menrva-text-analyzer',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/menrva.mov',
      caption: 'Provide some text and show the output with and without exclusions',
      type: 'video'
     },
    ]
  },
  {
    title: 'RailRoad: Your Secret Messenger',
    liveSite: 'https://rail-room.herokuapp.com/',
    sourceLink: 'https://github.com/donrestarone/rail-room',
    mainCaption: 'RailRoom is a privacy oriented real time messaging app built with React, Redux and Rails 5 ActionCable. Only users who are given the room link are able to connect, view and send messages.',
    heroAsset: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/railroad.mov',
    heroAssetType: 'video',
    hasSource: true,
    hasLiveSite: true, 
    features: [
      'Real time streaming chat',
      'At any given time, show how many people are connected to the room',
      'Custom CSS',
      'Anonymized chat rooms',
      'Dark mode'
    ],
    implementation: [
      'Rails 5 API with Redis, ActiveJob, & ActionCable websocket',
      'React frontend with Redux',
    ],
    path: '/personal-projects/railroad',
    id: 'railroad',
    media: [
     {
      link: 'https://shashike-portfolio-site-assets.s3.amazonaws.com/railroad.mov',
      caption: '2 users are connected to this room, you can see the room connection count update in real time when they join/leave',
      type: 'video'
     },
    ]
  },
].reverse()

