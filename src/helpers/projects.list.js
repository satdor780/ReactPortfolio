import pr01 from '../img/projects/danchikova.png'

import pr02 from '../img/projects/life-oae.png'

import pr03 from '../img/projects/beribit.png'

import pr04 from '../img/projects/hexaShop.png'

import pr05 from '../img/projects/motosurfing.png'

import pr06 from '../img/projects/calc.png'

import pr07 from '../img/projects/exchange.png'

import pr08 from '../img/projects/maksim.png'

import pr09 from '../img/projects/market-place.png'

import pr010 from '../img/projects/molly-csgo.png'

const html = 'HTML/CSS'
const js = 'JS'
const wp = 'Wordpress'
const jq = 'Jqvery'
const react = 'React'
const router = 'React-router-dom'
const redux = 'Redux toolkit'
const type = 'TypeScript'
const api = 'Api'
const next = 'Next.js'
const shadcn = 'Shadcn/ui'
const antd = 'Ant Design'
const tailwind = 'Tailwind'
const rtk = 'RTK query'
const mobx = 'Mobx'
const i18n = 'i18n'


const projects = [
    {
        id: 0,
        title: 'Molly csgo',
        skills: [react, type, next, tailwind, rtk, i18n],
        type: 'react',
        img: pr010,
        githubLink: false,
        link: 'https://molly-csgo.vercel.app/',
        training: false,
        dec: 'site on modern stack for community of players cs go'
    },
    {
        id: 1,
        title: 'Marketplace',
        skills: [react, type, next, shadcn, tailwind, mobx],
        type: 'react',
        img: pr09,
        githubLink: 'https://github.com/satdor780/market-place-open',
        link: 'https://market-place-open.netlify.app/',
        training: true,
        dec: 'marketplace on a modern stack'
    },
    {
        id: 2,
        title: 'Site for psychologist',
        skills: [html, js, wp],
        type: 'wordpress',
        img: pr08,
        githubLink: false,
        link: 'https://dr-maxim.ru/',
        training: false,
        dec: 'site for psychologist in pure HTML/CSS'
    },
    {
        id: 3,
        title: 'Website for the deputy',
        skills: [html, js, jq, wp],
        type: 'wordpress',
        img: pr01,
        githubLink: false,
        link: 'https://galinadanchikova.ru/',
        training: false,
        dec: 'Website for a deputy. Layout and landing on WP.'
    },
    {
        id: 4,
        title: 'Exchange crypto',
        skills: [react, type, router, redux, api, 'FSD architecture'],
        type: 'react',
        img: pr07,
        githubLink: 'https://github.com/satdor780/exchangeCrypto',
        link: 'https://exchangecryptosite.netlify.app',
        training: true,
        dec: 'Site for cryptocurrency exchange. Requests to the server, the logic of currency exchange, designed it myself from scratch'
    },
    {
        id: 5,
        title: 'Online store',
        skills: [react, router, redux, api],
        type: 'react',
        img: pr04,
        githubLink: 'https://github.com/satdor780/haxaShop',
        link: 'https://hexashopnet.netlify.app',
        training: true,
        dec: 'Online store on React login/registration, requests for api, shopping cart, search, pagination'
    },
    {
        id: 6,
        title: 'Website about relaxation',
        skills: [html, js, jq, wp],
        type: 'wordpress',
        img: pr02,
        githubLink: false,
        link: 'https://life-oae.ru/',
        training: false,
        dec: 'Site about relocation. Layout and landing on WP. Login and registration, bookmarks. In the further functions of registration and login were removed'

    },
    {
        id: 7,
        title: 'Crypto Exchange(P2P part)',
        skills: [html, js],
        type: 'html',
        img: pr03,
        githubLink: false,
        link: 'https://beribit.app/',
        training: false,
        dec: 'Layout of P2P part of the exchange and modal windows.'
    },
    {
        id: 8,
        title: 'Motosurfing',
        skills: [html, js],
        type: 'html',
        img: pr05,
        githubLink: false,
        link: 'https://rental.motosurfing.com/',
        training: false,
        dec: 'Nothing complicated, layout on html/css and a little bit of js'
    },
    {
        id: 9,
        title: 'calculate',
        skills: [html, js],
        type: 'html',
        img: pr06,
        githubLink: 'https://github.com/satdor780/calculate',
        link: 'https://satdor780.github.io/calculate/',
        training: true,
        dec: 'Calculator on VanillaJS'
    },
]

export {projects}
