import { ItemLayout } from "./ItemLayout";

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
              Freelance web developer based in Dasmariñas, Philippines.
              <br />
              <br />
              Self-taught and passionate about modern web applications, I
              recently graduated from OpenClassrooms as a Web Integrator.
              <br />
              <br />
              My journey combines technical expertise with project management
              experience from running my own transportation business.
              <br />
              <br />I craft seamless digital experiences using React,
              TypeScript, Next.js, and Node.js, always striving to create fast,
              accessible, and visually captivating web applications.
            </p>
          </div>
        </ItemLayout>

        {/* Stats cards */}
        <ItemLayout className="about-card-stat">
          <p className="about-stat">
            33+ <sub className="about-stat-label">repositories</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="about-card-stat">
          <p className="about-stat">
            3+ <sub className="about-stat-label">years of coding</sub>
          </p>
        </ItemLayout>

        {/* GitHub top languages */}
        <ItemLayout className="about-card-github-langs">
          <img
            className="about-github-img"
            src={`${import.meta.env.VITE_GITHUB_STATS_URL || "https://github-readme-stats.vercel.app"}/api/top-langs?username=Karlito8888&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub stats */}
        <ItemLayout className="about-card-github-stats">
          <img
            className="about-github-img"
            src={`${import.meta.env.VITE_GITHUB_STATS_URL || "https://github-readme-stats.vercel.app"}/api?username=Karlito8888&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skills icons */}
        <ItemLayout className="about-card-skills">
          <img
            className="about-skills-img"
            src="https://skillicons.dev/icons?i=react,nextjs,vite,redux,nodejs,express,mongodb,supabase,python,tailwind,linux&perline=11"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
}
