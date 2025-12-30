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
    <Container size="xl" py={32}>
      <Box ta="center" mb="xl">
        <Text size="sm" fw={600} c="violet" tt="uppercase" style={{ letterSpacing: '2px' }}>
          Explore Locally
        </Text>
        <Title order={2} mt="xs" style={{ fontSize: '2rem', fontWeight: 700 }}>
          Shop by Emirate
        </Title>
      </Box>
      
      <SimpleGrid cols={{ base: 2, sm: 4, md: 7 }} spacing="md">
        {emirates.map((emirate, index) => (
          <Card 
            key={emirate.name} 
            padding={0} 
            radius="lg" 
            shadow="sm"
            className="hover-lift img-zoom"
            style={{ 
              cursor: 'pointer',
              overflow: 'hidden',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Card.Section style={{ position: 'relative' }}>
              <Image src={emirate.img} height={120} alt={emirate.name} />
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                }}
              />
              <Text
                size="xl"
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  fontSize: '20px',
                }}
              >
                {emirate.flag}
              </Text>
            </Card.Section>
            <Box p="sm" ta="center" bg="white">
              <Text fw={600} size="sm" c="#0F172A">
                {emirate.name}
              </Text>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
