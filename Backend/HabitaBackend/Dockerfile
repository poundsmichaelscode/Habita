FROM python:3.12-slim

WORKDIR /usr/src/HabitaBackend

ENV PYTHONUNBUFFERED=1

RUN apt-get update \ 
    && apt-get install -y netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY entrypoint.sh .

RUN sed -i 's/\r$//g' entrypoint.sh \
    && chmod +x entrypoint.sh

COPY . .

ENTRYPOINT ["./entrypoint.sh"]
