FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Bundle the app source
COPY . ./

# Install dependencies
RUN npm install

# Build the app

RUN npm run build 

EXPOSE 5000

CMD ["node", "dist/index.js"]
