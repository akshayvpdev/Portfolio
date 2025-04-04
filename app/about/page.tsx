"use client";

import { title } from "@/components/primitives";

export default function About() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative space-y-12">
        {/* Professional Journey */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I specialize in building scalable and performant applications using modern technologies like React, Next.js, and Node.js.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I'm passionate about creating intuitive user experiences and writing clean, maintainable code that makes a difference.
            </p>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl group">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'Node.js', level: 85 },
                { name: 'AWS', level: 75 },
                { name: 'UI/UX', level: 80 },
              ].map((skill) => (
                <div key={skill.name} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education & Certifications
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-semibold text-white">Master's in Computer Science</h4>
                <p className="text-gray-400">Stanford University</p>
                <p className="text-sm text-gray-500">2018 - 2020</p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-semibold text-white">Bachelor's in Software Engineering</h4>
                <p className="text-gray-400">MIT</p>
                <p className="text-sm text-gray-500">2014 - 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Interests & Hobbies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🌟', name: 'Open Source', desc: 'Contributing to community' },
              { icon: '✍️', name: 'Tech Writing', desc: 'Sharing knowledge' },
              { icon: '👥', name: 'Mentoring', desc: 'Helping others grow' },
              { icon: '🎨', name: 'UI/UX Design', desc: 'Creating experiences' },
            ].map((interest) => (
              <div key={interest.name} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="text-3xl mb-2">{interest.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-1">{interest.name}</h4>
                <p className="text-sm text-gray-400">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
