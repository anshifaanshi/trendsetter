import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const installCommand = "Shop the latest fashion collections";
  const [isCopied, setIsCopied] = useState(false);

  const logos = [
    "/assets/companies-logo/instagram.svg",
    "/assets/companies-logo/framer.svg",
    "/assets/companies-logo/microsoft.svg",
    "/assets/companies-logo/huawei.svg",
    "/assets/companies-logo/walmart.svg",
  ];

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(installCommand);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section className="flex flex-col items-center justify-center relative h-svh overflow-hidden">
      {/* Background */}
      <svg
        className="absolute inset-0 -z-10"
        width="1440"
        height="1018"
        viewBox="0 0 1440 1018"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <ellipse cx="271" cy="200" rx="271" ry="200" fill="#E8EEF3" />
        </g>
        <g filter="url(#b)">
          <ellipse
            cx="993"
            cy="451"
            rx="359"
            ry="265"
            fill="url(#c)"
            fillOpacity=".15"
          />
        </g>
        <defs>
          <filter
            id="a"
            x="-300"
            y="-300"
            width="1142"
            height="1000"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="150" />
          </filter>
          <filter
            id="b"
            x="300"
            y="-150"
            width="1300"
            height="1150"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="150" />
          </filter>
          <linearGradient id="c" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#5F7D8C" />
            <stop offset="0.5" stopColor="#7A9AAE" />
            <stop offset="1" stopColor="#B6C9D6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Community Badge */}
      <div className="flex items-center p-1.5 rounded-full border border-slate-200 bg-white/70">
        <div className="flex items-center -space-x-3">
          <img
            className="size-7 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50"
            alt=""
          />
          <img
            className="size-7 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50"
            alt=""
          />
          <img
            className="size-7 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50"
            alt=""
          />
        </div>
        <p className="pl-3 pr-4 text-slate-600 text-sm">
          Loved by 1M+ fashion lovers
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-2xl mt-6 bg-gradient-to-r from-slate-900 to-slate-500 text-transparent bg-clip-text">
        Discover Timeless Style with{" "}
        <span className="bg-gradient-to-b from-[#5F7D8C] to-[#3E5E6B] bg-clip-text text-transparent">
          SteelWear
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 text-center max-w-lg mt-4 px-2">
        Premium dresses crafted for elegance, comfort, and everyday confidence.
      </p>

      {/* CTA */}
      <button className="flex items-center gap-2 bg-[#5F7D8C] hover:bg-[#4E6A78] text-white px-8 py-3 mt-8 rounded-full transition">
        <span>Shop New Collection</span>
        <ArrowRightIcon className="size-5" />
      </button>

      {/* Copy box */}
      <div className="bg-gradient-to-b from-[#5F7D8C]/40 to-slate-300/40 p-px rounded-lg mt-8">
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-3 text-slate-600">
          <span>{installCommand}</span>
          <button onClick={handleCopy} className="ml-2">
            {isCopied ? (
              <CheckIcon className="size-4" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Brands */}
      <p className="py-6 text-slate-600 mt-14">
        Trusted by fashion-forward brands —
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full mx-auto py-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand"
            className="h-7 w-auto opacity-70"
          />
        ))}
      </div>
    </section>
  );
}
