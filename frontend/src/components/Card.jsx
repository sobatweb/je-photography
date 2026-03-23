import { motion } from "framer-motion";
import { Camera, Heart, Users, Star, ArrowUpRight } from "lucide-react";

const cardData = [
    {
        id: 1,
        icon: Star,
        tag: "Culinary Art",
        title: "Food",
        subtitle: "& Beverages",
        desc: "Menghadirkan selera dan estetika dalam setiap hidangan, membuat kreasi kuliner Anda terlihat menggoda dan lezat.",
        accent: "#803D3B",
        bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
        href: "#gallery",
    },
    {
        id: 2,
        icon: Users,
        tag: "Life Moments",
        title: "Event",
        subtitle: "& Gathering",
        desc: "Liputan penuh semangat untuk setiap event — konser, gathering, wisuda, hingga momen berharga Anda.",
        accent: "#A06B50",
        bgImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
        href: "#gallery",
    },
    {
        id: 3,
        icon: Camera,
        tag: "Engine & Soul",
        title: "Otomotif",
        subtitle: "& Modified",
        desc: "Visual dramatis yang menonjolkan kecepatan, detail mesin, dan lekuk agresif kendaraan kebanggaan Anda.",
        accent: "#9C7C40",
        bgImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        href: "#gallery",
    },
    {
        id: 4,
        icon: Heart,
        tag: "Pure Loyalties",
        title: "Pet",
        subtitle: "& Animals",
        desc: "Mengabadikan karakter unik dan tingkah lucu sahabat berbulu Anda dalam frame yang penuh kehangatan.",
        accent: "#6B7A6B",
        bgImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
        href: "#gallery",
    },
];

// Simple elegant hover card
const SimpleCard = ({ card, index }) => {
    const Icon = card.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer h-full"
        >
            {/* Card Body */}
            <div className="relative rounded-[2rem] bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500 flex flex-col h-full min-h-[480px]">
                {/* Top Image Hero inside card */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <img
                        src={card.bgImage}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                    />
                    {/* Subtle gradient overlay to make image pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon Badge overlapping image */}
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md shadow-sm border border-white/30"
                        >
                            <Icon size={18} className="text-white" />
                        </div>
                        <span
                            className="text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30"
                        >
                            {card.tag}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 flex flex-col flex-1 bg-white">
                    {/* Title Map */}
                    <div className="space-y-1 mb-4">
                        <h3 className="text-3xl font-serif text-[#1A120B] leading-tight tracking-tight group-hover:text-gray-900 transition-colors">
                            {card.title}
                        </h3>
                        <h3
                            className="text-2xl font-serif italic leading-none tracking-tight"
                            style={{ color: card.accent }}
                        >
                            {card.subtitle}
                        </h3>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-6 flex-1">
                        {card.desc}
                    </p>

                    {/* Links & Buttons */}
                    <div className="flex flex-col gap-3 pt-5 border-t border-gray-100 mt-auto">
                        <a 
                            href="#contact" 
                            className="flex justify-between items-center w-full px-5 h-[46px] rounded-full group/book transition-all duration-400 ease-out hover:shadow-lg hover:opacity-90"
                            style={{ backgroundColor: card.accent }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white transition-transform duration-400">
                                Book Session
                            </span>
                            <div
                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-400 group-hover/book:rotate-45"
                            >
                                <ArrowUpRight size={14} strokeWidth={2.5} className="text-white" />
                            </div>
                        </a>

                        <a 
                            href={card.href} 
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('changeGalleryCategory', { detail: card.title }));
                            }}
                            className="flex justify-center items-center w-full px-5 h-[46px] rounded-full bg-transparent transition-all duration-400 ease-out border border-gray-200 text-[#1A120B] group/gallery hover:bg-[#4B2E2B] hover:text-white hover:border-[#1A120B] hover:shadow-lg"
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold transition-transform duration-400 group-hover/gallery:scale-105">
                                Look Our Gallery
                            </span>
                        </a>
                    </div>
                </div>

                {/* Accent Top Border styling for hover effect mapping */}
                <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
                    style={{ backgroundColor: card.accent }}
                />
            </div>
        </motion.div>
    );
};

const Cards = () => {
    return (
        <section id="services" className="relative py-24 md:py-36 bg-[#FDFBF7] px-6 overflow-hidden">

            {/* Subtle Background Ambiance for Light Theme */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#1A120B]/5 to-transparent pointer-events-none" />

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
                        Service Spectrum
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#1A120B] leading-tight tracking-tight">
                        What We <span className="italic text-[#803D3B]">Capture</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
                        Menghadirkan layanan khusus yang menyoroti setiap detail untuk portofolio visual Anda.
                    </p>
                </motion.div>

                {/* Cards Layout - Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {cardData.map((card, i) => (
                        <SimpleCard key={card.id} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
