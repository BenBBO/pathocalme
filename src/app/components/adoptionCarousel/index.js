const columns = [
  [
    { src: "/images/adoption/adoption1.jpg", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption5.jpg", alt: "Animal de la ferme disponible à l'adoption" },
  ],
  [
    { src: "/images/adoption/adoption2.jpg", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption6.jpg", alt: "Animal de la ferme disponible à l'adoption" },
  ],
  [
    { src: "/images/adoption/adoption3.jpg", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption7.jpg", alt: "Animal de la ferme disponible à l'adoption" },
  ],
  [
    { src: "/images/adoption/adoption4.jpg", alt: "Animal de la ferme disponible à l'adoption" },
    { src: "/images/adoption/adoption8.jpg", alt: "Animal de la ferme disponible à l'adoption" },
  ],
];

export default function AdoptionCarousel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
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
