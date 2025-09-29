# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the Next.js app with standalone output configured in next.config.ts
RUN npm run build

# Stage 2: Create the runtime image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the standalone build output and production dependencies
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

EXPOSE 3000

# Use non-root user for security
USER node

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the app with the standalone server
CMD ["node", "server.js"]
