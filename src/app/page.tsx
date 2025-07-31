import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preset from "@/components/Preset";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <Preset>
          <h1 className="text-5xl font-bold mb-4">RoadWatch</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Real-time traffic issue reporting and route optimization powered by AI.
          </p>
        <button className="mt-7 bg-black text-white border border-black px-6 py-3 rounded-3xl font-semibold hover:bg-white hover:text-black duration-250 cursor-pointer transition">
        Get Started
        </button>
        </Preset>
      </section>

      {/* Features */}
      <section className="space-y-24 py-12 px-6 max-w-6xl mx-auto">
        <Preset>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Report Traffic Issues</h2>
              <p className="text-gray-600">
                Instantly report potholes, broken signals, and more using our GPS-tagged reporting tool.
              </p>
            </div>
            <img src="https://placehold.co/600x400/" alt="Report Feature" className="rounded" />
          </div>
        </Preset>

        <Preset delay={0.2}>
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <img src="https://placehold.co/600x400/" alt="Route Feature" className="rounded" />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Smart Route Optimization</h2>
              <p className="text-gray-600">
                Choose routes by shortest time or distance — dynamically adapted using real-time reports.
              </p>
            </div>
          </div>
        </Preset>

        <Preset delay={0.4}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Real-Time Authority Dashboard</h2>
              <p className="text-gray-600">
                Empower city officials with a dashboard that prioritizes reports and streamlines responses.
              </p>
            </div>
            <img src="https://placehold.co/600x400/" alt="Dashboard Feature" className="rounded" />
          </div>
        </Preset>
      </section>

      {/* Testimonials */}
    <section className="bg-black text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <Testimonials />
    </div>
    </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Take Control of Your Commute</h2>
        <p className="text-gray-700 mb-8">Join thousands improving road safety and navigation with RoadWatch.</p>
        <button className="bg-black text-white border border-black px-6 py-3 rounded font-semibold hover:bg-white hover:text-black duration-250 cursor-pointer transition">
          Get Started
        </button>
      </section>

      <Footer />
    </main>
  );
}
