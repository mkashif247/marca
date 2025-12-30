import { Container, Box, Text } from '@mantine/core';

const categories = [
  { name: 'Women', icon: '👗', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100' },
  { name: 'Men', icon: '👔', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=100' },
  { name: 'Kids', icon: '🧸', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=100' },
  { name: 'Electronics', icon: '📱', image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=100' },
  { name: 'Home & Living', icon: '🏠', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100' },
  { name: 'Beauty', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100' },
  { name: 'Sports', icon: '⚽', image: 'https://images.unsplash.com/photo-1461896836934- voices?w=100' },
  { name: 'Automotive', icon: '🚗', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=100' },
  { name: 'Jewelry', icon: '💎', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100' },
  { name: 'Grocery', icon: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=100' },
  { name: 'Baby', icon: '👶', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=100' },
  { name: 'Office', icon: '📎', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100' },
];

export function CategoryIcons() {
  return (
    <Box style={{ background: '#FFFFFF', padding: '16px 0' }}>
      <Container size="xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
          gap: '12px',
          justifyItems: 'center',
        }}>
          {categories.map((category) => (
            <CategoryItem key={category.name} {...category} />
          ))}
        </div>
      </Container>
    </Box>
  );
}

function CategoryItem({ name, image }: { name: string; icon: string; image: string }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        padding: '8px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Rounded Square Image Container - Noon Style */}
      <Box
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#F5F5F5',
          border: '1px solid #E5E5E5',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <img 
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.2s ease',
          }}
          onError={(e) => {
            // Fallback to colored background if image fails
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </Box>
      
      {/* Category Name */}
      <Text 
        size="sm" 
        fw={500} 
        ta="center"
        style={{
          color: '#333',
          lineHeight: 1.3,
          maxWidth: '90px',
        }}
      >
        {name}
      </Text>
    </Box>
  );
}
