# Sales Dashboard

A professional sales analytics dashboard built with React, TypeScript, and modern web technologies. This project is inspired by Material Dashboard Pro and implements a fully responsive, production-ready interface.

## 🚀 Features

- 📊 Comprehensive Sales Analytics
  - Real-time sales tracking
  - Customer metrics
  - Revenue analysis
  - Age demographics
  - Geographical distribution

- 📱 Responsive Design
  - Desktop (1200px+)
  - Tablet (768px - 1199px)
  - Mobile (< 768px)
  - Collapsible sidebar
  - Adaptive layouts

- 📈 Interactive Data Visualization
  - Line charts for revenue trends
  - Pie charts for channel distribution
  - Bar charts for age demographics
  - Country-wise sales tables

- 🎨 Modern UI/UX
  - Material Design principles
  - Consistent color scheme
  - Smooth transitions
  - Intuitive navigation

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Type Checking**: TypeScript
- **Code Quality**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── Header.tsx         # Top navigation bar
│   ├── StatsCard.tsx      # Metric display cards
│   ├── ChannelsChart.tsx  # Sales channels pie chart
│   ├── RevenueChart.tsx   # Revenue line chart
│   ├── SalesByAge.tsx     # Age demographics bar chart
│   └── SalesByCountry.tsx # Country-wise sales table
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🎯 Key Features Implementation

### Responsive Design
- CSS Grid and Flexbox for layouts
- Mobile-first approach
- Breakpoint-specific optimizations
- Touch-friendly interactions

### Performance Optimizations
- Component lazy loading
- Memoized computations
- Optimized chart rendering
- Asset optimization

### Data Visualization
- Interactive charts
- Real-time updates
- Custom tooltips
- Responsive scaling

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 🔧 Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📱 Responsive Design Details

### Desktop (1200px+)
- Full sidebar visible
- Multi-column layout
- Large interactive charts
- Detailed data tables

### Tablet (768px - 1199px)
- Collapsible sidebar
- Adapted grid layout
- Optimized chart sizes
- Scrollable tables

### Mobile (< 768px)
- Hidden sidebar with toggle
- Single column layout
- Touch-optimized controls
- Simplified visualizations

## 🎨 Design System

### Colors
- Primary: #1A237E (Deep Blue)
- Secondary: #E91E63 (Pink)
- Success: #4CAF50 (Green)
- Neutral: #607D8B (Blue Grey)
- Background: #f8f9fa (Light Grey)

### Typography
- Font: Inter, Helvetica, Arial, sans-serif
- Weights: 300, 400, 500, 600, 700
- Responsive sizing

### Components
- Cards with subtle shadows
- Rounded corners
- Consistent spacing
- Clear hierarchy

## 🔒 Best Practices

- TypeScript for type safety
- Component composition
- Performance optimization
- Clean code principles
- Consistent styling
- Proper error handling