# Use the official Node.js image as the base image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application files into the container
COPY . .

# Build the application if required (uncomment if your app needs building)
# RUN npm run build

# Expose the port the app runs on (default for Node.js apps)
EXPOSE 8080

# Set the default command to start the application
CMD ["npm", "start"]
