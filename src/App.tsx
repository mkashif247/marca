import { MantineProvider } from '@mantine/core';
import { MainNavigation } from './components/layout/MainNavigation';
import { HeroBanner } from './components/home/HeroBanner';
import { CategoryIcons } from './components/home/CategoryIcons';
import { EmiratesSection } from './components/home/EmiratesSection';
import { RecommendedStores } from './components/home/RecommendedStores';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { SecondaryBanner } from './components/home/SecondaryBanner';
import { MarcaGrid } from './components/home/MarcaGrid';
import { Footer } from './components/layout/Footer';
import './App.css'

function App() {
  return (
    <MantineProvider>
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <MainNavigation />
        <main style={{ flex: 1 }}>
          <HeroBanner />
          <CategoryIcons />
          <EmiratesSection />
          <FeaturedProducts />
          <RecommendedStores />
          <SecondaryBanner />
          <MarcaGrid />
        </main>
        <Footer />
      </div>
    </MantineProvider>
  )
}

export default App
