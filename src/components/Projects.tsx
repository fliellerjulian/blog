"use client";

import { Project } from "../types/project";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Openspot",
      description: "AI Native Video based talent platform",
      url: "https://heyopenspot.com/",
      repository: undefined,
      technologies: ["Python", "React", "Typescript", "MongoDB"],
      status: "active",
      openSource: false,
    },
    {
      id: "2",
      title: "Getaway direct",
      description:
        "Find the direct website for airbnb listings, to save on airbnb fees",
      url: "https://getaway.direct/",
      repository: "https://github.com/fliellerjulian/getawaydirect",
      technologies: ["Javascript", "Flaks", "Reverse Image Search"],
      status: "active",
      openSource: true,
    },
    {
      id: "3",
      title: "PinFold",
      description: "Clutter free chatgpt with pins and folders",
      url: "https://pinfold.me",
      technologies: ["JavaScript"],
      status: "deprecated",
      openSource: false,
    },
    {
      id: "4",
      title: "CarSpy",
      description: "Real-time car platform monitoring",
      url: "https://car-spy.com",
      repository: undefined,
      technologies: ["Python", "Flutter", "MongoDB"],
      status: "deprecated",
      openSource: false,
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-slate-900 font-bold text-xl tracking-tight">
              Projects
            </h2>
            <p className="text-slate-600 text-sm">
              Things I&apos;ve built and worked on.
            </p>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-semibold text-base hover:text-blue-600 transition-colors"
                      >
                        {project.title}
                      </a>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {project.status}
                        </span>
                        {project.openSource && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700">
                            open source
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map(
                        (tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="inline-flex px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      {project.repository && (
                        <>
                          <span>•</span>
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                          >
                            View Source
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <svg
                        className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
