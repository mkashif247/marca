import { Container, Box, Text, Title } from '@mantine/core';

const categories = [
  { name: 'Women', icon: '👗', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop' },
  { name: 'Men', icon: '👔', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=200&h=200&fit=crop' },
  { name: 'Kids', icon: '🧸', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop' },
  { name: 'Electronics', icon: '📱', image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=200&h=200&fit=crop' },
  { name: 'Home & Living', icon: '🏠', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=200&fit=crop' },
  { name: 'Beauty', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop' },
  { name: 'Sports', icon: '⚽', image: 'https://images.unsplash.com/photo-1461896836934-0fe56bd772c9?w=200&h=200&fit=crop' },
  { name: 'Automotive', icon: '🚗', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=200&h=200&fit=crop' },
  { name: 'Jewelry', icon: '💎', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
  { name: 'Grocery', icon: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop' },
  { name: 'Baby', icon: '👶', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop' },
  { name: 'Office', icon: '📎', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop' },
];

export function CategoryIcons() {
  return (
    <Box style={{
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <Box ta="center" mb={48}>
          <Text
            size="sm"
            fw={700}
            c="#7C3AED"
            tt="uppercase"
            style={{
              letterSpacing: '3px',
              marginBottom: '8px',
            }}
          >
            Shop by Category
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
            Discover Your Style
          </Title>
        </Box>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '24px',
          justifyItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {categories.map((category, index) => (
            <CategoryItem key={category.name} {...category} index={index} />
          ))}
        </div>
      </Container>
    </Box>
  );
}

function CategoryItem({ name, image, index }: { name: string; icon: string; image: string; index: number }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '20px',
        borderRadius: '20px',
        width: '100%',
        position: 'relative',
        animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {/* Enhanced Image Container with gradient border */}
      <Box
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 0 0 2px rgba(226, 232, 240, 0.5)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(124, 58, 237, 0.25), 0 0 0 3px rgba(167, 139, 250, 0.3)';
          e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)';
          const overlay = e.currentTarget.querySelector('.category-overlay') as HTMLElement;
          if (overlay) {
            overlay.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 0 0 2px rgba(226, 232, 240, 0.5)';
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          const overlay = e.currentTarget.querySelector('.category-overlay') as HTMLElement;
          if (overlay) {
            overlay.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0) 0%, rgba(167, 139, 250, 0) 100%)';
          }
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="category-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0) 0%, rgba(167, 139, 250, 0) 100%)',
            transition: 'background 0.4s ease',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            zIndex: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </Box>

      {/* Enhanced Category Name */}
      <Text
        size="sm"
        fw={700}
        ta="center"
        style={{
          color: '#0F172A',
          lineHeight: 1.4,
          maxWidth: '120px',
          transition: 'all 0.3s ease',
          letterSpacing: '0.2px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#7C3AED';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#0F172A';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {name}
      </Text>
    </Box>
  );
}
