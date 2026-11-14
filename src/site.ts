export const SITE = {
  name: "Grimoire",
  url: "https://grimoire.charmaweb.com",
  tagline: "A small creative web studio that conjures immersive websites.",
  concept: "Concept site: Grimoire is a fictional studio.",
};

export const PAGES = {
  home: {
    title: "Grimoire | Creative web studio",
    description:
      "Grimoire is a small creative web studio crafting immersive websites with 3D, motion and sound. A concept site built by CharmaWeb.",
  },
  about: {
    title: "About | Grimoire",
    description:
      "Meet Grimoire, a two-person creative web studio building immersive websites with 3D, motion and sound. A fictional studio, a real build.",
  },
  projects: {
    title: "Projects | Grimoire",
    description:
      "Six enchanted projects by Grimoire, a fictional creative web studio: festival sites, museum guides, game studios and online stores.",
  },
  journey: {
    title: "Journey | Grimoire",
    description:
      "How Grimoire came to be: two careers in design and code, one barn office, and a studio for immersive websites. A concept site.",
  },
  contact: {
    title: "Contact | Grimoire",
    description:
      "Write to Grimoire, a fictional creative web studio. This demo form sends nothing, it shows how a contact page can feel.",
  },
  credits: {
    title: "Credits | Grimoire",
    description:
      "Credits for the Grimoire concept site: 3D models, music, illustrations and icons, with their authors and licences.",
  },
};

export type IconName =
  | "house"
  | "user"
  | "palette"
  | "notebook"
  | "mail"
  | "volume-on"
  | "volume-off"
  | "work"
  | "learn";

export const NAV: { label: string; href: string; icon: IconName }[] = [
  { label: "About", href: "/about", icon: "user" },
  { label: "Projects", href: "/projects", icon: "palette" },
  { label: "Journey", href: "/journey", icon: "notebook" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

export const ABOUT = {
  title: "Architects of enchantment",
  paragraphs: [
    "Grimoire is a two-person creative web studio hidden somewhere between a forest and a code editor. We build websites that people remember: living 3D scenes, motion that means something, and sound when it helps the story.",
    "Mira Ashdown leads design and art direction. Theo Lark writes the code, from shaders to servers. Together we take a project from the first sketch to the last performance budget, and we keep every page fast on a phone.",
    "We work with independent brands, museums and game studios who want their site to feel like a place, not a brochure.",
  ],
  figures: [
    { value: "9", label: "years of spellwork" },
    { value: "64", label: "sites launched" },
    { value: "12", label: "awards and mentions" },
  ],
  services: [
    {
      name: "Immersive websites",
      text: "Story-driven sites with WebGL scenes, scroll choreography and sound design.",
    },
    {
      name: "3D for the web",
      text: "Models, particles and shaders tuned to load fast and run smoothly on a phone.",
    },
    {
      name: "Brand worlds",
      text: "Identity, illustration and motion language, built to live on screen.",
    },
    {
      name: "Performance care",
      text: "Audits and rescues for heavy sites: lighter assets, faster first paint, calmer processors.",
    },
  ],
  tools: ["Astro", "TypeScript", "three.js", "GLSL", "Blender", "Figma", "Web Audio"],
};

export const PROJECTS = [
  {
    name: "Lanternfall Festival",
    kind: "Festival site",
    year: "2026",
    text: "A night festival site where each lantern on screen opens a stage, an artist and a timetable.",
  },
  {
    name: "The Moss Atlas",
    kind: "Museum exhibition",
    year: "2025",
    text: "An online companion to a botanical exhibition: 120 mosses in 3D, zoomable down to the leaf.",
  },
  {
    name: "Gloamstone Games",
    kind: "Studio website",
    year: "2025",
    text: "A game studio site with a playable title screen, devlogs and a press kit that loads in a second.",
  },
  {
    name: "Thistlewick Candles",
    kind: "Online store",
    year: "2024",
    text: "A candle maker's shop with scent notes, gift sets and a checkout tuned for phones.",
  },
  {
    name: "Stargazer Almanac",
    kind: "Interactive guide",
    year: "2024",
    text: "A sky guide that shows tonight's constellations for any city, drawn with 4,000 particles.",
  },
  {
    name: "Inkwell Hollow",
    kind: "App landing page",
    year: "2023",
    text: "A landing page for a writing app, with an animated quill that follows the reader down the page.",
  },
];

export const JOURNEY: {
  period: string;
  title: string;
  place: string;
  text: string;
  type: "work" | "learn";
}[] = [
  {
    period: "2026",
    title: "Lanternfall goes live",
    place: "Grimoire",
    text: "Our biggest launch yet: 40 stages, one night, and a site that held up on the festival's own Wi-Fi.",
    type: "work",
  },
  {
    period: "2025",
    title: "Site of the Day, twice",
    place: "Web design awards",
    text: "The Moss Atlas and Gloamstone Games were each named Site of the Day.",
    type: "work",
  },
  {
    period: "2023",
    title: "Grimoire opens its door",
    place: "A converted barn office",
    text: "Mira and Theo leave their agencies and start the studio.",
    type: "work",
  },
  {
    period: "2019 - 2023",
    title: "Creative developer",
    place: "Theo, at a digital agency",
    text: "Campaign sites and WebGL experiments for sports and music brands.",
    type: "work",
  },
  {
    period: "2017 - 2023",
    title: "Art director",
    place: "Mira, at a design studio",
    text: "Identity and illustration for publishers and museums.",
    type: "work",
  },
  {
    period: "2016",
    title: "Creative coding",
    place: "Theo, self-taught",
    text: "Shaders, generative art and far too many particles.",
    type: "learn",
  },
  {
    period: "2014",
    title: "Illustration degree",
    place: "Mira, school of fine arts",
    text: "Printmaking, typography and a thesis on enchanted forests in picture books.",
    type: "learn",
  },
];

export const CONTACT = {
  title: "Send us an owl",
  intro:
    "Tell us about the world you want to build. This is a demo form: nothing is sent anywhere.",
  submit: "Cast your message!",
  sent: "Demo form: nothing was sent. Grimoire is a fictional studio built by CharmaWeb.",
};

export const CREDITS = [
  {
    work: "“Tim Mckee - Boy Wizard”",
    author: "elbertwithane",
    href: "https://skfb.ly/6YATu",
    licence: "CC BY 4.0",
    licenceHref: "https://creativecommons.org/licenses/by/4.0/",
    note: "3D model, redrawn here as 10,000 fireflies on the home page.",
  },
  {
    work: "“Stylized wizard hat”",
    author: "Enkarra",
    href: "https://skfb.ly/ozxOQ",
    licence: "CC BY 4.0",
    licenceHref: "https://creativecommons.org/licenses/by/4.0/",
    note: "3D model, redrawn as fireflies on the About page.",
  },
  {
    work: "“Wizard Staff”",
    author: "Toymancer Studio",
    href: "https://skfb.ly/6QYZw",
    licence: "CC BY 4.0",
    licenceHref: "https://creativecommons.org/licenses/by/4.0/",
    note: "3D model, redrawn as fireflies on the Projects page.",
  },
  {
    work: "Forest ambience",
    author: "Shiden Beats Music",
    href: "https://pixabay.com/users/shidenbeatsmusic-25676252/",
    licence: "Pixabay Content License",
    licenceHref: "https://pixabay.com/service/license-summary/",
    note: "Background music.",
  },
  {
    work: "Painted forest backgrounds and original concept",
    author: "CodeBucks, Next.js Creative Portfolio",
    href: "https://devdreaming.com",
    licence: "MIT License",
    licenceHref: "#codebucks-licence",
    note: "Illustrations made with Playground AI. Licence text below.",
  },
  {
    work: "Interface icons",
    author: "Lucide",
    href: "https://lucide.dev",
    licence: "ISC License",
    licenceHref: "https://lucide.dev/license",
    note: "Home, menu and sound icons.",
  },
];

/** Verbatim LICENSE of codebucks27/Next.js-Creative-Portfolio-Website (MIT requires it to ship with the copies). */
export const CODEBUCKS_LICENCE = `MIT License

Copyright (c) 2024-present CODEBUCKS.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
