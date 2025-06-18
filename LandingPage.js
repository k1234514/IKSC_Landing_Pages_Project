import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="p-6 bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700">IKSC Academy</h1>
          <div className="space-x-4">
            <a href="#engineering" className="hover:text-blue-600">Engineering</a>
            <a href="#psychometric" className="hover:text-blue-600">Psychometric</a>
          </div>
        </nav>
      </header>

      {/* Engineering Page */}
      <section id="engineering" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Automotive Interior Design</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>
                Learn the essentials of Automotive Interior Design—ergonomics, materials, aesthetic trends, and component integration.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Process Flow</h3>
              <ol className="list-decimal list-inside">
                <li>Career Assessment Test</li>
                <li>Domain Knowledge (Interior systems, Ergonomics)</li>
                <li>Product Knowledge (Design tools, Industry standards)</li>
                <li>Academic Modules (CAD, CATIA, NX, etc.)</li>
                <li>Live Projects with Industry Mentors</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <iframe
            src="https://humanchat.net/your_engineering_bot_id"
            width="100%"
            height="400"
            title="Engineering Chatbot"
          ></iframe>
        </div>
      </section>

      {/* Psychometric Page */}
      <section id="psychometric" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Psychometric Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Who is this for?</h3>
              <p>
                This platform is ideal for:
              </p>
              <ul className="list-disc list-inside">
                <li>8th–12th Standard Students</li>
                <li>Graduates exploring options</li>
                <li>Professionals considering a career shift</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">What You’ll Learn</h3>
              <p>
                Deep understanding of psychometric tests including aptitude, personality, career interest assessments with reports.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <iframe
            src="https://humanchat.net/your_psychometric_bot_id"
            width="100%"
            height="400"
            title="Psychometric Chatbot"
          ></iframe>
        </div>
      </section>

      <footer className="p-4 text-center bg-white border-t mt-10">
        © 2025 IKSC Academy. All rights reserved.
      </footer>
    </div>
  );
}
