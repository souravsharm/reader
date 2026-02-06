# Text Reader 📖

A simple, clean web app designed to paste text and read it with Safari's Reader Mode for a better mobile reading experience.

## ⭐ Key Features

- ✨ **Smart Paragraph Reconstruction** - Automatically fixes poorly formatted text
- 📱 **Mobile-Optimized** - Perfect for iPhone/iPad reading
- 🎨 **Beautiful UI** - Clean gradient design
- 📖 **Safari Reader Mode Ready** - Semantic HTML for perfect formatting
- 🔒 **Secure** - XSS protection with HTML escaping
- ⚡ **Lightning Fast** - No database, pure client-side processing
- 🔄 **Easy Text Switching** - Paste new content anytime
- 🧠 **Multi-Strategy Algorithm** - Handles any text format gracefully

## 🎯 The Problem It Solves

When you copy text from websites, paragraph spacing is often lost:
- Single newlines become spaces
- Double newlines disappear
- Text becomes one cramped block

**This app fixes that automatically!** It intelligently reconstructs paragraphs using:
1. Double newline detection
2. Sentence-ending heuristics
3. Capital letter detection
4. Aggressive splitting (fallback)

See [SOLUTION_EXPLAINED.md](./SOLUTION_EXPLAINED.md) for technical details.

## Local Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/souravsharm/reader.git
cd reader
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. **Paste your text**: Open the app and paste any text (novel, article, etc.) into the textarea
2. **Click "Read Text →"**: Submit your text
3. **View formatted text**: Your text will be displayed in a clean, readable format
4. **Use Safari Reader Mode**: On iPhone/iPad, tap the "aA" button in Safari to enable Reader Mode for the best reading experience
5. **Paste new text**: Click "← Paste New Text" to submit different content

## Deployment

### Option 1: Deploy to Render (Recommended - Free Tier Available)

1. Push your code to GitHub (see instructions below)
2. Go to [Render.com](https://render.com/) and sign up/login
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: text-reader (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. Click "Create Web Service"
7. Wait for deployment (takes 2-3 minutes)
8. Access your app at the provided URL (e.g., `https://text-reader.onrender.com`)

### Option 2: Deploy to Railway

1. Push your code to GitHub
2. Go to [Railway.app](https://railway.app/) and sign up/login
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect it's a Node.js app
6. Click "Deploy"
7. Once deployed, click "Generate Domain" to get a public URL

### Option 3: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com/) and sign up/login
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
6. Click "Deploy"
7. Access your app at the provided URL

## Pushing to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Text Reader app"

# Add your GitHub repository as remote
git remote add origin https://github.com/souravsharm/reader.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## How It Works

1. **Frontend**: Two HTML pages
   - `index.html`: Text input form
   - `read.html`: Displays the formatted text

2. **Backend**: Express.js server
   - Stores text temporarily in memory
   - Provides API endpoints for submitting and retrieving text
   - Serves static files

3. **Styling**: CSS with responsive design
   - Beautiful gradient design
   - Mobile-optimized
   - Safari Reader Mode friendly

## Technology Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Deployment**: Render/Railway/Vercel (free hosting options)

## Tips for Best Experience

- **On iPhone/iPad**: After the text loads, tap the "aA" button in Safari's address bar and select "Show Reader View" for the optimal reading experience
- **Text formatting**: Separate paragraphs with double line breaks for better formatting
- **Mobile friendly**: The app works great on both desktop and mobile devices

## License

MIT

## Author

Created for easy mobile reading with Safari Reader Mode
