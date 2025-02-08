import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Chocolate Chip", price: "$2.50", image: "/placeholder.svg" },
  { name: "Oatmeal Raisin", price: "$2.25", image: "/placeholder.svg" },
  { name: "Double Chocolate", price: "$2.75", image: "/placeholder.svg" },
  { name: "Sugar Cookie", price: "$2.00", image: "/placeholder.svg" },
]

const Products = () => {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Our Cookies</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Image
                alt={product.name}
                className="object-cover w-full h-60"
                height="300"
                src={product.image || "/placeholder.svg"}
                width="400"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
                <Button className="mt-4 w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

