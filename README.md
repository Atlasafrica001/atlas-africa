# Atlas Africa - Coming Soon Page

## 📋 Overview
Frontend implementation of the Atlas Africa Coming Soon / Waitlist page.

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React hooks (local state)

## 📁 Project Structure
```
atlas-africa/
├── app/
│   ├── page.tsx              # Coming Soon page (main)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer with contact info
│   └── CountdownTimer.tsx    # Live countdown component
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Design Features Implemented
✅ Fixed header with logo and navigation  
✅ "Coming Soon" badge  
✅ Bold headline with Atlas Africa branding  
✅ **Studio lights background** (left and right decorative lights)  
✅ Cream background (#F5F1E8)  
✅ **Live countdown timer starting at 37 days**  
✅ Email capture form with "Notify Me" CTA  
✅ Portfolio preview grid (6 boxes)  
✅ Brand statement section ("We Don't Just Tell Stories")  
✅ Folder graphic visual element  
✅ Footer with brand info and social links  

## 🎯 Color Palette (from design)
- **Atlas Navy:** `#0A2E5C`
- **Atlas Gold:** `#D4AF37`
- **Atlas Cream:** `#F5F1E8`

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Navigate to project directory
cd atlas-africa

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📝 Notes

### TODO: Backend Integration Points
The following are placeholder functions that need backend implementation:

1. **Email Waitlist Submission** (`app/page.tsx`)
   - Currently logs to console
   - Need API endpoint: `POST /api/waitlist`
   - Expected payload: `{ email: string }`

2. **Navigation Links** (Header)
   - `/about` - About page (not yet implemented)
   - `/blog` - Blog page (not yet implemented)
   - `/consultation` - Consultation page (not yet implemented)

### Countdown Timer
- **Starts at 37 days** (can be adjusted in `components/CountdownTimer.tsx`)
- Counts down in real-time: days, hours, minutes, seconds
- Auto-updates every second
- For production, calculate from a target timestamp

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components are fully responsive

## ✨ Component Details

### Header
- Fixed position navigation
- Logo with SVG icon
- Links: About, Blog, Book a Consultation

### CountdownTimer
- Real-time countdown using React hooks
- Auto-updates every second
- Format: DD:HH:MM:SS

### Footer
- Brand information and tagline
- Contact details (location, phone, email)
- Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- Copyright and legal links

## 🔧 Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'atlas-navy': '#0A2E5C',
  'atlas-gold': '#D4AF37',
  'atlas-cream': '#F5F1E8',
}
```

### Update Launch Date
Edit `components/CountdownTimer.tsx` initial state or calculate from target date.

## 📄 License
© 2025 Atlas Africa - All rights reserved

---

**Status:** ✅ Coming Soon Page - COMPLETE  
**Next Steps:** Await approval before implementing Home Page
