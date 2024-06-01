# backend2/Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port (assuming your backend listens on port 3000)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]
