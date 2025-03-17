
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import screenImg from '../../public/Images/images.jpeg'
export default function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Cohesive - AI Editor</title>
                <meta name="description" content="Create magical content with the most powerful AI editor." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header className="bg-purple-700 text-white p-4 flex justify-between items-center relative">
                <div className="text-xl font-bold">Cohesive</div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <nav
                    className={`absolute md:static top-full left-0 w-full bg-purple-700 md:bg-transparent md:flex gap-6 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'
                        }`}
                >
                    <Link href="#features" className="block md:inline-block">Features</Link>
                    <Link href="#templates" className="block md:inline-block">Templates</Link>
                    <Link href="#pricing" className="block md:inline-block">Pricing</Link>
                    <Link href="#community" className="block md:inline-block">Community</Link>
                    <Link href="#signup" className="block md:inline-block bg-green-500 px-4 py-2 rounded-lg">Sign Up</Link>
                </nav>
            </header>
            <main className="bg-gradient-to-b from-purple-700 to-purple-900 text-white text-center py-20 px-6">
                <p className="text-green-300 text-sm">03 MONTHS EXTRA ON YEARLY PLANS</p>
                <h1 className="text-4xl md:text-6xl font-bold mt-2">Create Magical Content With The Most AI</h1>
                <p className="mt-4 text-lg">End ChatGPT Prompt Struggles. Create, Refine, Edit, And Publish Seamlessly.</p>
                <button className="mt-6 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold text-lg">TRY IT’S FREE</button>
                <div className="mt-10 flex justify-center">
                    <Image src={screenImg} width={400} height={400} alt="AI Editor"  />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mt-10">
                    <span className="text-green-300">POWERFUL</span> AI EDITOR
                </h2>
            </main>


        </>
    )
}

