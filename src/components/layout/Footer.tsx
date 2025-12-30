import { Container, Grid, Text, Title, Box, Group, TextInput, Button, Anchor, ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconMail, IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';

const footerLinks = {
  shop: ['Women', 'Men', 'Kids', 'Home & Living', 'Beauty', 'Electronics'],
  help: ['Customer Service', 'Track Order', 'Returns & Refunds', 'Shipping Info', 'FAQs'],
  company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Investors'],
};

export function Footer() {
  return (
    <Box component="footer" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      {/* Newsletter Section */}
      <Box py={50} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container size="xl">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={3} c="white" style={{ fontSize: '1.75rem' }}>
                Join Our Newsletter
              </Title>
              <Text c="rgba(255,255,255,0.6)" mt="sm" size="lg">
                Get 15% off your first order plus exclusive deals and early access to sales.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Group gap="sm">
                <TextInput
                  placeholder="Enter your email"
                  leftSection={<IconMail size={18} color="#94A3B8" />}
                  radius="12"
                  size="lg"
                  style={{ flex: 1 }}
                  styles={{
                    input: {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                      borderRadius: '12px',
                      '&::placeholder': { color: 'rgba(255,255,255,0.5)' },
                    },
                  }}
                />
                <Button
                  size="lg"
                  radius="12"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                    fontWeight: 700,
                  }}
                >
                  Subscribe
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Container size="xl" py={60}>
        <Grid gutter="xl">
          {/* Brand Column */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Text
              style={{
                fontSize: '28px',
                fontWeight: 800,
                letterSpacing: '-1px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MARCA<span style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>LIFE</span>
            </Text>
            <Text c="rgba(255,255,255,0.6)" mt="md" size="sm" style={{ maxWidth: '300px', lineHeight: 1.7 }}>
              Your premium destination for fashion, electronics, and lifestyle products across the UAE.
            </Text>

            {/* App Badges */}
            <Group gap="sm" mt="xl">
              <Button
                variant="outline"
                color="gray"
                leftSection={<IconBrandApple size={20} />}
                radius="12"
                styles={{
                  root: { borderColor: 'rgba(255,255,255,0.3)', color: 'white', borderRadius: '12px' },
                }}
              >
                App Store
              </Button>
              <Button
                variant="outline"
                color="gray"
                leftSection={<IconBrandGooglePlay size={20} />}
                radius="12"
                styles={{
                  root: { borderColor: 'rgba(255,255,255,0.3)', color: 'white', borderRadius: '12px' },
                }}
              >
                Play Store
              </Button>
            </Group>
          </Grid.Col>

          {/* Links Columns */}
          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Text fw={700} c="white" mb="md">Shop</Text>
            {footerLinks.shop.map((link) => (
              <Anchor
                key={link}
                href="#"
                c="rgba(255,255,255,0.6)"
                size="sm"
                underline="never"
                display="block"
                mb="xs"
                style={{ transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link}
              </Anchor>
            ))}
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Text fw={700} c="white" mb="md">Help</Text>
            {footerLinks.help.map((link) => (
              <Anchor
                key={link}
                href="#"
                c="rgba(255,255,255,0.6)"
                size="sm"
                underline="never"
                display="block"
                mb="xs"
                style={{ transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link}
              </Anchor>
            ))}
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Text fw={700} c="white" mb="md">Company</Text>
            {footerLinks.company.map((link) => (
              <Anchor
                key={link}
                href="#"
                c="rgba(255,255,255,0.6)"
                size="sm"
                underline="never"
                display="block"
                mb="xs"
                style={{ transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link}
              </Anchor>
            ))}
          </Grid.Col>

          {/* Social Column */}
          <Grid.Col span={{ base: 6, sm: 12, md: 2 }}>
            <Text fw={700} c="white" mb="md">Follow Us</Text>
            <Group gap="xs">
              {[IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube].map((Icon, i) => (
                <ActionIcon
                  key={i}
                  variant="subtle"
                  size="lg"
                  radius="12"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.3)';
                    e.currentTarget.style.color = '#A78BFA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <Icon size={20} />
                </ActionIcon>
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} py="md">
        <Container size="xl">
          <Group justify="space-between">
            <Text size="sm" c="rgba(255,255,255,0.5)">
              © 2025 Marca. All rights reserved.
            </Text>
            <Group gap="lg">
              <Anchor href="#" size="sm" c="rgba(255,255,255,0.5)" underline="never">Privacy Policy</Anchor>
              <Anchor href="#" size="sm" c="rgba(255,255,255,0.5)" underline="never">Terms of Service</Anchor>
              <Anchor href="#" size="sm" c="rgba(255,255,255,0.5)" underline="never">Cookies</Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
