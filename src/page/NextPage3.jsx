import { useState } from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, ReferenceLine, LabelList
} from "recharts";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const barData = [
    { name: "A", refurb: 549, build: 875 },
    { name: "B", refurb: 278, build: 617 },
    { name: "C", refurb: 36, build: 506 },
    { name: "D", refurb: 185, build: 550 },
    { name: "E", refurb: 191, build: 881 },
    { name: "F", refurb: 122, build: 539 },
    { name: "G", refurb: 29, build: 269 },
    { name: "H", refurb: 82, build: 607 },
    { name: "I", refurb: 44, build: 528 },
    { name: "J", refurb: 109, build: 0 },
];

const NextPage3 = () => {
    const [type, setType] = useState("all");
    const [status, setStatus] = useState("complete");

    const filterBars = (datum) =>
        type === "all"
            ? datum
            : { ...datum, build: type === "build" ? datum.build : 0, refurb: type === "refurb" ? datum.refurb : 0 };

    const pills = [
        { key: "refurb", label: "Refurbishment" },
        { key: "build", label: "New build" },
        { key: "all", label: "All" },
    ];

    const statuses = [
        { key: "complete", label: "Complete" },
        { key: "estimate", label: "Estimate" },
    ];

    return (
        <div>

            <div className="min-h-screen bg-bg text-[#2b2b2b] p-6 xl:p-10 font-sans lg:mx-20">
                
                <div className="flex flex-col xl:flex-row gap-8">
                    
                    <section className="flex-1">
                        
                        <div>
                            <h2 className="font-semibold text-lg mb-4">Filter by</h2>

                            {/* TYPE pills */}
                            <div className="mb-6">
                                <p className="text-sm mb-2">Type</p>
                                <div className="flex gap-4 flex-wrap">
                                    {pills.map(({ key, label }) => (
                                        <button
                                            key={key}
                                            onClick={() => setType(key)}
                                            className={`px-8 py-2 rounded-full border transition
                      ${type === key
                                                    ? "bg-plum text-white border-plum"
                                                    : "border-plum text-plum"}`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* STATUS pills */}
                            <div className="mb-10">
                                <p className="text-sm mb-2">Status</p>
                                <div className="flex gap-4 flex-wrap">
                                    {statuses.map(({ key, label }) => (
                                        <button
                                            key={key}
                                            onClick={() => setStatus(key)}
                                            className={`px-8 py-2 rounded-full border transition
                      ${status === key
                                                    ? "bg-plum text-white border-plum"
                                                    : "border-plum text-plum"}`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Key legend -------------------------------------------- */}
                            <div className="space-y-3 mb-4">
                                <h3 className="font-semibold">Key</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 border-t border-dashed" />
                                    <span className="text-sm">
                                        500 kgCO₂e/m<sup>2</sup> – Embodied Carbon Target 2030
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 border-t" />
                                    <span className="text-sm">
                                        600 kgCO₂e/m<sup>2</sup> – Embodied Carbon Target 2025
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Chart --------------------------------------------------- */}
                        <div className="h-[420px] xl:h-[520px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={barData.map(filterBars)}
                                    margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="4" vertical={false} />
                                    <XAxis dataKey="name" />
                                    <YAxis
                                        label={{
                                            value: "Embodied carbon intensity (kgCO₂e/m²)",
                                            angle: -90, position: "insideLeft", dy: 24,
                                            style: { textAnchor: "middle" },
                                        }}
                                    />
                                    {/* 600 target line */}
                                    <ReferenceLine y={600} stroke="#666" />
                                    {/* Bars */}
                                    <Bar dataKey="build" stackId="a" fill="#663636" radius={[4, 4, 0, 0]}>
                                        <LabelList dataKey="build" position="top" fill="#663636" />
                                    </Bar>
                                    <Bar dataKey="refurb" stackId="a" fill="#c49393" radius={[4, 4, 0, 0]}>
                                        <LabelList dataKey="refurb" position="top" fill="#663636" />
                                    </Bar>
                                    <Tooltip />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </section>

                    {/* ---------------- RIGHT column (title & download) ----------- */}
                    <aside className="xl:w-72 flex flex-col items-start xl:items-end shrink-0">
                        {/* big stacked heading */}
                        <h1 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] leading-none uppercase tracking-wide text-right">
                            <span className="block text-[#333]">Embodied</span>
                            <span className="block text-plum">Carbon</span>
                            <span className="block text-plum">Emissions</span>
                        </h1>

                        {/* subtitle */}
                        <p className="text-right mt-4 mb-6">
                            Intensity measured by kgCO₂e/m<sup>2</sup>
                        </p>

                        {/* download button */}
                        <button className="self-center xl:self-end flex items-center gap-2 border rounded-full px-5 py-2 hover:bg-plum hover:text-white transition">
                            Download the data
                            <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                    </aside>
                </div>
            </div>

        </div>
    )
}

export default NextPage3
