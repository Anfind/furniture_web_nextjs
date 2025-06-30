import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Modern Sectional Sofa",
    price: 1299.99,
    originalPrice: 1599.99,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Oak Dining Table",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 449.99,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "King Size Bed Frame",
    price: 699.99,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 78,
  },
]

const categories = [
  { name: "Living Room", image: "/placeholder.svg?height=200&width=300", count: 45 },
  { name: "Bedroom", image: "/placeholder.svg?height=200&width=300", count: 32 },
  { name: "Dining Room", image: "/placeholder.svg?height=200&width=300", count: 28 },
  { name: "Office", image: "/placeholder.svg?height=200&width=300", count: 19 },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Transform Your Space with Premium Furniture</h1>
              <p className="text-xl mb-8 text-slate-300">
                Discover our curated collection of modern, comfortable, and stylish furniture pieces that make your
                house a home.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern living room"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-slate-600">Free shipping on orders over $500</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-slate-600">30-day money back guarantee</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate-600">Expert customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Find the perfect furniture for every room in your home</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/products?category=${category.name.toLowerCase().replace(" ", "-")}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-slate-600">{category.count} products</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Handpicked favorites that our customers love most</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                          Sale
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-slate-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest furniture trends, exclusive deals, and design inspiration.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-slate-900" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
