# Julian Flieller's Personal Website

A modern, responsive personal website featuring AI insights, research papers, and professional connections.

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Database**: MongoDB with connection pooling
- **Icons**: Lucide React icons
- **Fonts**: Inter font family
- **Scraping**: Python
- **Backend**: AWS Lambda that get triggerd via Eventbridge

## Run locally:

### Frontend

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

### Backend

TODO

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

## License

This project is for personal use by Julian Flieller.
