import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(null);

  const data = [
    {
      question: "What sizes are available for your dresses?",
      answer:
        "Our dresses are available in a wide range of sizes. Each product page includes a detailed size guide to help you choose the perfect fit.",
    },
    {
      question: "Do you offer cash on delivery or online payment?",
      answer:
        "Yes, we support secure online payments as well as cash on delivery in selected locations.",
    },
    {
      question: "How long does delivery usually take?",
      answer:
        "Orders are typically delivered within 3–7 business days, depending on your location.",
    },
    {
      question: "Can I return or exchange a dress?",
      answer:
        "Yes, we offer easy returns and exchanges within 7 days of delivery, provided the item is unused and in original condition.",
    },
    {
      question: "Will the dress color look the same as the photos?",
      answer:
        "We use professional photography to ensure accurate colors, though slight variations may occur due to lighting or screen settings.",
    },
    {
      question: "How should I care for my dress?",
      answer:
        "Care instructions are included on each product page and label to help maintain fabric quality and color.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40 px-4">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before placing your order."
      />

      <div className="mx-auto mt-12 w-full max-w-xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-slate-200 bg-white"
          >
            <h3
              className="flex cursor-pointer items-start justify-between gap-4 py-4 font-medium text-[#3E5E6B]"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              {isOpen === index ? (
                <MinusIcon className="size-5 text-slate-500" />
              ) : (
                <PlusIcon className="size-5 text-slate-500" />
              )}
            </h3>

            <p
              className={`pb-4 text-sm text-slate-500 ${
                isOpen === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
