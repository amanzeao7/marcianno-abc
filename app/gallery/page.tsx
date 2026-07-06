import { Metadata } from 'next'
import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'
import { galleryImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Gallery | Marcianno ABC',
  description: 'Photos from Marcianno Bexley & District ABC — training sessions, fight nights, and our community.',
}

export default function GalleryPage() {
  return (
    <main id="main-content">
      <section
        className="relative py-24 px-[5%] bg-[var(--color-bg2)] border-b border-[var(--color-border)]"
        aria-label="Gallery page hero"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3">
            INSIDE MARCIANNO ABC
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none">
            Gallery
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4 mb-6" aria-hidden="true" />
          <p className="font-body text-[var(--color-text2)] text-lg max-w-xl">
            Training sessions, fight nights, champions, and community.
          </p>
        </div>
      </section>

      <section className="py-20 px-[5%] bg-[var(--color-bg)]" aria-labelledby="gallery-heading">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="PHOTOS" title="The Club in Action" id="gallery-heading" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] mt-10">
            {galleryImages.map((image, i) => (
              <figure key={i} className="relative group overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[rgba(13,13,13,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {image.caption && (
                  <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[rgba(13,13,13,0.85)]">
                    <p className="font-body text-sm text-[var(--color-text2)]">{image.caption}</p>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
