# Utiliser une image officielle Python
FROM python:3.11-slim

RUN pip install poetry==2.1.3
# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans l'image
COPY pyproject.toml ./

RUN poetry config virtualenvs.create false
RUN poetry install --no-root

COPY . .

# Exposer le port Django
EXPOSE 8000

# Commande par défaut pour lancer le serveur Django
CMD ["poetry", "run", "python", "manage.py", "runserver", "--bind", "0.0.0.0:8000"]
