import pr01 from '../img/projects/danchikova.png'
// import pr01Big from '../img/projects/danchikova.png'

import pr02 from '../img/projects/life-oae.png'
// import pr02Big from '../img/projects/02-big.jpg'

import pr03 from '../img/projects/beribit.png'
// import pr03Big from '../img/projects/03-big.jpg'

import pr04 from '../img/projects/hexaShop.png'
// import pr04Big from '../img/projects/04-big.jpg'

import pr05 from '../img/projects/motosurfing.png'
// import pr05Big from '../img/projects/05-big.jpg'

import pr06 from '../img/projects/calc.png'


 const projects = [
    {
        id: 1,
        title: 'Website for the deputy',
        skills: ['html/css', 'js', 'jqvery', 'wordpress'],
        type: 'wordpress',
        img: pr01,
        githubLink: false,
        link: 'https://galinadanchikova.ru/',
        training: false,
        dec: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero consectetur temporibus velit. Obcaecati culpa nisi, explicabo sit suscipit asperiores.'
    },
    {
        id: 4,
        title: 'Online store',
        skills: ['react', 'react-router-dom', 'redux toolkit', 'fake api'],
        type: 'react',
        img: pr04,
        githubLink: 'https://github.com/satdor780/haxaShop',
        link: 'https://hexashopnet.netlify.app',
        training: true,
        dec: 'bla'
    },
    {
        id: 2,
        title: 'Website about relaxation',
        skills: ['html/css', 'js', 'jqvery', 'wordpress'],
        type: 'wordpress',
        img: pr02,
        githubLink: false,
        link: 'https://life-oae.ru/',
        training: false,
        dec: 'bla'
        
    },
    {
        id: 3,
        title: 'Crypto Exchange(P2P part)',
        skills: ['html/css', 'js'],
        type: 'html',
        img: pr03,
        githubLink: false,
        link: 'https://beribit.app/',
        training: false,
        dec: 'bla'
    },
    {
        id: 5,
        title: 'Motosurfing',
        skills: ['html/css', 'js'],
        type: 'html',
        img: pr05,
        githubLink: false,
        link: 'https://rental.motosurfing.com/',
        training: false,
        dec: 'bla'
    },
    {
        id: 6,
        title: 'calculate',
        skills: ['html/css', 'js'],
        type: 'html',
        img: pr06,
        githubLink: 'https://github.com/satdor780/calculate',
        link: 'https://satdor780.github.io/calculate/',
        training: true,
        dec: 'bla'
    },
]

export {projects}