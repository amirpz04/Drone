import { Hero } from "@/components/sections/Hero";
import { Portfolio, PortfolioItem } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { AboutAndContact } from "@/components/sections/AboutAndContact";
import { Process } from "@/components/sections/Process";
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const footageDir = path.join(process.cwd(), 'public', 'footage');

    // Check if directory exists
    try {
      await fs.access(footageDir);
    } catch {
      return [];
    }

    const files = await fs.readdir(footageDir);

    // Filter for media files and map to objects
    const rawItems = files
      .filter(file => /\.(mp4|webm|mov|jpg|jpeg|png|webp)$/i.test(file))
      .map((file, index) => {
        const ext = path.extname(file).toLowerCase();
        const type = ['.mp4', '.webm', '.mov'].includes(ext) ? 'video' : 'image';

        return {
          id: `item-${index}`,
          type: type as 'video' | 'image',
          src: `/footage/${file}`,
          alt: '' // No names as requested
        };
      });

    // Separate videos and images
    const videos = rawItems.filter(item => item.type === 'video');
    const images = rawItems.filter(item => item.type === 'image');

    // Interleave them: 1 video, 1 image, ...
    const interleavedItems: PortfolioItem[] = [];
    const maxLength = Math.max(videos.length, images.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < videos.length) interleavedItems.push(videos[i]);
      if (i < images.length) interleavedItems.push(images[i]);
    }

    // Return the interleaved list
    return interleavedItems;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export default async function Home() {
  const portfolioItems = await getPortfolioItems();

  // Select a random VIDEO item for the Hero background
  // If no video items, it will fall back to default in Hero component
  const videoItems = portfolioItems.filter(item => item.type === 'video');
  const randomHeroItem = videoItems.length > 0
    ? videoItems[Math.floor(Math.random() * videoItems.length)]
    : undefined;

  return (
    <main className="min-h-screen">
      <Hero
        backgroundSrc={randomHeroItem?.src}
        backgroundType={randomHeroItem?.type}
      />
      <Portfolio items={portfolioItems} />
      <Services />
      <Process />
      <Pricing />
      <AboutAndContact />
    </main>
  );
}
