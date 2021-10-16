# Desafio Closer

## Descrição do desafio

Yuji Itadori é um Pro que trabalha a bastante tempo com a Closeer na função de exorcista jujutsu, realizando diversos jobs todos os anos. Google Calendar e afins não existem na dimensão onde Yuji vive, por esse motivo ele sentia falta de uma ferramenta em que pudesse marcar e organizar seus jobs agendados, sabendo o dia e a hora de início de cada job e tendo um histórico de todos os jobs realizados no ano.
Foi aí que Yuji decidiu pedir sua ajuda para desenvolver uma mini plataforma onde ele pudesse cadastrar seus jobs separando-os em 3 categorias:

Jobs que já iniciaram, quando a data e hora do job já ultrapassou a data e hora atual.
Jobs que estão próximos de iniciar, quando a diferença de tempo entre a data e hora do início do job e a data e hora atual é menor que 12 horas.
Jobs para o futuro, quando qualquer job marcado iniciará pelo menos 12 horas da data e hora atual.

## Requisitos

- Seguir interface proposta: https://bit.ly/3AEcym7
- Os dados de Yuji devem ser consumidos de um arquivo .JSON, simulando o consumo de dados de uma API.
- A agenda de Yuji apenas guarda as datas dos jobs do ano corrente, dessa forma, como estamos no ano de 2021, a agenda não aceitará datas cujos anos sejam [...2018, 2019, 2020, 2022, 2023...]
- Yuji é um pouco distraído e ganancioso e provavelmente tentará colocar vários jobs em uma mesma data - hora. Quando Yuji tentar fazer isso, um alerta deve ser exibido informando que há um conflito e que Yuji já tem um job para aquela data - hora agendado, afinal, Yuji não desenvolveu sua expansão de domínio para poder estar em dois lugares ao mesmo tempo.
- Ao adicionar um novo job na agenda, o formulário deve ser resetado, para estar pronto para uma nova inserção.
- A cada novo job inserido, a listagem de jobs na agenda deve ser ordenada de forma cronológica.
- Ao provocar um :hover nos círculos indicadores de categoria da agenda e de cada job, o Tooltip (um balão flutuante informativo) corresponde deve ser exibido.
- O projeto deve ser construído utilizando React

**Diferencial:**

Atualizar a data e hora atual no Header, semelhante a um relógio.
Atualizar a listagem na agenda periodicamente, para modificar os status de cada job agendado (já iniciou, próximo de iniciar, para o futuro) de acordo com a data - hora corrente.
