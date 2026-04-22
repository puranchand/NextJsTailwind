import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Puran Chand</h1>
        <p className="text-lg mt-3 text-gray-600">
          Frontend Developer | ReactJS Specialist
        </p>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Frontend Developer with 6+ years of experience specializing in ReactJS,
          JavaScript, and responsive UI development. Passionate about building
          scalable web applications and delivering high-quality user experiences.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "ReactJS",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Bootstrap",
            "SCSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1 bg-gray-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Software Engineer - Galleri5 Technology Pvt. Ltd. (2021 - Present)</li>
          <li>• Software Developer - Recraft Relic (2019 - 2021)</li>
          <li>• Software Developer - Zestgeek Solutions (2018 - 2019)</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-5">Projects</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Galleri5 - Social Service Platform",
            "Dashboard SaaS App - Data Monitoring",
            "My Table Choice - Booking Platform",
            "Recraft Relic - E-commerce Platform",
          ].map((project) => (
            <div
              key={project}
              className="p-5 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              {project}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
          >
            Email
          </a>
          <a
            href="#"
            className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
