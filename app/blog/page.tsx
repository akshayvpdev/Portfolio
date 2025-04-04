"use client";

import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-6">
        {/* Featured Post */}
        <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-primary/10"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Featured</span>
              <span className="text-default-600">March 15, 2025</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Building Scalable Web Applications with Next.js</h2>
            <p className="text-default-700 mb-4">
              Learn how to build and deploy enterprise-grade applications using Next.js, React Server Components, and modern deployment strategies.
            </p>
            <a href="#" className="text-primary hover:underline">Read More →</a>
          </div>
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Post 1 */}
          <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <span className="text-default-600 text-sm">February 28, 2025</span>
              <h3 className="text-xl font-bold text-primary my-3">Understanding TypeScript Generics</h3>
              <p className="text-default-700 mb-4">
                A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Programming</span>
              </div>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <span className="text-default-600 text-sm">February 15, 2025</span>
              <h3 className="text-xl font-bold text-primary my-3">Modern CSS Techniques</h3>
              <p className="text-default-700 mb-4">
                Exploring the latest CSS features and how they're changing the way we style web applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Web Design</span>
              </div>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <span className="text-default-600 text-sm">January 30, 2025</span>
              <h3 className="text-xl font-bold text-primary my-3">React Performance Optimization</h3>
              <p className="text-default-700 mb-4">
                Tips and tricks for optimizing React applications for better performance and user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Performance</span>
              </div>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>

          {/* Post 4 */}
          <div className="bg-default-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <span className="text-default-600 text-sm">January 15, 2025</span>
              <h3 className="text-xl font-bold text-primary my-3">Getting Started with Web3</h3>
              <p className="text-default-700 mb-4">
                An introduction to Web3 development and building decentralized applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Web3</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Blockchain</span>
              </div>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
