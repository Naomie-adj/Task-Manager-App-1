# Étape 1 : Construire l'application
FROM node:18 AS build

# Créer le dossier de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .



