import ise from './ise.png';
import starWars from './starwar.png';


export const frontend = [
    {
        title: 'Isẹ Timer',
        img: ise,
        link: 'https://isetimer.netlify.app',
        description:'A task track webapp, users can create and time their daily tasks',
        tools:['figma', 'html', 'css', 'tailwind', 'javascript', 'vue'],
        technicals:"Designed and developed a task tracking web app that let’s users track time sensitive tasks, drawing inspiration from apps popular task tracking web apps like clockify, I used Figma to design the entire interface. In development, I used Vue frame along with Vite and Tailwind CSS to ensure speed in loading and general user experience, I used firebase and firestore for user authentication and data storage. For a better user experience it was important that the app has offline mode capabilities, hence I used Vuex for state"
    },
    {
        title: 'star wars universe',
        img: starWars,
        link: 'https://swuniverse.netlify.app/',
        description:'A website that allows users to get information about their favorite Star Wars characters.', 
        tools:['figma', 'html','css', 'bootstrap', 'javascript'],
        technicals:"Designed using figma and developed the frontend using JavaScript, HTML, Bootstrap CSS, and RESTful APIs. To Improve loading speed and general user experience I used asynchronous functions for API calls."
    },
    {
        title: 'youquest',
        img:null,
        link: 'https://youquest.netlify.app/',
        description:'Webapp presents users with 20 trivia questions based on the selected subject matter. Designed the frontend for an engaging user experience.',  
        tools:['html','css', 'bootstrap', 'javascript'],
        technicals:"Designed and developed a task tracking web app that let’s users track time sensitive tasks, drawing inspiration from apps popular task tracking web apps like clockify, I used Figma to design the entire interface. In development, I used Vue frame along with Vite and Tailwind CSS to ensure speed in loading and general user experience, I used firebase and firestore for user authentication and data storage. For a better user experience it was important that the app has offline mode capabilities, hence I used Vuex for state management and local storage to maintain offline mode data."
    },
];

export const others = [
    {
        name:'RAGE',
        link: 'https://ragengo.netlify.app'
    },
    {
        name:'web3 intro',
        link: 'https://web3intro.netlify.app'
    },
    {
        name:'opium',
        link: 'https://somethingnft.netlify.app'
    },
    {
        name:'phototruth',
        link: 'https://phototruth.netlify.app'
    },
    {
        name:'blossoms',
        link: 'https://fashionbyblossoms.netlify.app'
    }

]