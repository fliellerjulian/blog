# Julian Flieller's Personal Website

A modern, responsive personal website featuring AI insights, research papers, and professional connections.

## Features

- **Modern Design**: Clean white and blue color scheme with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Research Papers**: Dynamically updated research papers with search and sorting capabilities
- **Social Integration**: Direct links to Substack, LinkedIn, and X (Twitter)
- **Recommended Reading**: Curated list of essential AI papers and books
- **MongoDB Integration**: Ready for real-time paper updates every 2 hours

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Database**: MongoDB with connection pooling
- **Icons**: Lucide React icons
- **Fonts**: Inter font family

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your MongoDB connection string
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string_here
```

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/papers/        # API routes for research papers
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Header with Substack link
│   ├── SocialLinks.tsx    # Social media connections
│   ├── RecommendedReading.tsx # Curated reading list
│   └── ResearchPapers.tsx # Main papers component with search/sort
├── lib/
│   └── mongodb.ts         # MongoDB connection configuration
└── types/
    └── research.ts        # TypeScript type definitions
```

## Key Components

### Header
- Prominent name display with gradient background
- Animated Substack link with call-to-action
- Professional tagline about AI insights

### Research Papers
- Real-time search across title, authors, abstract, and keywords
- Frontend sorting by date, title, category, or relevance
- Responsive grid layout with paper details
- Auto-refresh capability for new papers
- Visual indicators for update frequency

### Social Links
- Professional LinkedIn and X (Twitter) integration
- Hover effects and smooth transitions
- Clear call-to-action descriptions

### Recommended Reading
- Mix of essential research papers and books
- External links with visual indicators
- Categorized by type (article/book)

## MongoDB Schema

```javascript
// Research Paper Document
{
  _id: ObjectId,
  title: String,
  authors: [String],
  abstract: String,
  url: String,
  publishedDate: Date,
  source: String,
  keywords: [String],
  category: String,
  updatedAt: Date,
  createdAt: Date
}
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to set up your environment variables in your deployment platform.

## Backend Integration

The frontend is ready to work with your paper scraping backend. The API expects:
- Regular updates to the MongoDB `papers` collection
- Papers to include all required fields from the schema
- Automatic refresh every 2 hours as indicated in the UI

## License

This project is for personal use by Julian Flieller.
