import React from 'react'
import {
    CreditCardIcon,
    CurrencyDollarIcon,
    RectangleStackIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/solid";

// Tailwind‑styled, fully responsive section replicating the UI in your screenshot
// ‑ Add `@heroicons/react` to your project →  npm i @heroicons/react
// ‑ Tailwind CSS should already be configured in your CRA / Vite / Next project

const tabs = [
    {
        id: 1,
        label: "Billing",
        icon: CreditCardIcon,
        color: "bg-pink-300",
    },
    {
        id: 2,
        label: "Charging",
        icon: CurrencyDollarIcon,
        color: "bg-yellow-300",
    },
    {
        id: 3,
        label: "Catalog",
        icon: RectangleStackIcon,
        color: "bg-lime-300",
    },
    {
        id: 4,
        label: "Events",
        icon: CalendarDaysIcon,
        color: "bg-sky-300",
    },
];


const NextPage1 = () => {
    return (
        <section className="bg-[#7b8f9d] py-16 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline */}
                <h2 className="text-center text-gray-100 font-semibold text-4xl sm:text-6xl drop-shadow-sm">
                    Unparalleled
                </h2>
                <h3 className="text-center font-extrabold text-gray-900 text-2xl sm:text-4xl mt-2">
                    BSS/OSS Capabilities
                </h3>

                {/* Tab bar */}
                <div className="mt-10 flex gap-4 overflow-x-auto sm:justify-center pb-2 scrollbar-hide">
                    {tabs.map(({ id, label, icon: Icon, color }) => (
                        <button
                            key={id}
                            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 hover:bg-white/30 transition border border-white/30 backdrop-blur-md shrink-0"
                        >
                            <span className={`p-2 rounded-full ${color}`}>
                                <Icon className="w-4 h-4 text-gray-900" />
                            </span>
                            <span className="uppercase tracking-wide text-xs font-medium whitespace-nowrap">
                                {label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Product card */}
                <div className="mt-8 bg-white/10 rounded-3xl p-8 backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Text column */}
                        <div>
                            <h4 className="text-xl font-bold mb-4">Product Catalog</h4>
                            <p className="text-gray-800 max-w-sm leading-relaxed">
                                Intuitive tools that empower customers to manage their accounts with ease,
                                freeing up your team.
                            </p>
                        </div>

                        {/* Image / mockup column */}
                        <div className="bg-white/40 rounded-2xl aspect-[4/3] flex items-center justify-center">
                            <span className="text-sm text-gray-600">Product mock‑up</span>
                        </div>
                    </div>

                    {/* Bottom pill nav */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Pill>Products +</Pill>
                        <Pill>Solutions +</Pill>
                        <Pill>Resources +</Pill>
                        <Pill>Services</Pill>
                        <Pill accent>Book a Meeting</Pill>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Pill({ children, accent = false }) {
    return (
        <button
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-1 transition
        ${accent ? "bg-sky-500 text-white hover:bg-sky-600" : "bg-gray-900 text-gray-100 hover:bg-gray-800"}
      `}
        >
            {accent ? null : <span className="inline-block w-2 h-2 rounded-full bg-gray-100" />} {children}
        </button>
    );

}

export default NextPage1
