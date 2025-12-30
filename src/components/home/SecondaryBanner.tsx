import { Container, Paper, Title, Text, Button, Grid, ThemeIcon, Box, Group } from '@mantine/core';
import { IconTruck, IconTag, IconShieldCheck, IconClock } from '@tabler/icons-react';

export function SecondaryBanner() {
  return (
    <Container size="xl" py={60}>
      <Paper 
        radius="xl" 
        p={{ base: 'xl', md: 50 }}
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Decorative gradient orb */}
        <Box
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Grid align="center" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: 'relative', zIndex: 1 }}>
              <Text size="sm" fw={600} c="violet" tt="uppercase" mb="sm" style={{ letterSpacing: '2px' }}>
                Limited Time Offer
              </Text>
              <Title 
                order={2} 
                c="white"
                style={{ 
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  lineHeight: 1.2,
                }}
              >
                New Year Mega Sale
              </Title>
              <Text mt="lg" c="rgba(255, 255, 255, 0.7)" size="lg" style={{ maxWidth: '400px' }}>
                Use code <Box component="span" style={{ 
                  background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 800,
                }}>NEWYEAR25</Box> for an extra 25% off on your first order.
              </Text>
              <Button 
                size="lg" 
                radius="xl" 
                mt="xl"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                  border: 'none',
                  fontWeight: 700,
                  boxShadow: '0 10px 30px rgba(124, 58, 237, 0.4)',
                }}
              >
                Shop Clearance
              </Button>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Grid gutter="lg">
              <PromoFeature 
                icon={<IconTruck size={24} />} 
                title="Free Delivery" 
                desc="On orders over AED 100" 
              />
              <PromoFeature 
                icon={<IconTag size={24} />} 
                title="Price Match" 
                desc="Guaranteed lowest prices" 
              />
              <PromoFeature 
                icon={<IconShieldCheck size={24} />} 
                title="Secure Checkout" 
                desc="100% protected payments" 
              />
              <PromoFeature 
                icon={<IconClock size={24} />} 
                title="24/7 Support" 
                desc="We're here to help" 
              />
            </Grid>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}

function PromoFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Grid.Col span={6}>
      <Group gap="md" align="flex-start">
        <ThemeIcon 
          size={48} 
          radius="lg" 
          variant="light" 
          color="violet"
          style={{
            background: 'rgba(124, 58, 237, 0.15)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
          }}
        >
          {icon}
        </ThemeIcon>
        <Box>
          <Text fw={700} size="md" c="white">{title}</Text>
          <Text size="sm" c="rgba(255, 255, 255, 0.5)">{desc}</Text>
        </Box>
      </Group>
    </Grid.Col>
  );
}
