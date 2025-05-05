import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema:'./config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_ANbJst24npRl@ep-misty-sun-a56pwix5-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});

