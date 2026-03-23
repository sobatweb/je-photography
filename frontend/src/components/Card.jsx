import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Heart, Users, Star, ArrowUpRight } from "lucide-react";

const cardData = [
    {
        id: 1,
        icon: Heart,
        tag: "Most Loved",
        title: "Wedding",
        subtitle: "& Intimate",
        desc: "Mengabadikan setiap detail hari spesial Anda — dari senyum tulus hingga tatapan penuh cinta yang tak terlupakan.",
        accent: "#803D3B",
        href: "#contact",
    },
    {
        id: 2,
        icon: Users,
        tag: "Popular",
        title: "Portrait",
        subtitle: "& People",
        desc: "Sesi foto personal yang menonjolkan kepribadian dan karakter unik Anda dalam setiap frame sinematik.",
        accent: "#DAC0A3",
        href: "#contact",
    },
    {
        id: 3,
        icon: Camera,
        tag: "Exclusive",
        title: "Commercial",
        subtitle: "& Brand",
        desc: "Visual berkualitas tinggi untuk kebutuhan brand, produk, dan campaign pemasaran Anda yang profesional.",
        accent: "#C9A96E",
        href: "#contact",
    },
    {
        id: 4,
        icon: Star,
        tag: "Signature",
        title: "Event",
        subtitle: "& Moments",
        desc: "Liputan penuh semangat untuk setiap event — konser, gathering, wisuda, hingga momen korporat Anda.",
        accent: "#DAC0A3",
        href: "#contact",
    },
];

// 3D tilt card with mouse-follow glow
const TiltCard = ({ card, index }) => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

    // Reactive % position for glow
    const glowXPct = useTransform(mouseX, [0, 1], ["0%", "100%"]);
    const glowYPct = useTransform(mouseY, [0, 1], ["0%", "100%"]);
    const glowBg = useMotionTemplate`radial-gradient(circle at ${glowXPct} ${glowYPct}, ${card.accent}28 0%, transparent 65%)`;

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        setHovered(false);
    };

    const Icon = card.icon;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer"
        >
            {/* Card shell */}
            <div className="relative rounded-[2rem] border border-white/10 bg-[#1E1410] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col h-full">

                {/* Reactive glow spotlight */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: glowBg }}
                />

                {/* Top accent line */}
                <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                    style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col gap-6 flex-1">

                    {/* Icon + Tag */}
                    <div className="flex items-start justify-between">
                        <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center"
                            style={{ background: `${card.accent}22`, border: `1px solid ${card.accent}35` }}
                        >
                            <Icon size={20} style={{ color: card.accent }} />
                        </div>
                        <span
                            className="text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full"
                            style={{
                                color: card.accent,
                                background: `${card.accent}18`,
                                border: `1px solid ${card.accent}30`,
                            }}
                        >
                            {card.tag}
                        </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1 space-y-1">
                        <h3 className="text-3xl font-serif text-[#F8F0E5] leading-tight tracking-tight">
                            {card.title}
                        </h3>
                        <h3
                            className="text-3xl font-serif italic leading-tight tracking-tight"
                            style={{ color: card.accent }}
                        >
                            {card.subtitle}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                        {card.desc}
                    </p>

                    {/* CTA */}
                    <a href={card.href} className="flex items-center gap-2 group/link w-fit">
                        <span
                            className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 group-hover/link:opacity-100 transition-opacity duration-300"
                            style={{ color: card.accent }}
                        >
                            Book Now
                        </span>
                        <motion.div
                            animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: `${card.accent}20`, border: `1px solid ${card.accent}40` }}
                        >
                            <ArrowUpRight size={12} style={{ color: card.accent }} />
                        </motion.div>
                    </a>
                </div>

                {/* Corner blob decoration */}
                <div
                    className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-[4rem] opacity-[0.06]"
                    style={{ background: card.accent }}
                />
            </div>
        </motion.div>
    );
};

const Cards = () => {
    return (
        <section id="services" className="relative py-24 md:py-36 bg-[#1A120B] px-6 overflow-hidden">

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#803D3B] rounded-full blur-[200px] opacity-[0.05]" />
                <div className="absolute -top-20 right-0 w-[40vw] h-[40vw] bg-[#DAC0A3] rounded-full blur-[180px] opacity-[0.03]" />
            </div>

            <div className="container mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-[#803D3B] text-[10px] font-bold uppercase tracking-[0.5em]">
                        Our Services
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#F8F0E5] leading-tight tracking-tight">
                        What We <span className="italic text-[#DAC0A3]">Capture</span>
                    </h2>
                    <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
                        Setiap sesi adalah perjalanan emosional yang kami rancang khusus untuk Anda.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cardData.map((card, i) => (
                        <TiltCard key={card.id} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
