"use client";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-primary/10"></div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-primary">E-commerce Platform</h3>
            <p className="text-default-700">
              A full-stack e-commerce solution with real-time inventory management and payment processing.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-primary/10"></div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-primary">AI Task Manager</h3>
            <p className="text-default-700">
              Smart task management app with AI-powered prioritization and time estimation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">TensorFlow</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-primary/10"></div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-primary">Social Media Analytics</h3>
            <p className="text-default-700">
              Real-time social media analytics dashboard with sentiment analysis and trend prediction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">FastAPI</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-default-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-primary mb-6">Open Source Contributions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-default-100 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">React Component Library</h4>
            <p className="text-default-700 mb-2">Contributed 15+ reusable components and improved documentation.</p>
            <a href="#" className="text-primary hover:underline">View on GitHub →</a>
          </div>
          <div className="p-4 bg-default-100 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">TypeScript Utility Package</h4>
            <p className="text-default-700 mb-2">Created a collection of TypeScript utilities with 100% test coverage.</p>
            <a href="#" className="text-primary hover:underline">View on GitHub →</a>
          </div>
        </div>
      </div>
    </div>
  );
} 