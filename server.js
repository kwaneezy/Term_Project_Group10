import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';

async function startServer() {
  if (isDev) {
    // Development mode - use Vite's dev server
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    
    app.use(vite.middlewares);
    
    console.log('\n🚀 PhoneHub is running in DEVELOPMENT mode');
    console.log(`📱 Open your browser at: http://localhost:${PORT}\n`);
  } else {
    // Production mode - serve built files
    app.use(express.static(path.join(__dirname, 'dist')));
    
    // Handle client-side routing - send index.html for all routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
    
    console.log('\n🚀 PhoneHub is running in PRODUCTION mode');
    console.log(`📱 Open your browser at: http://localhost:${PORT}\n`);
  }

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('❌ Error starting server:', err);
  process.exit(1);
});
