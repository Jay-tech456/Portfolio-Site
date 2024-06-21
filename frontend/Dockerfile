# Use an official Node runtime as a parent image
FROM node:13.12.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Add `/app/node_modules/.bin` to the system's PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Optionally install react-scripts globally if needed
RUN npm install react-scripts@3.4.1 -g --silent

# Copy the rest of the application code to the working directory
COPY . ./

# Start the application
CMD ["npm", "start"]
