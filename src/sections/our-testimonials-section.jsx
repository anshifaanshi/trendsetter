import SectionTitle from "../components/section-title";
import { StarIcon } from "lucide-react";

export default function OurTestimonialSection() {
  const data = [
    {
      review:
        "The fabric quality is amazing and the fit is perfect. I’ve never felt more confident wearing a dress!",
      name: "Emily Watson",
      about: "Fashion Enthusiast",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "Elegant designs and beautiful stitching. Every piece feels premium and thoughtfully crafted.",
      name: "Sophia Martinez",
      about: "Style Blogger",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "I ordered for a special occasion and received so many compliments. Absolutely love this brand!",
      name: "Aisha Khan",
      about: "Customer",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "The dresses are stylish yet comfortable. Perfect balance between fashion and everyday wear.",
      name: "Isabella Kim",
      about: "Working Professional",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Fast delivery, premium packaging, and stunning designs. This has become my go-to dress store.",
      name: "Liam Johnson",
      about: "Verified Buyer",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review:
        "Every collection feels fresh and elegant. You can really see the attention to detail.",
      name: "Ava Patel",
      about: "Fashion Stylist",
      rating: 5,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40 px-4">
      <SectionTitle
        title="What Our Customers Say"
        subtitle="Real stories from customers who love our dresses for their quality, comfort, and timeless style."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-88 space-y-4 rounded-md border border-slate-200 bg-white p-5 text-slate-500 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(item.rating)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="size-4 fill-[#5F7D8C] text-[#5F7D8C]"
                />
              ))}
            </div>

            {/* Review */}
            <p className="line-clamp-3">“{item.review}”</p>

            {/* User */}
            <div className="flex items-center gap-2 pt-3">
              <img
                className="size-10 rounded-full object-cover"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="font-medium text-[#3E5E6B]">{item.name}</p>
                <p className="text-slate-500 text-xs">{item.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
