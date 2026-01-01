import { ItemLayout } from './ItemLayout'

/**
 * AboutDetails component - grid of stat cards and info
 * Features viewport-triggered animations via ItemLayout
 */
export function AboutDetails() {
  return (
    <section className="about-section">
      <div className="about-grid">
        {/* Main bio card */}
        <ItemLayout className="about-card-bio">
          <div className="about-bio-content">
            <h2 className="text-2xl text-accent">Architect of Enchantment</h2>
            <p className="text-sm text-foreground">
              My journey in web development is powered by an array of mystical
              tools and languages, with JavaScript casting the core of my
              enchantments. I wield frameworks like React.js and Next.js with
              precision, crafting seamless portals (websites) that connect realms
              (users) across the digital universe. The ancient arts of the
              Jamstack empower me to create fast, secure, and dynamic experiences,
              while my design skills ensure every creation is not only functional
              but visually captivating.
            </p>
          </div>
        </ItemLayout>

        {/* Stats cards */}
        <ItemLayout className="about-card-stat">
          <p className="about-stat">
            25+ <sub className="about-stat-label">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="about-card-stat">
          <p className="about-stat">
            4+ <sub className="about-stat-label">years of experience</sub>
          </p>
        </ItemLayout>

        {/* GitHub top languages */}
        <ItemLayout className="about-card-github-langs">
          <img
            className="about-github-img"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=CharlesBourgworX&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub stats */}
        <ItemLayout className="about-card-github-stats">
          <img
            className="about-github-img"
            src="https://github-readme-stats.vercel.app/api?username=CharlesBourgworX&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skills icons */}
        <ItemLayout className="about-card-skills">
          <img
            className="about-skills-img"
            src="https://skillicons.dev/icons?i=react,ts,nextjs,tailwind,threejs,nodejs,postgres,supabase,docker,git,github,vscode,figma,linux"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  )
}
