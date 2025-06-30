"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, Filter, Grid, List } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const products = [
  {
    id: 1,
    name: "Modern Sectional Sofa",
    price: 1299.99,
    originalPrice: 1599.99,
    category: "living-room",
    brand: "ComfortPlus",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    colors: ["Gray", "Navy", "Beige"],
    material: "Fabric",
  },
  {
    id: 2,
    name: "Oak Dining Table",
    price: 899.99,
    category: "dining-room",
    brand: "WoodCraft",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    colors: ["Natural Oak", "Dark Oak"],
    material: "Wood",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 449.99,
    category: "office",
    brand: "ErgoMax",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    colors: ["Black", "White", "Gray"],
    material: "Mesh",
  },
  {
    id: 4,
    name: "King Size Bed Frame",
    price: 699.99,
    category: "bedroom",
    brand: "SleepWell",
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=400",
    inStock: false,
    colors: ["White", "Black", "Walnut"],
    material: "Wood",
  },
  {
    id: 5,
    name: "Coffee Table Set",
    price: 299.99,
    category: "living-room",
    brand: "ModernHome",
    rating: 4.5,
    reviews: 92,
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    colors: ["Glass", "Wood"],
    material: "Glass/Wood",
  },
  {
    id: 6,
    name: "Bookshelf Unit",
    price: 199.99,
    category: "office",
    brand: "StoragePro",
    rating: 4.4,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    colors: ["White", "Black", "Oak"],
    material: "Wood",
  },
]

const categories = [
  { id: "living-room", name: "Living Room", count: 2 },
  { id: "bedroom", name: "Bedroom", count: 1 },
  { id: "dining-room", name: "Dining Room", count: 1 },
  { id: "office", name: "Office", count: 2 },
]

const brands = [
  { id: "comfortplus", name: "ComfortPlus", count: 1 },
  { id: "woodcraft", name: "WoodCraft", count: 1 },
  { id: "ergomax", name: "ErgoMax", count: 1 },
  { id: "sleepwell", name: "SleepWell", count: 1 },
  { id: "modernhome", name: "ModernHome", count: 1 },
  { id: "storagepro", name: "StoragePro", count: 1 },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : [])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
          return false
        }
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand.toLowerCase().replace(/\s+/g, ""))) {
          return false
        }
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false
        }
        if (showInStockOnly && !product.inStock) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "newest":
            return b.id - a.id
          default:
            return 0
        }
      })
  }, [selectedCategories, selectedBrands, priceRange, sortBy, showInStockOnly])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer">
                {category.name} ({category.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={brand.id}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
              />
              <Label htmlFor={brand.id} className="text-sm font-normal cursor-pointer">
                {brand.name} ({brand.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={2000} min={0} step={50} className="mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* In Stock Only */}
      <div className="flex items-center space-x-2">
        <Checkbox id="in-stock" checked={showInStockOnly} onCheckedChange={setShowInStockOnly} />
        <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
          In Stock Only
        </Label>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <FilterSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {categoryParam ? categories.find((c) => c.id === categoryParam)?.name || "Products" : "All Products"}
              </h1>
              <p className="text-muted-foreground">{filteredProducts.length} products found</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>

              {/* View Mode */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className={viewMode === "grid" ? "p-0" : "p-4"}>
                    <div className={viewMode === "grid" ? "" : "flex gap-4"}>
                      <div
                        className={`relative overflow-hidden ${viewMode === "grid" ? "rounded-t-lg" : "w-48 h-32 rounded-lg flex-shrink-0"}`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === "grid" ? "w-full h-64" : "w-full h-full"
                          }`}
                        />
                        {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                        {!product.inStock && <Badge className="absolute top-2 right-2 bg-gray-500">Out of Stock</Badge>}
                      </div>

                      <div className={viewMode === "grid" ? "p-4" : "flex-1"}>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>

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
                          <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {product.colors.slice(0, 3).map((color) => (
                            <Badge key={color} variant="secondary" className="text-xs">
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedBrands([])
                  setPriceRange([0, 2000])
                  setShowInStockOnly(false)
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
