import behance from '../public/icons/behance.svg'
import buymeacoffee from '../public/icons/buymeacoffee.svg'
import dribbble from '../public/icons/dribbble.svg'
import figma from '../public/icons/figma.svg'
import github from '../public/icons/github.svg'
import gumroad from '../public/icons/gumroad.svg'
import instagram from '../public/icons/instagram.svg'
import kofi from '../public/icons/kofi.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import discord from '../public/icons/discord.svg'
import patreon from '../public/icons/patreon.svg'
import producthunt from '../public/icons/producthunt.svg'
import readcv from '../public/icons/read-cv.svg'
import reddit from '../public/icons/reddit.svg'
import tiktok from '../public/icons/tiktok.svg'
import twitch from '../public/icons/twitch.svg'
import x from '../public/icons/x.svg'
import youtube from '../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'behance',
  'buymeacoffee',
  'dribbble',
  'figma',
  'github',
  'gumroad',
  'instagram',
  'kofi',
  'linkedin',
  'medium',
  'patreon',
  'producthunt',
  'readcv',
  'reddit',
  'tiktok',
  'twitch',
  'x',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  GitHub: {
    title: 'GitHub',
    icon: github,
    link: 'https://www.github.com/primewk/',
    text: '@primewk',
  },
  Discord: {
    title: 'Discord',
    icon: discord,
    link: 'https://www.github.com/primewk/',
    text: 'WK Dev Server',
  },
  X: {
    title: 'X',
    icon: x,
    link: 'https://x.com/primeinspace',
    text: '@primeinspace',
  },
}

export default LINKS
