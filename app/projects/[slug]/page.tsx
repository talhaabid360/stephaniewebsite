import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "../../components/ArrowUpRight";
import { getProject, projects } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Toothaker`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="project-page">
      <header className="inner-header inner-header-overlay">
        <Link className="brand" href="/" aria-label="Toothaker home">
          <span className="brand-mark">T</span>
          <span className="brand-name">Toothaker</span>
        </Link>
        <nav aria-label="Project navigation">
          <Link href="/projects">All projects</Link>
          <Link href="/#expertise">Expertise</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="project-page-hero">
        <img src={project.image} alt={`${project.name} project`} fetchPriority="high" />
        <div className="project-page-shade" />
        <div className="project-page-heading">
          <div className="project-page-meta"><span>{project.number} / {projects.length}</span><span>{project.location}</span><span>{project.category}</span></div>
          <h1>{project.name}</h1>
          <p>{project.statement}</p>
        </div>
      </section>

      <section className="project-page-story">
        <div className="project-page-intro">
          <p className="section-tag">The assignment</p>
          <h2>{project.summary}</h2>
        </div>
        <div className="project-page-body">
          <p className="project-client"><span>Client</span>{project.client}</p>
          {project.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="project-services">
            <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
          </div>
        </div>
      </section>

      <figure className="project-page-image">
        <img src={project.detailImage} alt={`${project.name} detail`} loading="lazy" decoding="async" />
      </figure>

      <Link className="next-project" href={`/projects/${nextProject.slug}`}>
        <span>Next project · {nextProject.number}</span>
        <strong>{nextProject.name}</strong>
        <ArrowUpRight />
      </Link>
    </main>
  );
}
