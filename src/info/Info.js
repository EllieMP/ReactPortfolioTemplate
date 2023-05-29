import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ellie",
    lastName: "Parker",
    initials: "EP", // the example uses first and last, but feel free to use three or more if you like.
    position: "a recent computer science graduate",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💭',
            text: 'fueled by dreams'
        },
        {
            emoji: '🌎',
            text: 'based in Olympia, WA'
        },
        {
            emoji: "💼",
            text: "Recent computer science graduate"
        },
        {
            emoji: "📧",
            text: "ellie@i-parker.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/EllieMP",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/elliemparker/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Ellie. I'm a recent CompSci graduate. I studied at Sonoma State University, I enjoy volunteering within the LGBTQIA+ community, going cycling, and fishing!",
    skills:
        {
            proficientWith: ['javascript', 'python', 'c++', 'git', 'github', 'docker', 'linux server', 'nodejs', 'bash', 'react'],
            exposedTo: ['AWS', 'google cloud', 'hashcat', 'nmap', 'hardware assembly', 'fpga', 'arduino', 'GIS', 'geocoding']
        }
    ,
    hobbies: [
        {
            label: 'LGBTQIA+ volenteering',
            emoji: '🏳️‍🌈🏳️‍⚧️'
        },
        {
            label: 'cycling',
            emoji: '🚴🏻‍♀️'
        },
        {
            label: 'running',
            emoji: '🏃🏻‍♀️'
        },
        {
            label: 'fishing',
            emoji: '🎣'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Meals From Dirt",
            live: "https://www.youtube.com/watch?v=jjRMVBHxS-s", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/EllieMP/mealsfromdirt", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Wordle",
            live: "https://www.youtube.com/watch?v=cB379yNct4U", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/EllieMP/wordle", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
    ]
}