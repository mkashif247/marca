import { Container, Grid, Card, Image, Text, Title, Badge, Group, Button, Box } from '@mantine/core';
import { IconStar, IconStarFilled, IconArrowRight } from '@tabler/icons-react';

const stores = [
  { 
    name: 'ZARA', 
    category: 'Fashion', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop',
    isNew: true,
    products: '2.5k+'
  },
  { 
    name: 'Apple Store', 
    category: 'Electronics', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=300&fit=crop',
    isNew: false,
    products: '500+'
  },
  { 
    name: 'IKEA', 
    category: 'Home & Living', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    isNew: false,
    products: '10k+'
  },
  { 
    name: 'Sephora', 
    category: 'Beauty', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
    isNew: true,
    products: '5k+'
  },
];

export function RecommendedStores() {
  return (
    <Container size="xl" py={60}>
      <Group justify="space-between" mb="xl" align="flex-end">
        <Box>
          <Text size="sm" fw={600} c="violet" tt="uppercase" style={{ letterSpacing: '2px' }}>
            Curated For You
          </Text>
          <Title order={2} mt="xs" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Recommended Stores
          </Title>
        </Box>
        <Button 
          variant="subtle" 
          color="violet" 
          rightSection={<IconArrowRight size={16} />}
          style={{ fontWeight: 600 }}
        >
          View All
        </Button>
      </Group>
      
      <Grid gutter="lg">
        {stores.map((store, index) => (
          <Grid.Col key={store.name} span={{ base: 12, sm: 6, md: 3 }}>
            <Card 
              shadow="sm" 
              padding={0} 
              radius="lg" 
              h="100%"
              className="hover-lift"
              style={{ 
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <Card.Section style={{ position: 'relative' }} className="img-zoom">
                <Image
                  src={store.img}
                  height={180}
                  alt={store.name}
                />
                <Box
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
                  }}
                />
                {store.isNew && (
                  <Badge 
                    color="violet" 
                    variant="filled"
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      fontWeight: 700,
                    }}
                  >
                    NEW
                  </Badge>
                )}
                <Badge 
                  color="dark" 
                  variant="filled"
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                  }}
                >
                  {store.products} products
                </Badge>
              </Card.Section>

              <Box p="md">
                <Group justify="space-between" mb="xs">
                  <Text fw={700} size="lg" c="#0F172A">{store.name}</Text>
                  <Badge color="gray" variant="light" size="sm">
                    {store.category}
                  </Badge>
                </Group>

                <Group gap={4} mb="md">
                  {[1, 2, 3, 4, 5].map((star) => (
                    star <= Math.floor(store.rating) ? (
                      <IconStarFilled key={star} size={14} color="#F59E0B" />
                    ) : (
                      <IconStar key={star} size={14} color="#E2E8F0" />
                    )
                  ))}
                  <Text size="sm" fw={600} c="#475569" ml={4}>{store.rating}</Text>
                </Group>

                <Button 
                  fullWidth 
                  radius="lg"
                  variant="light"
                  color="violet"
                  style={{ fontWeight: 600 }}
                >
                  Visit Store
                </Button>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
