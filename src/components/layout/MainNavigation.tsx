import { useState } from 'react';
import { Group, TextInput, ActionIcon, Container, Anchor, Burger, Badge, Box, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconHeart, IconShoppingCart, IconUser, IconWorld, IconChevronDown, IconChevronRight } from '@tabler/icons-react';

// Category data with images for the mega menu
const categoryData = {
  'Just for You': {
    items: [
      { name: 'False Eyelashes', img: 'https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=200' },
      { name: 'Men Jeans', img: 'https://images.unsplash.com/photo-1542272454315-7ad9f8f0e8e7?w=200' },
      { name: 'Men Sweatshirts', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200' },
      { name: 'Wireless Earbuds', img: 'https://images.unsplash.com/photo-1590658165838-15a9607a5b51?w=200' },
      { name: 'Fashion Glasses', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200' },
      { name: 'Women Bracelet', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200' },
      { name: 'Men T-Shirts', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200' },
      { name: 'Brushes Sets', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200' },
    ]
  },
  'New In': {
    items: [
      { name: 'New Tops', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200' },
      { name: 'New T-shirts', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200' },
      { name: 'New Blouses', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200' },
      { name: 'New Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200' },
      { name: 'New Bottoms', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200' },
      { name: 'New Sweaters', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200' },
    ]
  },
  'Sale': {
    items: [
      { name: 'Women Sale', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200' },
      { name: 'Dresses Sale', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200' },
      { name: 'Tops Sale', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=200' },
      { name: 'Bottoms Sale', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200' },
      { name: 'Bestsellers', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200' },
      { name: 'Special Sale', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200' },
    ]
  },
  'Women': {
    items: [
      { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200' },
      { name: 'Tops', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200' },
      { name: 'T-shirts', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200' },
      { name: 'Blouses', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200' },
      { name: 'Jeans', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200' },
      { name: 'Pants', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200' },
      { name: 'Jackets', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200' },
      { name: 'Coats', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200' },
    ]
  },
  'Men': {
    items: [
      { name: 'T-shirts', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200' },
      { name: 'Shirts', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200' },
      { name: 'Hoodies', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200' },
      { name: 'Jeans', img: 'https://images.unsplash.com/photo-1542272454315-7ad9f8f0e8e7?w=200' },
      { name: 'Pants', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200' },
      { name: 'Shorts', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200' },
    ]
  },
  'Kids': {
    items: [
      { name: 'Girls Dresses', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=200' },
      { name: 'Girls Tops', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=200' },
      { name: 'Boys T-shirts', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200' },
      { name: 'Boys Pants', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200' },
      { name: 'Sets', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7e2e15?w=200' },
      { name: 'Jackets', img: 'https://images.unsplash.com/photo-1578102718171-ec1f91680562?w=200' },
    ]
  },
  'Home & Living': {
    items: [
      { name: 'Bedding Sets', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200' },
      { name: 'Pillows', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200' },
      { name: 'Blankets', img: 'https://images.unsplash.com/photo-1616627977077-097cd41ccfae?w=200' },
      { name: 'Cookware', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200' },
      { name: 'Storage', img: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=200' },
      { name: 'Tableware', img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=200' },
    ]
  },
  'Beauty & Health': {
    items: [
      { name: 'Face Makeup', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200' },
      { name: 'Eye Makeup', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200' },
      { name: 'Brushes', img: 'https://images.unsplash.com/photo-1583241801394-f7e791f80664?w=200' },
      { name: 'Cleansers', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200' },
      { name: 'Moisturizers', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200' },
      { name: 'Serums', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200' },
    ]
  },
  'Electronics': {
    items: [
      { name: 'Phone Cases', img: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200' },
      { name: 'Earbuds', img: 'https://images.unsplash.com/photo-1590658165838-15a9607a5b51?w=200' },
      { name: 'Chargers', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200' },
      { name: 'Smart Watches', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200' },
      { name: 'Speakers', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200' },
      { name: 'Cameras', img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200' },
    ]
  },
};

const sidebarCategories = [
  'Just for You',
  'New In', 
  'Sale',
  'Women',
  'Beachwear',
  'Kids',
  'Curve',
  'Men',
  'Underwear & Sleepwear',
  'Shoes',
  'Home & Living',
  'Jewelry & Accessories',
  'Beauty & Health',
  'Baby & Maternity',
];

export function MainNavigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Just for You');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleCategoryHover = (catName: string) => {
    setShowMegaMenu(true);
    setActiveCategory(catName);
  };

  return (
    <header style={{ 
      background: '#000000',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      {/* Main Header Row */}
      <Container size="xl" style={{ padding: '10px 16px' }}>
        <Group justify="space-between" align="center" gap="xl">
          {/* Logo */}
          <Group gap="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="#FFFFFF" />
            <span style={{ 
              fontSize: '26px', 
              fontWeight: 800, 
              letterSpacing: '-0.5px',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
            }}>
              MARCA
            </span>
          </Group>

          {/* Search Bar */}
          <Box 
            style={{ 
              flex: 1, 
              maxWidth: '480px',
              margin: '0 20px',
            }}
            visibleFrom="sm"
          >
            <Group gap={0} style={{ width: '100%' }}>
              <TextInput
                placeholder="Search for brands, products..."
                size="md"
                style={{ flex: 1 }}
                styles={{
                  input: {
                    backgroundColor: '#FFFFFF',
                    border: 'none',
                    borderRadius: '0',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    height: '38px',
                    fontSize: '14px',
                  },
                }}
              />
              <Button
                color="dark"
                radius={0}
                style={{
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  height: '38px',
                  width: '46px',
                  backgroundColor: '#222222',
                }}
              >
                <IconSearch size={18} stroke={2} />
              </Button>
            </Group>
          </Box>

          {/* Right Actions */}
          <Group gap="md">
            <ActionIcon variant="transparent" color="white" size="lg" aria-label="Language">
              <IconWorld size={20} stroke={1.5} />
            </ActionIcon>
            
            <ActionIcon variant="transparent" color="white" size="lg" aria-label="Profile">
              <IconUser size={20} stroke={1.5} />
            </ActionIcon>

            <Box style={{ position: 'relative' }}>
              <ActionIcon variant="transparent" color="white" size="lg" aria-label="Cart">
                <IconShoppingCart size={20} stroke={1.5} />
              </ActionIcon>
              <Badge size="xs" circle color="pink" style={{ position: 'absolute', top: -2, right: -2, fontSize: '9px', minWidth: '14px', height: '14px', padding: 0 }}>
                0
              </Badge>
            </Box>

            <Box style={{ position: 'relative' }}>
              <ActionIcon variant="transparent" color="white" size="lg" aria-label="Wishlist">
                <IconHeart size={20} stroke={1.5} />
              </ActionIcon>
              <Badge size="xs" circle color="pink" style={{ position: 'absolute', top: -2, right: -2, fontSize: '9px', minWidth: '14px', height: '14px', padding: 0 }}>
                0
              </Badge>
            </Box>
          </Group>
        </Group>
      </Container>

      {/* Categories Row */}
      <div style={{ borderTop: '1px solid #333', background: '#000' }}>
        <Container size="xl" style={{ padding: '0 16px' }}>
          <Group gap={0} wrap="nowrap">
            {/* Categories Dropdown + Top Links */}
            <Box
              style={{ position: 'relative', display: 'flex' }}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              {/* Categories Trigger */}
              <Anchor 
                href="#" 
                c="white" 
                fw={500} 
                size="sm" 
                underline="never"
                onMouseEnter={() => {
                  setShowMegaMenu(true);
                  setActiveCategory('Just for You');
                }}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '10px 14px',
                  whiteSpace: 'nowrap',
                  borderRight: '1px solid #333',
                  background: showMegaMenu ? '#222' : 'transparent',
                }}
              >
                Categories <IconChevronDown size={14} />
              </Anchor>

              {/* Category Links */}
              {[
                { name: 'Just for You', special: false },
                { name: 'New In', special: false },
                { name: 'Sale', special: true },
                { name: 'Women', special: false },
                { name: 'Men', special: false },
                { name: 'Kids', special: false },
                { name: 'Home & Living', special: false },
                { name: 'Beauty & Health', special: false },
                { name: 'Electronics', special: false },
              ].map((cat) => (
                <Anchor 
                  key={cat.name} 
                  href="#" 
                  c={cat.special ? '#FF3E6C' : 'white'}
                  fw={cat.special ? 600 : 400} 
                  size="sm" 
                  underline="never"
                  onMouseEnter={() => handleCategoryHover(cat.name)}
                  style={{ 
                    padding: '10px 12px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    fontSize: '13px',
                    textDecoration: hoveredLink === cat.name ? 'underline' : 'none',
                  }}
                  onMouseMove={() => setHoveredLink(cat.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {cat.name}
                </Anchor>
              ))}

              {/* SHEIN-Style Mega Menu with Images */}
              {showMegaMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  display: 'flex',
                  minWidth: '900px',
                  maxWidth: '1100px',
                  zIndex: 1001,
                }}>
                  {/* Left Sidebar */}
                  <div style={{
                    width: '200px',
                    borderRight: '1px solid #eee',
                    background: '#FAFAFA',
                    maxHeight: '500px',
                    overflowY: 'auto',
                  }}>
                    {sidebarCategories.map((cat) => (
                      <div
                        key={cat}
                        onMouseEnter={() => setActiveCategory(cat)}
                        style={{
                          padding: '12px 16px',
                          fontSize: '13px',
                          color: activeCategory === cat ? '#000' : '#666',
                          background: activeCategory === cat ? '#fff' : 'transparent',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderLeft: activeCategory === cat ? '3px solid #000' : '3px solid transparent',
                          fontWeight: activeCategory === cat ? 600 : 400,
                        }}
                      >
                        {cat}
                        <IconChevronRight size={14} color="#999" />
                      </div>
                    ))}
                  </div>

                  {/* Right Content Area - Image Grid */}
                  <div style={{ flex: 1, padding: '20px 24px', maxHeight: '500px', overflowY: 'auto' }}>
                    <Text size="xs" fw={700} c="#E91E63" mb="md" style={{ letterSpacing: '0.5px' }}>
                      {activeCategory === 'Just for You' ? 'PICKS FOR YOU' : 
                       activeCategory === 'Sale' ? 'SPECIAL OFFERS' :
                       activeCategory === 'New In' ? 'NEW IN WOMEN\'S CLOTHING' :
                       `SHOP ${activeCategory.toUpperCase()}`}
                    </Text>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                      gap: '16px',
                    }}>
                      {(categoryData[activeCategory as keyof typeof categoryData]?.items || categoryData['Just for You'].items).map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: '#333',
                            transition: 'transform 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: '8px',
                            border: '1px solid #eee',
                          }}>
                            <img 
                              src={item.img} 
                              alt={item.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                          <Text size="xs" ta="center" style={{ fontSize: '12px', lineHeight: 1.3 }}>
                            {item.name}
                          </Text>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Box>
          </Group>
        </Container>
      </div>
    </header>
  );
}
