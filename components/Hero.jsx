'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg']

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-4xl font-extrabold mb-4">ATL Technology</h1>
        <p className="mb-6 text-lg max-w-xl">
          Providing enterprise ICT solutions, cybersecurity, and systems integration across East Africa.
        </p>
        <div className="flex gap-3">
          <a href="#contact" className="px-4 py-2 rounded bg-sky-600 text-white">Get in touch</a>
          <a href="#services" className="px-4 py-2 rounded border border-white">Our services</a>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
