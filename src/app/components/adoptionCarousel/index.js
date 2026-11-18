const columns = [
  [
    { src: "/images/adoption/adoption1.webp", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption4.webp", alt: "Animal de la ferme disponible à l'adoption" },
  ],
  [
    { src: "/images/adoption/adoption3.webp", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption6.webp", alt: "Animal de la ferme disponible à l'adoption" },
  ],
  [
    { src: "/images/adoption/adoption5.webp", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption7.webp", alt: "Animal de la ferme disponible à l'adoption" },
  ],
];

export default function AdoptionCarousel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
      {columns.map((col, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {col.map((img, imageIndex) => (
            <div key={imageIndex}>
              <img
                className="h-auto max-w-full rounded-lg"
                loading="lazy"
                src={img.src}
                alt={img.alt}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
