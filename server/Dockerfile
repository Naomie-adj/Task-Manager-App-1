# Utiliser une image officielle Python
FROM python:3.11-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans l'image
COPY poetry.lock pyproject.toml ./

# Installer Poetry
RUN pip install poetry
COPY . .

# Exposer le port Django
EXPOSE 8000

# Commande par défaut pour lancer le serveur Django
CMD ["poetry", "run", "python", "manage.py", "runserver", "--bind", "0.0.0.0:8000"]
