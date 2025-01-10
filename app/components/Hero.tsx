// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/images/im0.jpg"
          alt="New Year New Mules Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-light mb-8 leading-tight text-white">
            New Year.<br />New Mules.
          </h1>
          <Link
            href="/collections/new-loafers"
            className="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            SHOP NEW LOAFER MULES
          </Link>
        </div>
      </div>
    </section>
  )
}