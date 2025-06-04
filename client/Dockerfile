# Étape 1 : Construire l'application
FROM node:18 AS build

# Créer le dossier de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN yarn install

# Copier tout le projet
COPY . .

# Construire l'application
RUN yarn build

# Étape 2 : Servir l'application
FROM nginx:alpine

# Copier les fichiers construits
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]



