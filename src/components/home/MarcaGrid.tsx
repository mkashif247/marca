import { Container, Title, Text, Button, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export function MarcaGrid() {
  return (
    <Box py={60} mb={50}>
      <Container size="xl">
        <Box ta="center" mb="xl">
          <Text size="sm" fw={600} c="violet" tt="uppercase" style={{ letterSpacing: '2px' }}>
            Explore Collections
          </Text>
          <Title order={2} mt="xs" style={{ fontSize: '2rem', fontWeight: 700 }}>
            The Collection
          </Title>
        </Box>
      </Container>

      <Container size="xl" style={{ padding: '0 8px' }}>
      <style>{`
        .collection-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 280px 280px;
          gap: 8px;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        .collection-item {
          margin: 0;
          padding: 0;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .collection-item:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .collection-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 250px 250px;
          }
        }
        @media (max-width: 576px) {
          .collection-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 250px);
          }
        }
      `}</style>

      <div className="collection-grid">
        {/* Winter 2025 - Large left, spans 2 rows */}
        <div className="collection-item" style={{ gridColumn: '1', gridRow: '1 / 3' }}>
          <ImageCard
            title="Winter 2025"
            subtitle="Editorial"
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop"
          />
        </div>

        {/* Essentials - Top middle */}
        <div className="collection-item" style={{ gridColumn: '2', gridRow: '1' }}>
          <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
            padding: '32px',
            boxSizing: 'border-box',
          }}>
            <Title order={3} c="white" style={{ fontSize: '1.75rem' }}>Essentials</Title>
            <Text c="rgba(255,255,255,0.85)" mt="sm" size="lg">Curated for you</Text>
            <Button 
              variant="white" 
              color="violet" 
              radius="xl"
              mt="xl"
              rightSection={<IconArrowRight size={16} />}
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Trending Now - Right, spans 2 rows */}
        <div className="collection-item" style={{ gridColumn: '3', gridRow: '1 / 3' }}>
          <ImageCard
            title="Trending Now"
            image="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=1000&fit=crop"
          />
        </div>

        {/* New Arrivals - Bottom middle */}
        <div className="collection-item" style={{ gridColumn: '2', gridRow: '2' }}>
          <ImageCard
            title="New Arrivals"
            subtitle="Just Dropped"
            image="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&h=500&fit=crop"
          />
        </div>
      </div>
      </Container>
    </Box>
  );
}

function ImageCard({ 
  title, 
  subtitle, 
  image 
}: { 
  title: string; 
  subtitle?: string; 
  image: string;
}) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.5s ease',
      }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '24px',
      }}>
        {subtitle && (
          <Text size="xs" tt="uppercase" fw={700} c="#A78BFA" style={{ letterSpacing: '2px', marginBottom: '4px' }}>
            {subtitle}
          </Text>
        )}
        <Title order={3} c="white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{title}</Title>
        <Text c="white" size="sm" fw={500} mt="xs" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Discover →
        </Text>
      </div>
    </div>
  );
}
