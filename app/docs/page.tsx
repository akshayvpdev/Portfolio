"use client";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="bg-default-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Documentation & Guides</h2>
        <p className="text-default-700 mb-4">
          Welcome to my documentation section. Here you'll find comprehensive guides, tutorials, and references for various technologies and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Getting Started */}
        <div className="bg-default-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Getting Started</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Installation Guide</h4>
                <p className="text-sm text-default-600">Step-by-step setup instructions</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Quick Start Tutorial</h4>
                <p className="text-sm text-default-600">Build your first application</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Basic Concepts</h4>
                <p className="text-sm text-default-600">Core principles and fundamentals</p>
              </a>
            </li>
          </ul>
        </div>

        {/* API Reference */}
        <div className="bg-default-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">API Reference</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">REST API</h4>
                <p className="text-sm text-default-600">Complete API documentation</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">GraphQL Schema</h4>
                <p className="text-sm text-default-600">Query and mutation references</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">WebSocket Events</h4>
                <p className="text-sm text-default-600">Real-time communication guide</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Examples */}
        <div className="bg-default-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Examples</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Authentication</h4>
                <p className="text-sm text-default-600">OAuth and JWT implementation</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">File Upload</h4>
                <p className="text-sm text-default-600">Handling file uploads securely</p>
              </a>
            </li>
          </ul>
        </div>

        {/* Best Practices */}
        <div className="bg-default-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Best Practices</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Security Guidelines</h4>
                <p className="text-sm text-default-600">Securing your application</p>
              </a>
            </li>
            <li className="p-3 bg-default-100 rounded hover:bg-primary/10 transition-colors">
              <a href="#" className="block">
                <h4 className="font-medium mb-1">Performance Tips</h4>
                <p className="text-sm text-default-600">Optimization techniques</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
