import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: "Layanan fotografi apa saja yang tersedia?",
        answer: (
            <div className="space-y-3">
                <p>Kami menyediakan 4 kategori utama layanan fotografi:</p>
                <ul className="list-disc ml-5 space-y-1 text-[#b88a44]">
                    <li>Food & Product</li>
                    <li>Pets</li>
                    <li>Automotive</li>
                    <li>Event & Portrait</li>
                </ul>
                <p>Setiap kategori dikerjakan dengan pendekatan dan style yang disesuaikan.</p>
            </div>
        )
    },
    {
        id: 2,
        question: "Apakah ada Instagram untuk masing-masing kategori?",
        answer: (
            <div className="space-y-3">
                <p>Ada. Setiap kategori memiliki Instagram tersendiri agar Anda bisa melihat portfolio yang lebih spesifik:</p>
                <ul className="list-disc ml-5 space-y-1 text-[#b88a44]">
                    <li>Food & Product : @Je_Cekrek</li>
                    <li>Pets : @Je_Petshoot</li>
                    <li>Automotive : @Je_Carshoot</li>
                    <li>Event & Portrait : @Je_Portraiture</li>
                </ul>
            </div>
        )
    },
    {
        id: 3,
        question: "Apakah bisa melayani di luar kategori tersebut?",
        answer: "Tentu bisa. Silakan diskusikan kebutuhan Anda dengan kami, dan kami akan menyesuaikan konsep yang terbaik."
    },
    {
        id: 4,
        question: "Berapa lama proses editing?",
        answer: (
            <div className="space-y-1">
                <p>Waktu pengerjaan editing bervariasi, tergantung jumlah foto dan tingkat kompleksitas.</p>
                <p>Estimasi akan diinformasikan sebelum project dimulai.</p>
            </div>
        )
    },
    {
        id: 5,
        question: "Apakah melayani photoshoot di luar Jakarta?",
        answer: (
            <div className="space-y-1">
                <p>Ya, kami melayani luar kota.</p>
                <p>Biaya akan menyesuaikan dengan akomodasi (transport & penginapan) di luar rate jasa.</p>
            </div>
        )
    },
    {
        id: 6,
        question: "Di mana lokasi photoshoot dilakukan?",
        answer: (
            <div className="space-y-3">
                <p>Lokasi fleksibel dan disesuaikan dengan kebutuhan:</p>
                <ul className="list-disc ml-5 space-y-1 text-[#b88a44]">
                    <li><span className="text-white font-semibold">Food & Product:</span> produk dapat dikirim atau photoshoot di lokasi Anda</li>
                    <li><span className="text-white font-semibold">Pets:</span> bisa indoor (studio) atau outdoor di area pet-friendly</li>
                    <li><span className="text-white font-semibold">Automotive:</span> outdoor di lokasi yang disepakati bersama</li>
                    <li><span className="text-white font-semibold">Event & Portrait:</span> mengikuti venue acara</li>
                </ul>
            </div>
        )
    },
    {
        id: 7,
        question: "Apakah harga masih bisa dinegosiasikan?",
        answer: "Saat ini kami menggunakan fixed rate untuk menjaga kualitas dan standar hasil yang konsisten."
    },
    {
        id: 8,
        question: "Apakah file RAW bisa diberikan?",
        answer: "File RAW tersedia berdasarkan permintaan khusus dengan penyesuaian tambahan."
    },
    {
        id: 9,
        question: "Apakah bisa request konsep atau tema tertentu?",
        answer: "Tentu. Kami sangat terbuka untuk eksplorasi konsep agar hasil sesuai dengan visi dan kebutuhan Anda."
    },
    {
        id: 10,
        question: "Bagaimana sistem booking?",
        answer: (
            <div className="space-y-3">
                <p>Proses booking sebagai berikut:</p>
                <ul className="list-disc ml-5 space-y-1 text-[#b88a44]">
                    <li>Menghubungi admin untuk menentukan jadwal</li>
                    <li>Mengunci tanggal yang disepakati</li>
                    <li>Pembayaran DP sebesar Rp100.000</li>
                    <li>Tim fotografer akan hadir sesuai jadwal di lokasi</li>
                </ul>
                <p className="pt-2 text-[12px] italic text-[#b88a44]/80 border-t border-white/10">
                    Catatan: DP akan hangus apabila terjadi pembatalan atau reschedule mendadak (maksimal H-3 dari hari pemotretan).
                </p>
            </div>
        )
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className={`group rounded-[1.5rem] p-6 mb-4 transition-all duration-500 border flex flex-col ${isOpen
                    ? 'bg-black/40 border-[#b88a44] shadow-2xl shadow-black/40'
                    : 'bg-black/20 border-white/5 hover:border-[#b88a44]/40 hover:bg-black/30'
                }`}
        >
            <div
                className="flex justify-between items-center cursor-pointer min-h-[44px]"
                onClick={onClick}
            >
                <h3 className={`text-sm md:text-base font-bold transition-colors duration-300 pr-6 leading-tight ${isOpen ? 'text-white' : 'text-[#b88a44]/90 group-hover:text-white'
                    }`}>
                    {question}
                </h3>
                <button
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#b88a44] text-white rotate-180' : 'bg-white/10 text-[#b88a44] group-hover:bg-white'
                        }`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 mt-4 border-t border-white/10">
                            <div className="text-[#b88a44]/90 text-[13px] md:text-sm leading-relaxed">
                                {answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const leftColumn = faqData.slice(0, 5);
    const rightColumn = faqData.slice(5, 10);

    return (
        <section id="faq" className="py-24 md:py-32 bg-[#1a110a] relative px-6 overflow-hidden font-sans">
            {/* Glow effect yang lebih terang untuk memecah kepekatan background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b88a44]/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/30 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        className="flex items-center justify-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="w-10 h-px bg-[#b88a44]"></span>
                        <span className="text-[#b88a44] text-[11px] font-bold uppercase tracking-[0.5em]">
                            Information Center
                        </span>
                        <span className="w-10 h-px bg-[#b88a44]"></span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Frequently Asked <span className="italic text-[#b88a44]">Questions.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-start">
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {leftColumn.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openId === faq.id}
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {rightColumn.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openId === faq.id}
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;