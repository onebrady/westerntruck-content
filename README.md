# WesternTruck SEO Report

A professional, visually impressive SEO analytics report built with React, Vite, Chart.js, and Tailwind CSS. This application provides detailed technical SEO performance insights for WesternTruck.com.

## Features

- **Professional Design**: Clean, modern UI with WesternTruck branding
- **Interactive Charts**: Chart.js integration with horizontal bar charts
- **Smooth Animations**: Framer Motion for engaging user experience
- **Responsive Layout**: Optimized for all device sizes
- **Tabbed Navigation**: Easy navigation between different report sections
- **Real-time Data**: Dynamic KPI tracking and performance metrics

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Interactive charts and graphs
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd westerntruck-seo-report
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Main header with branding
│   ├── TabNavigation.jsx       # Tab navigation component
│   ├── TechnicalHighlights.jsx # KPI charts and metrics
│   └── CriticalImprovements.jsx # Improvement recommendations
├── data/
│   └── reportData.js           # Report data and configuration
├── App.jsx                     # Main application component
├── main.jsx                    # React entry point
└── index.css                   # Global styles and Tailwind
```

## Customization

### Adding New Data

Edit `src/data/reportData.js` to add new KPIs, improvements, or modify existing data.

### Styling

The application uses Tailwind CSS with custom colors matching WesternTruck branding. Modify `tailwind.config.js` to adjust the color scheme.

### Charts

Chart.js configurations can be modified in the respective component files. The current implementation includes horizontal bar charts for KPI visualization.

## SEO Best Practices

This report application follows SEO best practices:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-responsive design
- Accessible color contrast
- Clean URL structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to WesternTruck and should not be distributed without permission.

## Support

For technical support or questions about this report, please contact the development team. 