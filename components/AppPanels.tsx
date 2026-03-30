type Project = {
  name: string;
  href: string;
  accent: "pizza" | "fairdient";
};

export function AppPanels({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="app-panels">
      {projects.map((project) => (
        <a
          key={project.name}
          className={`app-panel app-panel--${project.accent}`}
          href={project.href}
          aria-label={project.name}
        >
          <div className="app-panel__surface" aria-hidden="true">
            <span className="app-panel__halo app-panel__halo--one" />
            <span className="app-panel__halo app-panel__halo--two" />
            <span className="app-panel__mesh" />
          </div>

          <div className="app-panel__name">{project.name}</div>
        </a>
      ))}
    </div>
  );
}
