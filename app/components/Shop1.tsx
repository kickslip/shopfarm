import Image from "next/image";

export default function Shop1() {
    return (
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          {/* Left Panel */}
          <div className="relative h-full">
            <Image
              src="/images/clogs.jpg"
              alt="Clogs/shoes"
              fill
              className="object-cover"
              priority
            />
           
          </div>
          {/* Right Panel */}
          <div className="relative h-full">
            <Image
              src="/images/redshoes.jpg"
              alt="red shoes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    )
  }