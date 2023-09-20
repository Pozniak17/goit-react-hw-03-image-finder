export const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    orange: '#ffa500',
    red: '#f44336',
    blue: '2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 100, 128, 256],
  sizes: [100, 300, 400],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    big: '12px',
    round: '50%',
  }, // це для margin, padding
  // spacing: 4,
  spacing: value => `${5 * value}px`,

  shadows: {
    standart: '10px 10px 8px 2px rgba(0, 0, 0, 0.3)',
  },
};
