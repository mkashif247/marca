import { Container, Title, Text, Box, Group, Card, Image, Badge, ActionIcon, Button } from '@mantine/core';
import { IconHeart, IconShoppingBag, IconArrowRight, IconStarFilled } from '@tabler/icons-react';

const products = [
  {
    id: 1,
    name: 'Premium Wool Coat',
    brand: 'ZARA',
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.8,
    reviews: 256,
    img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Designer Sneakers',
    brand: 'Nike',
    price: 449,
    originalPrice: 599,
    discount: 25,
    rating: 4.9,
    reviews: 512,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
    isNew: false,
  },
  {
    id: 3,
    name: 'Leather Handbag',
    brand: 'Michael Kors',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.7,
    reviews: 189,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
    isNew: true,
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    brand: 'Apple',
    price: 1599,
    originalPrice: 1899,
    discount: 16,
    rating: 4.9,
    reviews: 1024,
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=500&fit=crop',
    isNew: false,
  },
  {
    id: 5,
    name: 'Silk Evening Dress',
    brand: 'H&M',
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.6,
    reviews: 78,
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    isNew: true,
  },
];

export function FeaturedProducts() {
  return (
    <Box py={60} style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)' }}>
      <Container size="xl">
        <Group justify="space-between" mb="xl" align="flex-end">
          <Box>
            <Text size="sm" fw={600} c="violet" tt="uppercase" style={{ letterSpacing: '2px' }}>
              Best Sellers
            </Text>
            <Title order={2} mt="xs" style={{ fontSize: '2rem', fontWeight: 700 }}>
              Featured Products
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

        <Box
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
          }}
        >
          {products.map((product, index) => (
            <Card 
              key={product.id}
              shadow="sm" 
              padding={0}
              radius="12"
              className="hover-lift"
              style={{ 
                minWidth: '280px',
                maxWidth: '280px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                scrollSnapAlign: 'start',
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Card.Section style={{ position: 'relative' }} className="img-zoom">
                <Image
                  src={product.img}
                  height={320}
                  alt={product.name}
                />
                
                {/* Badges */}
                <Box style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  {product.isNew && (
                    <Badge color="violet" variant="filled" size="sm">NEW</Badge>
                  )}
                  {product.discount > 20 && (
                    <Badge color="red" variant="filled" size="sm">-{product.discount}%</Badge>
                  )}
                </Box>

                {/* Wishlist Button */}
                <ActionIcon
                  variant="white"
                  radius="xl"
                  size="lg"
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  <IconHeart size={18} color="#EF4444" />
                </ActionIcon>

                {/* Quick Add */}
                <Box
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="quick-add"
                >
                  <Button 
                    fullWidth 
                    color="violet" 
                    radius="lg"
                    leftSection={<IconShoppingBag size={16} />}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card.Section>

              <Box p="md">
                <Text size="xs" c="dimmed" fw={500} tt="uppercase" style={{ letterSpacing: '1px' }}>
                  {product.brand}
                </Text>
                <Text fw={600} size="md" mt={4} c="#0F172A" lineClamp={1}>
                  {product.name}
                </Text>

                <Group gap={4} mt="xs">
                  <IconStarFilled size={14} color="#F59E0B" />
                  <Text size="sm" fw={600} c="#475569">{product.rating}</Text>
                  <Text size="sm" c="dimmed">({product.reviews})</Text>
                </Group>

                <Group gap="sm" mt="sm">
                  <Text fw={700} size="lg" c="violet">
                    AED {product.price}
                  </Text>
                  <Text size="sm" c="dimmed" td="line-through">
                    AED {product.originalPrice}
                  </Text>
                </Group>
              </Box>

              <style>{`
                .hover-lift:hover .quick-add {
                  transform: translateY(0) !important;
                }
              `}</style>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
