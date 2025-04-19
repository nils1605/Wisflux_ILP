# Use official Node image
FROM node:18

# Create app directory
WORKDIR /app

# Copy only package files to install dependencies
COPY package*.json ./

# Install dependencies inside the image
RUN npm install

# Copy the rest of the app (overwritten later by volume for hot reload)
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start the React dev server
CMD ["npm", "start"]
