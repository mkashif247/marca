import { useState } from 'react';
import { Container, SimpleGrid, Card, Image, Text, Title, Box } from '@mantine/core';

const emirates = [
  { name: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop', flag: '🇦🇪' },
  { name: 'Abu Dhabi', img: 'https://images.unsplash.com/photo-1578862809606-93f3bf8e3ee9?w=400&h=300&fit=crop', flag: '🏛️' },
  { name: 'Sharjah', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=300&fit=crop', flag: '🕌' },
  { name: 'Ajman', img: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=400&h=300&fit=crop', flag: '🏖️' },
  { name: 'RAK', img: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop', flag: '⛰️' },
  { name: 'Fujairah', img: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=300&fit=crop', flag: '🌊' },
  { name: 'UAQ', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=300&fit=crop', flag: '☀️' },
];

export function EmiratesSection() {
  return (
    <Box style={{
      background: 'linear-gradient(to bottom, #F8FAFC 0%, #FFFFFF 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '-8%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <Box ta="center" mb={56}>
          <Text
            size="sm"
            fw={700}
            c="#7C3AED"
            tt="uppercase"
            style={{
              letterSpacing: '3px',
              marginBottom: '12px',
            }}
          >
            Explore Locally
          </Text>
          <Title
            order={2}
            style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #0F172A 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-1px',
            }}
          >
            Shop by Emirate
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 2, sm: 4, md: 7 }} spacing="20px">
          {emirates.map((emirate, index) => (
            <Card
              key={emirate.name}
              padding={0}
              radius="20"
              shadow="md"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                animation: `fadeIn 0.6s ease-out ${index * 0.08}s both`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#FFFFFF',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(124, 58, 237, 0.2), 0 0 0 2px rgba(167, 139, 250, 0.3)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                  <Image
                    src={emirate.img}
                    alt={emirate.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Enhanced gradient overlay */}
                  <Box
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                      transition: 'background 0.4s ease',
                    }}
                  />

                  {/* Flag badge with glassmorphism */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    }}
                  >
                    {emirate.flag}
                  </Box>
                </div>
              </Card.Section>

              {/* Enhanced footer with gradient accent */}
              <EmirateFooter name={emirate.name} />
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function EmirateFooter({ name }: { name: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      p="md"
      ta="center"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text
        fw={700}
        size="sm"
        style={{
          color: isHovered ? '#7C3AED' : '#0F172A',
          transition: 'color 0.3s ease',
          letterSpacing: '0.3px',
        }}
      >
        {name}
      </Text>

      {/* Subtle accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: isHovered ? '60%' : '0%',
        height: '3px',
        background: 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)',
        borderRadius: '2px',
        transition: 'width 0.4s ease',
      }} />
    </Box>
  );
}
