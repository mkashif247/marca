import { Container, Grid, Paper, Title, Text, Button, Box, Flex, AspectRatio } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const gridItems = [
  {
    id: 'editorial',
    title: 'Winter 2025',
    subtitle: 'Editorial',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
    colSpan: { base: 12, md: 8 },
    height: '100%',
    aspectRatio: 16 / 9,
  },
  {
    id: 'trending',
    title: 'Trending Now',
    subtitle: '',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=1000&fit=crop',
    colSpan: { base: 12, md: 4 },
    height: '100%',
    aspectRatio: 9 / 16,
  },
  {
    id: 'essentials',
    title: 'Essentials',
    subtitle: 'Curated for you',
    img: '',
    colSpan: { base: 12, md: 4 },
    height: '100%',
    aspectRatio: 1,
    isText: true,
  },
  {
    id: 'new',
    title: 'New Arrivals',
    subtitle: 'Just Dropped',
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&h=500&fit=crop',
    colSpan: { base: 12, md: 8 },
    height: '100%',
    aspectRatio: 2 / 1,
  },
];

export function MarcaGrid() {
  return (
    <Container size="xl" py={60} mb={50}>
      <Box ta="center" mb="xl">
        <Text size="sm" fw={600} c="violet" tt="uppercase" style={{ letterSpacing: '2px' }}>
          Explore Collections
        </Text>
        <Title order={2} mt="xs" style={{ fontSize: '2rem', fontWeight: 700 }}>
          The Collection
        </Title>
      </Box>

      <Grid gutter="md">
        {/* Large Feature */}
        <Grid.Col span={gridItems[0].colSpan}>
          <GridCard item={gridItems[0]} />
        </Grid.Col>

        {/* Vertical Feature */}
        <Grid.Col span={gridItems[1].colSpan}>
          <AspectRatio ratio={gridItems[1].aspectRatio} h="100%">
            <Paper 
              radius="lg" 
              className="hover-lift img-zoom"
              style={{ 
                overflow: 'hidden', 
                position: 'relative', 
                height: '100%',
                cursor: 'pointer',
              }}
            >
              <Box
                style={{
                  backgroundImage: `url(${gridItems[1].img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%',
                  transition: 'transform 0.5s ease',
                }}
              />
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                }}
              />
              <Box style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <Title order={3} c="white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                  {gridItems[1].title}
                </Title>
              </Box>
            </Paper>
          </AspectRatio>
        </Grid.Col>

        {/* Essentials - Text Card */}
        <Grid.Col span={gridItems[2].colSpan}>
          <AspectRatio ratio={gridItems[2].aspectRatio}>
            <Paper 
              radius="lg" 
              p="xl" 
              className="hover-lift"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                textAlign: 'center', 
                height: '100%',
                background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
              }}
            >
              <Title order={3} style={{ fontSize: '1.75rem' }}>{gridItems[2].title}</Title>
              <Text c="dimmed" mt="sm" size="lg">{gridItems[2].subtitle}</Text>
              <Button 
                variant="filled" 
                color="violet" 
                radius="xl"
                mt="xl"
                rightSection={<IconArrowRight size={16} />}
              >
                Shop Now
              </Button>
            </Paper>
          </AspectRatio>
        </Grid.Col>

        {/* New Arrivals */}
        <Grid.Col span={gridItems[3].colSpan}>
          <GridCard item={gridItems[3]} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

function GridCard({ item }: { item: typeof gridItems[0] }) {
  return (
    <AspectRatio ratio={item.aspectRatio}>
      <Paper 
        radius="lg" 
        className="hover-lift img-zoom"
        style={{ 
          overflow: 'hidden', 
          position: 'relative', 
          height: '100%',
          cursor: 'pointer',
        }}
      >
        <Box
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            transition: 'transform 0.5s ease',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
          }}
        />
        <Flex 
          align="flex-end" 
          justify="flex-start" 
          h="100%" 
          p="xl"
          style={{ position: 'absolute', inset: 0 }}
        >
          <Box
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.95)', 
              padding: '20px 28px', 
              borderRadius: '12px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Text size="xs" tt="uppercase" fw={700} c="violet" style={{ letterSpacing: '2px' }}>
              {item.subtitle}
            </Text>
            <Title order={3} mt={5} c="#0F172A">{item.title}</Title>
            <Button 
              variant="subtle" 
              color="violet" 
              mt="sm" 
              p={0}
              rightSection={<IconArrowRight size={16} />}
            >
              Discover
            </Button>
          </Box>
        </Flex>
      </Paper>
    </AspectRatio>
  );
}
