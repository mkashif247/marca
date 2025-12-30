import { Container, Box, Text, Button, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export function HeroBanner() {
  return (
    <Box style={{ background: '#F5F5F5', padding: '0' }}>
      <Container size="xl" style={{ padding: '0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: 'repeat(2, 250px)',
          gap: '6px',
        }}>
          {/* Main Clearance Banner - Large Left - More Vibrant */}
          <div style={{
            gridRow: 'span 2',
            background: 'linear-gradient(135deg, #D81B60 0%, #E91E63 50%, #F50057 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '48px',
          }}>
            {/* Animated background pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              fontSize: '100px',
              fontWeight: 900,
              color: 'rgba(0, 0, 0, 0.08)',
              lineHeight: '100px',
              letterSpacing: '-3px',
              pointerEvents: 'none',
              overflow: 'hidden',
            }}>
              DEALS<br/>DEALS<br/>DEALS<br/>DEALS<br/>DEALS<br/>DEALS
            </div>

            {/* Decorative circles */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(30px)',
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Eyecatching CLEARANCE text */}
              <Text style={{ 
                fontSize: '90px', 
                fontWeight: 900, 
                color: 'white',
                lineHeight: 0.85,
                textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
                letterSpacing: '-4px',
                marginBottom: '8px',
                fontFamily: 'Inter, sans-serif',
              }}>
                CLEARANCE
              </Text>
              
              {/* NEW MARKDOWNS badge */}
              <Box style={{
                display: 'inline-block',
                backgroundColor: '#FDD835',
                color: '#000',
                padding: '6px 16px',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}>
                ⚡ NEW MARKDOWNS TAKEN
              </Box>
              
              {/* Discount section */}
              <div>
                <Text component="span" style={{ 
                  fontSize: '18px', 
                  color: 'white',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  SAVE UP TO
                </Text>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <Text style={{ 
                    fontSize: '120px', 
                    fontWeight: 900, 
                    color: 'white',
                    lineHeight: 1,
                    textShadow: '4px 4px 12px rgba(0,0,0,0.4)',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    70
                  </Text>
                  <Text style={{ 
                    fontSize: '60px', 
                    fontWeight: 900, 
                    color: 'white',
                    lineHeight: 1,
                  }}>
                    %
                  </Text>
                </div>
              </div>
              
              <Text style={{ 
                fontSize: '15px', 
                color: 'rgba(255,255,255,0.95)',
                marginTop: '12px',
                marginBottom: '24px',
                fontWeight: 500,
              }}>
                Don't miss these clearance & closeout items.
              </Text>
              
              <Button
                color="dark"
                radius="xs"
                size="lg"
                rightSection={<IconChevronDown size={18} />}
                style={{
                  fontWeight: 700,
                  backgroundColor: '#000',
                  fontSize: '15px',
                  padding: '12px 32px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                SHOP NOW
              </Button>
            </div>
          </div>

          {/* Top Middle Tile - Holiday Storage */}
          <DealTile
            discount="30% OFF"
            category="Holiday storage."
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400"
            footerText="Select styles."
          />

          {/* Top Right Tile - Activewear */}
          <DealTile
            discount="19.99"
            discountPrefix="Starting at"
            category="Tek Gear® activewear"
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
          />

          {/* Bottom Middle Tile - Bedding */}
          <DealTile
            discount="40% OFF"
            category="Bedding."
            image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"
            footerText="Select styles."
          />

          {/* Bottom Right Tile - Boots */}
          <DealTile
            discount="40% OFF"
            category="Boots."
            image="https://images.unsplash.com/photo-1542840410-8e5e1ee8d038?w=400"
            footerText="Select styles."
          />
        </div>

        {/* Second Row - Activewear Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '6px',
          marginTop: '6px',
        }}>
          {/* Activewear Banner with Brands */}
          <div style={{
            background: '#FFFFFF',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}>
            <div style={{ flex: '0 0 40%' }}>
              <Text size="sm" c="dimmed" fw={500}>Up to</Text>
              <Text style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1, color: '#1A1A1A' }}>
                40<span style={{ fontSize: '28px' }}>%</span> OFF
              </Text>
              <Text style={{ fontSize: '22px', fontWeight: 700, marginTop: '8px', color: '#333' }}>
                Activewear.
              </Text>
              <Text size="xs" c="dimmed" mt="sm">
                Select styles on sale and clearance.<br/>
                Coupons do not apply to select brands.
              </Text>
              
              {/* Brand Logos */}
              <Group gap="sm" mt="lg" wrap="wrap">
                {['Nike', 'Tek Gear', 'UA', 'FLX', 'Adidas', 'NB'].map((brand) => (
                  <Box 
                    key={brand}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#333',
                    }}
                  >
                    {brand}
                  </Box>
                ))}
              </Group>
            </div>
            <div style={{ 
              flex: 1,
              height: '220px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }} />
          </div>

          {/* Family Fashion Tile */}
          <div style={{
            background: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img 
              src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600"
              alt="Family fashion"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              color: 'white',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}>
              <Text style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>
                Family Fashion
              </Text>
              <Text size="xs" c="rgba(255,255,255,0.9)">Select styles.</Text>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

function DealTile({ 
  discount, 
  discountPrefix,
  category, 
  image, 
  footerText 
}: { 
  discount: string;
  discountPrefix?: string;
  category: string;
  image: string;
  footerText?: string;
}) {
  return (
    <div style={{
      background: '#FFFFFF',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Text Content */}
      <div style={{ padding: '20px', flex: '0 0 auto' }}>
        {discountPrefix && (
          <Text size="xs" c="dimmed" fw={500} mb={4}>
            {discountPrefix}
          </Text>
        )}
        <Text style={{ 
          fontSize: discountPrefix ? '36px' : '28px', 
          fontWeight: 900, 
          lineHeight: 1,
          color: '#1A1A1A',
        }}>
          {discount}
        </Text>
        <Text size="sm" fw={700} c="#333" mt={6}>
          {category}
        </Text>
      </div>
      
      {/* Image */}
      <div style={{ 
        flex: 1,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '120px',
      }} />
      
      {/* Footer text */}
      {footerText && (
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '20px',
        }}>
          <Text size="xs" c="rgba(255,255,255,0.95)" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            {footerText}
          </Text>
        </div>
      )}
    </div>
  );
}
