import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const installCommand = "Redefining the Modern Masculine Aesthetic";
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
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50"
            alt=""
          />
          <img
            className="size-7 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50"
            alt=""
          />
        </div>
        <p className="pl-3 pr-4 text-slate-600 text-sm">
          Trusted by 1M+ modern men worldwide
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-6 bg-gradient-to-r from-slate-900 to-slate-500 text-transparent bg-clip-text">
        Premium Outdoor Apparel for the{" "}
        <span className="bg-gradient-to-b from-[#5F7D8C] to-[#3E5E6B] bg-clip-text text-transparent">
          Man Who Leads
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 text-center max-w-2xl mt-4 px-2 leading-relaxed">
        Trend Setter is the premier menswear destination within the Echo Futur group, 
        dedicated to the man who demands a fusion of high-street fashion and outdoor performance.
      </p>

      {/* CTA */}
      <button className="flex items-center gap-2 bg-[#5F7D8C] hover:bg-[#4E6A78] text-white px-8 py-3 mt-8 rounded-full transition shadow-lg shadow-slate-200">
        <span>Define Your Style</span>
        <ArrowRightIcon className="size-5" />
      </button>

      {/* Copy box */}
      <div className="bg-gradient-to-b from-[#5F7D8C]/40 to-slate-300/40 p-px rounded-lg mt-8">
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-3 text-slate-600">
          <span className="font-medium">{installCommand}</span>
          <button 
            onClick={handleCopy} 
            className="ml-2 p-1 hover:bg-slate-100 rounded transition"
            title="Copy Brand Mantra"
          >
            {isCopied ? (
              <CheckIcon className="size-4 text-green-600" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Brands */}
      <p className="py-6 text-slate-500 mt-14 text-sm tracking-widest uppercase">
        A Specialized Vertical of the Echo Futur Group
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full mx-auto py-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand"
            className="h-7 w-auto opacity-40 grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
