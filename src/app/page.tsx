import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Products from "@/app/components/products"
import Testimonials from "@/app/components/testimonials"
import Location from "@/app/components/location"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}

