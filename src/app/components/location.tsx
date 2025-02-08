import { MapPin, Clock } from "lucide-react"

const Location = () => {
  return (
    <section id="location" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Visit Us</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2" />
              123 Cookie Lane, Sweet City, SC 12345
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Opening Hours</h3>
            <p className="flex items-center mb-2">
              <Clock className="mr-2" />
              Monday - Friday: 9am - 8pm
            </p>
            <p className="flex items-center mb-2">
              <Clock className="mr-2" />
              Saturday - Sunday: 10am - 6pm
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644982078151!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

