import SectionTitle from "../components/section-title";

export default function OurLatestCreations() {
  const data = [
    {
      title: "Urban-Tech Outerwear",
      description:
        "Sleek, lightweight jackets and windbreakers that offer weather protection without sacrificing a tailored fit.",
      image: "https://i.postimg.cc/cHQbMg2n/20260110-111923.avif",
    },
    {
      title: "Modern Utility Wear",
      description:
        "Cargo trousers and joggers re-imagined with premium fabrics and tapered cuts for a sophisticated, rugged look.",
      image: "https://i.postimg.cc/JncpBwH2/20260110-111940.avif",
    },
    {
      title: "High-Performance Knits",
      description:
        "Breathable, moisture-wicking polos and sweaters that keep you comfortable from sunrise to sunset.",
      image: "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40 px-4">
      <SectionTitle
        title="Our Latest Creations"
        subtitle="Your wardrobe is built on the pillars of fit, fabric, and forward-thinking design."
      />

      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-80 hover:-translate-y-2 transition duration-300 group"
          >
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                className="object-cover w-full h-[420px] transition-transform duration-500 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
            </div>

            <h3 className="text-base font-semibold text-[#3E5E6B] mt-4 uppercase tracking-wide">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
