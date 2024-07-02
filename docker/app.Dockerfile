FROM node:lts-alpine

# Create app directory
WORKDIR /home/node/app

# copy package.json, pnpm-lock.yaml and tsconfig.yaml  if they exist
COPY package.json* pnpm-lock.yaml* tsconfig.json* ./

# Bundle app source
COPY . .

EXPOSE 3000
# install pnpm 
# if package.json does not exist, create it
# install dependencies
# install typescript
# create tsconfig.json if it does not exist
# watch for changes
CMD npm install -g pnpm; \  
    test -f package.json || pnpm init; \ 
    pnpm install; \ 
    pnpm add typescript -D;\ 
    test -f tsconfig.json || pnpm tsc --init; \ 
    pnpm tsc -w; \