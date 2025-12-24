import SectionTitle from "../components/section-title";

export default function OurLatestCreations() {
  const data = [
    {
      title: "Autumn Elegance Dress",
      description:
        "Warm earthy shades blended with flowing fabrics, perfect for cozy evenings and seasonal styling.",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Winter Luxe Collection",
      description:
        "Soft neutrals and structured silhouettes designed for modern elegance and cold-weather comfort.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Spring Bloom Edit",
      description:
        "Lightweight dresses with pastel tones and floral details that bring freshness and effortless charm.",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40 px-4">
      <SectionTitle
        title="Our Latest Dresses"
        subtitle="Explore our newest fashion arrivals — thoughtfully designed for style, comfort, and confidence."
      />

      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-80 hover:-translate-y-1 transition duration-300"
          >
            <img
              className="rounded-xl shadow-sm object-cover w-full h-[420px]"
              src={item.image}
              alt={item.title}
            />

            <h3 className="text-base font-semibold text-[#3E5E6B] mt-4">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
