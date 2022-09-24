# Back-End

## Entidades

### Game

id
title
bannerUrl

Caso tivesse que fazer upload da imagem:
CDN (Amazon S3) (Content Delivery Network) => Url da imagem

### Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

1:30h -> 90 min
R$179,89 -> 17989

Datas (fuso horário / formatos diferentes) -> 18 Mar 2022 / Mar 18 2022
Pontos flutuantes

## Casos de Uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio