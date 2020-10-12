FROM areklis909/stegano-images:0.0.2

ENV FLASK_APP app

COPY ./requirements.txt .

RUN apt-get -y update \
    && apt-get -y install python3 python3-pip && rm -rf /var/lib/apt/lists/*

RUN pip3 install -r ./requirements.txt && \
    mkdir to_decode && mkdir decoded && \
    mkdir output_images && mkdir images && \
    mkdir app

COPY ./app/* ./app/

WORKDIR /app

EXPOSE 5000

ENTRYPOINT [ "flask" ]

CMD ["run", "--host=0.0.0.0", "--port=5000"]





