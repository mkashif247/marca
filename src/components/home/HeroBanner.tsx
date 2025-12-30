import { Box, Text, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export function HeroBanner() {
  return (
    <>
      <style>{`
        .masonry-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: calc((700px - 6px) / 7);
          gap: 6px;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .masonry-item {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          border-radius: 12px;
          overflow: hidden;
        }
        .masonry-item-large {
          grid-row: span 7;
          height: 700px;
        }
        .masonry-item-medium {
          grid-row: span 4;
          height: calc((700px - 6px) / 7 * 4);
        }
        .masonry-item-small {
          grid-row: span 3;
          height: calc((700px - 6px) / 7 * 3);
        }
        .masonry-item-tall {
          grid-row: span 7;
          height: 700px;
        }
        @media (max-width: 1200px) {
          .masonry-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .masonry-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .masonry-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <Box style={{ background: '#F5F5F5', padding: '8px', margin: '0', marginBottom: '0', overflow: 'hidden', width: '100%' }}>
        <div style={{ width: '100%', padding: '0', margin: '0', overflow: 'hidden' }}>
          {/* Masonry Layout Container */}
          <div className="masonry-container" style={{ width: '100%', margin: '0', padding: '0' }}>
            {/* 
            Banner 1: Main CLEARANCE (Large)
            Image Specs:
            - Orientation: Landscape background (decorative only)
            - Dimensions: ~800x600px minimum
            - Style: Can use gradient overlay (current pink gradient works well)
            - Subject: Abstract/texture or shopping-themed background
            - Note: Text-heavy design, image is secondary
          */}
            <div className="masonry-item masonry-item-large" style={{
              background: 'linear-gradient(135deg, #D81B60 0%, #E91E63 50%, #F50057 100%)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '32px',
              height: '700px',
              width: '100%',
              margin: '0',
              boxSizing: 'border-box',
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
                DEALS<br />DEALS<br />DEALS<br />DEALS<br />DEALS<br />DEALS
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

              <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                margin: '0',
                padding: '0',
                lineHeight: '1',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* CLEARANCE text */}
                  <div style={{
                    fontSize: '64px',
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: 0.9,
                    textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '-3px',
                    marginTop: '0',
                    fontFamily: 'Inter, sans-serif',
                    display: 'block',
                  }}>
                    CLEARANCE
                  </div>

                  {/* NEW MARKDOWNS badge */}
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '1px',
                    marginTop: '0',
                    display: 'block',
                    lineHeight: '1.2',
                  }}>
                    NEW MARKDOWNS TAKEN
                  </div>

                  {/* SAVE UP TO text */}
                  <div style={{
                    fontSize: '15px',
                    color: 'white',
                    fontWeight: 600,
                    marginTop: '0',
                    display: 'block',
                    lineHeight: '1.2',
                  }}>
                    SAVE UP TO
                  </div>

                  {/* 70% */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '0', lineHeight: '0.85' }}>
                    <div style={{
                      fontSize: '130px',
                      fontWeight: 900,
                      color: 'white',
                      lineHeight: 0.85,
                      textShadow: '4px 4px 12px rgba(0,0,0,0.4)',
                      fontFamily: 'Inter, sans-serif',
                      display: 'block',
                      margin: '0',
                      padding: '0',
                    }}>
                      70
                    </div>
                    <div style={{
                      fontSize: '60px',
                      fontWeight: 900,
                      color: 'white',
                      lineHeight: 0.85,
                      display: 'block',
                      margin: '0',
                      padding: '0',
                    }}>
                      %
                    </div>
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.95)',
                    marginTop: '0',
                    fontWeight: 500,
                    display: 'block',
                    lineHeight: '1.4',
                  }}>
                    Don't miss these clearance & closeout items.
                  </div>
                </div>

                <Button
                  color="dark"
                  radius="xs"
                  size="md"
                  rightSection={<IconChevronDown size={16} />}
                  style={{
                    fontWeight: 700,
                    backgroundColor: '#000',
                    fontSize: '14px',
                    padding: '10px 24px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s',
                    alignSelf: 'flex-start',
                    marginTop: '12px',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  SHOP NOW
                </Button>
              </div>
            </div>

            {/* 
            Banner 4: Winter 2025 Editorial (Portrait)
            Image Specs:
            - Orientation: Portrait (tall)
            - Dimensions: 400x800px minimum
            - Subject: Fashion model in winter/seasonal outfit, full-body shot
            - Mood: Editorial, trendy, bold colors (yellow outfit works great)
            - Composition: Vertical, model centered, interesting background
          */}
            <div className="masonry-item masonry-item-tall" style={{ overflow: 'hidden', height: '700px', width: '100%', margin: '0', padding: '0' }}>
              <PortraitTile
                title="Winter 2025"
                subtitle="EDITORIAL"
                ctaText="Discover"
                image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop"
              />
            </div>

            {/* 
            Banner 3: Bedding
            Image Specs:
            - Orientation: Landscape/Square
            - Dimensions: 500x400px minimum
            - Subject: Styled bedroom, cozy bed with layered bedding
            - Mood: Comfortable, inviting, neutral tones
            - Composition: Room shot showing bed as focal point
          */}
            <div className="masonry-item masonry-item-medium" style={{ overflow: 'hidden', height: 'calc((700px - 6px) / 7 * 4)', width: '100%', margin: '0', padding: '0' }}>
              <FullImageTile
                discount="40% OFF"
                category="Bedding."
                image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop"
                footerText="Select styles."
              />
            </div>

            {/* Portrait Tile - Trending (Different female image) */}
            <div className="masonry-item masonry-item-small" style={{ overflow: 'hidden', height: 'calc((700px - 6px) / 7 * 2.8)', width: '100%', margin: '0', padding: '0' }}>
              <PortraitTile
                title="Trending Now"
                ctaText="Shop Now"
                image="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop"
              />
            </div>

          </div>
        </div>
      </Box>
      <div style={{ height: '0', clear: 'both' }}></div>
    </>
  );
}

// Portrait-oriented tile (tall)
function PortraitTile({
  title,
  subtitle,
  ctaText,
  image,
}: {
  title: string;
  subtitle?: string;
  ctaText: string;
  image: string;
}) {
  return (
    <div style={{
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      display: 'block',
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Overlay Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '24px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
      }}>
        {subtitle && (
          <Text style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#A78BFA',
            letterSpacing: '2px',
            marginBottom: '4px',
          }}>
            {subtitle}
          </Text>
        )}
        <Text style={{
          fontSize: '24px',
          fontWeight: 900,
          color: 'white',
          marginBottom: '8px',
        }}>
          {title}
        </Text>
        <Text style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'white',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          {ctaText} →
        </Text>
      </div>
    </div>
  );
}

// Full image tile with text overlay on top
function FullImageTile({
  discount,
  category,
  image,
  footerText,
}: {
  discount: string;
  category: string;
  image: string;
  footerText?: string;
}) {
  return (
    <div style={{
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      display: 'block',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <img
        src={image}
        alt={category}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Text Overlay on Top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
      }}>
        <Text style={{
          fontSize: '32px',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          marginBottom: '4px',
        }}>
          {discount}
        </Text>
        <Text style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'white',
          textShadow: '0 2px 6px rgba(0,0,0,0.5)',
        }}>
          {category}
        </Text>
      </div>

      {/* Footer text overlay on bottom */}
      {footerText && (
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '24px',
        }}>
          <Text size="xs" c="rgba(255,255,255,0.95)" fw={600} style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
            {footerText}
          </Text>
        </div>
      )}
    </div>
  );
}

