import Image from 'next/image'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Classic Loafer",
      price: "$165",
      image: "/images/product1.jpg"
    },
    {
      id: 2,
      name: "Comfortable Flat",
      price: "$145",
      image: "/images/product2.jpg"
    },
    {
      id: 3,
      name: "Everyday Sneaker",
      price: "$125",
      image: "/images/product3.jpg"
    },
    {
      id: 4,
      name: "Casual Slip-on",
      price: "$135",
      image: "/images/product4.jpg"
    }
  ]
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 bg-slate-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}