# ---- Base Node ----
FROM node:14 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies  
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build  
WORKDIR /app
COPY . /app
RUN npm run build

# --- Release ----
FROM node:14-alpine AS release  
WORKDIR /app
COPY --from=build /app/build ./
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", ".", "-l", "5000"]
