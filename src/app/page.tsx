import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preset from "@/components/Preset";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <Preset>
          <h1 className="text-5xl font-bold mb-4">Road Safety & Traffic Intelligence</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Empowering citizens and authorities to report, monitor, and resolve road issues instantly.
          </p>
          <Link href={'/signup'}><button className="mt-7 bg-black text-white border border-black px-6 py-3 rounded-3xl font-semibold hover:bg-white hover:text-black duration-250 cursor-pointer transition">
            Get Started
          </button></Link>
        </Preset>
      </section>

      {/* Features */}
            <section className="space-y-24 py-12 px-6 max-w-6xl mx-auto">
              <Preset>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Instant Road Issue Reporting</h2>
                    <p className="text-gray-600">
                      Spot a pothole, broken signal, or road hazard? Instantly report it with GPS-tagged accuracy. Your reports help everyone drive safer and keep the city moving.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 text-base">
                      <li>Easy-to-use reporting tool for all citizens</li>
                      <li>Attach photos and precise locations</li>
                      <li>Track status of your reports in real time</li>
                    </ul>
                  </div>
                  <img src="image1.png" alt="Report Feature" className="rounded shadow-lg" />
                </div>
              </Preset>
      
              <Preset delay={0.4}>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <img src="image2.png" alt="Dashboard Feature" className="rounded shadow-lg" />
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Authority Dashboard & Analytics</h2>
                    <p className="text-gray-600">
                      City officials and road authorities get a powerful dashboard to monitor, prioritize, and resolve reported issues efficiently—making urban management proactive, not reactive.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 text-base">
                      <li>Live map of all reported issues</li>
                      <li>Prioritize by severity, location, and upvotes</li>
                      <li>Track resolution progress and analytics</li>
                    </ul>
                  </div>
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
        <h2 className="text-3xl font-bold mb-4">Join the RoadWatch Movement</h2>
        <p className="text-gray-700 mb-8">
          Help make your city safer and smarter. Report issues, plan better routes, and empower your community with RoadWatch.
        </p>
        <Link href={'/signup'}><button className="bg-black text-white border border-black px-6 py-3 rounded font-semibold hover:bg-white hover:text-black duration-250 cursor-pointer transition">
          Get Started
        </button></Link>
      </section>

      <Footer />
    </main>
  );
}