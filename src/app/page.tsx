import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const recipes = [
    { id: 1, name: 'Vegetable Paella', cuisine: 'Spanish', time: '45 mins', difficulty: 'Medium', tags: ['Vegetarian', 'Gluten-Free'] },
    { id: 2, name: 'Chicken Tikka Masala', cuisine: 'Indian', time: '60 mins', difficulty: 'Medium', tags: ['Poultry', 'Spicy'] },
    // Add 4 more placeholder recipes
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-amber-50 dark:from-stone-900 dark:to-zinc-900">
        <div className="text-center space-y-8 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
          >
            Master the Art of Cooking
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover world-class recipes, professional techniques, and culinary inspiration
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all"
              href="/recipes"
            >
              Explore Recipes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="border border-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground/10 transition-all"
              href="/video-gallery"
            >
              Watch Videos
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Chef Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Executive Chef Marco Vitali</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With over 15 years of experience in Michelin-starred kitchens, I'm passionate about
              bringing professional techniques to home cooks. My philosophy revolves around
              seasonal ingredients and bold flavor combinations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-foreground"></span>
                <span>2018 World Culinary Award Winner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-foreground"></span>
                <span>Certified Master Chef (CMC)</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/chef.jpg"
              alt="Chef Marco Vitali"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Recipes</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-4 py-2 rounded-full bg-foreground text-background">All</button>
              <button className="px-4 py-2 rounded-full border border-foreground hover:bg-foreground/10">
                Vegetarian
              </button>
              {/* Add more filters */}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/recipes/${recipe.id}.jpg`}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{recipe.cuisine}</span>
                    <span>{recipe.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
