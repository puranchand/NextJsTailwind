import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="hero"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Puran Chand</h1>
          <p className="text-lg mt-3">
            Frontend Developer | ReactJS Specialist
          </p>
        </div>
      </section>

      <div className="px-6 py-10">
        {/* About */}
        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="profile"
              className="rounded-2xl shadow-md"
            />
            <p className="text-gray-700 leading-relaxed">
              Frontend Developer with 7+ years of experience specializing in
              ReactJS, JavaScript, and responsive UI development. Passionate
              about building scalable web applications and delivering
              high-quality user experiences.
            </p>
          </div>
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
          <li>• Software Developer - Freelencer (2024 - 2026)</li>
          <li>• Software Engineer - Galleri5 Technology Pvt. Ltd. (2021 - 2024)</li>
          <li>• Software Developer - Recraft Relic (2019 - 2021)</li>
          <li>• Software Developer - Zestgeek Solutions (2018 - 2019)</li>
        </ul>
      </section>

        {/* Projects */}
        <section className="max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-5">Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Galleri5 - Social Service Platform",
                img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
              },
              {
                title: "Dashboard SaaS App",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
              },
              {
                title: "My Table Choice",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              },
              {
                title: "Recraft Relic E-commerce",
                img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">{project.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:pchand757@gmail.com"
              className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
            >
              Email
            </a>
            <a
              href="https://github.com/puranchand"
              target="_blank"
              className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/puran-chand-130670124/"
              target="_blank"
              className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
