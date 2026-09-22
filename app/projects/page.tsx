import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { projects } from "./data";

export const metadata: Metadata = {
  title: "Selected Work | Toothaker",
  description: "Selected land use, development, public-private partnership, procurement and brand activation work by Toothaker.",
};

export default function ProjectsPage() {
  return (
    <main className="work-index">
      <header className="inner-header">
        <Link className="brand" href="/" aria-label="Toothaker home">
          <span className="brand-mark">T</span>
          <span className="brand-name">Toothaker</span>
        </Link>
        <nav aria-label="Project navigation">
          <Link href="/#expertise">Expertise</Link>
          <Link href="/#stephanie">Team</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="work-index-hero">
        <p className="section-tag">Selected work · 01—{projects.length}</p>
        <h1>Places, institutions and experiences shaped to move forward.</h1>
        <p>Explore the strategy behind a selection of Toothaker&apos;s development, civic, sporting and brand-activation work.</p>
      </section>

      <section className="work-grid" aria-label="Selected projects">
        {projects.map((project) => (
          <Link className="work-card" href={`/projects/${project.slug}`} key={project.slug}>
            <div className="work-card-media"><img src={project.image} alt={`${project.name} project`} loading="lazy" decoding="async" /></div>
            <div className="work-card-copy">
              <div><span>{project.number}</span><span>{project.location}</span></div>
              <h2>{project.name}</h2>
              <p>{project.statement}</p>
              <span className="work-card-link">View project <ArrowUpRight /></span>
            </div>
          </Link>
        ))}
      </section>

      <section className="work-index-cta">
        <p className="section-tag">Start a conversation</p>
        <h2>Have an ambitious project?</h2>
        <a href="mailto:stephanie@toothaker.org">stephanie@toothaker.org</a>
      </section>
    </main>
  );
}
