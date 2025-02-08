import Image from "next/image"

const testimonials = [
  { name: "Alice Johnson", comment: "The best cookies I've ever tasted!", image: "/placeholder.svg" },
  {
    name: "Bob Smith",
    comment: "Sweet Delights never disappoints. Always fresh and delicious.",
    image: "/placeholder.svg",
  },
  {
    name: "Carol Davis",
    comment: "I love the variety of flavors. There's something for everyone.",
    image: "/placeholder.svg",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                alt={testimonial.name}
                className="rounded-full"
                height="100"
                src={testimonial.image || "/placeholder.svg"}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <blockquote className="mt-4">"{testimonial.comment}"</blockquote>
              <cite className="mt-2 font-semibold">- {testimonial.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

