import ise from "./ise.png";

export const frontend = [
    {
        title: "Tabitha AI",
        img: "https://testfrontfortabithaai.netlify.app/favicon.png",
        link: "https://testfrontfortabithaai.netlify.app/",
        description: "A web app built for the Tabitha Cumi Foundation to help marginalized women and children submit reports safely and access support resources.",
        tools: ["react-router-v7","typescript", "redux-toolkit", "tanstack-query", "axios", "tailwind"],
        inService: true,
        technicals:
            "Developed a secure and responsive web application using React Router v7 for dynamic routing and state management with Redux Toolkit. Integrated TanStack Query with Axios for efficient data fetching and synchronization, ensuring a seamless and performant user experience.",
    },

    {
        title: "FLXT",
        img: "https://flxtime.fun/assets/img/Logo.png",
        link: "https://flxtime.fun/",
        description:
            "A Dapp that lets users track their FLXT token mining activities",
        tools: ["react", "tailwind", "solana"],
        inService:true,
        technicals:
            "Built a responsive and user-friendly interface using React and Tailwind CSS to enable users to monitor their FLXT mining activities. Leveraged advanced React hooks such as useCallback, useMemo, memo, and lazy loading to optimize performance and UI responsiveness. Integrated Solana Wallet Adapter to seamlessly manage wallet connections within the dApp, ensuring smooth interaction with the Solana blockchain.",
    },
    {
        title: "Isẹ Timer",
        img: ise,
        link: "https://isetimer.netlify.app",
        description:
            "A task track webapp, users can create and time their daily tasks",
        tools: ["figma", "tailwind", "vue"],
        inService:true,
        technicals:
            "Designed and developed a task tracking web app that let's users track time sensitive tasks, drawing inspiration from apps popular task tracking web apps like clockify, I used Figma to design the entire interface. In development, I used Vue frame along with Vite and Tailwind CSS to ensure speed in loading and general user experience, I used firebase and firestore for user authentication and data storage. For a better user experience it was important that the app has offline mode capabilities, hence I used Vuex for state",
    },
    {
        title: "Homifi Africa",
        img: "https://homifiafrica.com/assets/HomifiLogo.4ff35ce5.svg",
        link: "https://homifiafrica.com",
        description: "A real estate webapp, users can buy and sell properties",
        tools: ["vue", "tailwind", "typescript", "node"],
        inService:false,
        technicals:
            "Utilized Vue.js and Quasar framework to build a user-friendly interface for real estate agents. Assisted with backend development using Express.js and Mongoose, ensuring a robust, scalable solution.",
    },
    // {
    //     title: "youquest",
    //     img: null,
    //     link: "https://youquest.netlify.app/",
    //     description:
    //         "Webapp presents users with 20 trivia questions based on the selected subject matter. Designed the frontend for an engaging user experience.",
    //     tools: ["html", "css", "bootstrap", "javascript"],
    //     technicals:
    //         "Designed and developed a task tracking web app that let’s users track time sensitive tasks, drawing inspiration from apps popular task tracking web apps like clockify, I used Figma to design the entire interface. In development, I used Vue frame along with Vite and Tailwind CSS to ensure speed in loading and general user experience, I used firebase and firestore for user authentication and data storage. For a better user experience it was important that the app has offline mode capabilities, hence I used Vuex for state management and local storage to maintain offline mode data.",
    // },
];

export const others = [
    {
        name: "savuney",
        link: "https://banktestfront.netlify.app/",
    },
    {
        name: "IWB Africa",
        link: "https://iwbafrica.org",
    },
    {
        name: "RAGE",
        link: "https://ragengo.netlify.app",
    },
    {
        name: "web3 intro",
        link: "https://web3intro.netlify.app",
    },
    {
        name: "opium",
        link: "https://somethingnft.netlify.app",
    },

    {
        name: "blossoms",
        link: "https://fashionbyblossoms.netlify.app",
    },
];
