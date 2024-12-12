# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . /app

# Expose the port the app runs on
EXPOSE 3000

RUN chmod 555 .

# Command to run the application
CMD ["node", "cigar.js"]
