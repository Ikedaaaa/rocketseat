
# NLW Setup

Aplicação desenvolvida junto a Rocketseat durante o NLW Setup.

Foi criada uma aplicação para criar hábitos para serem realizados no ano de 2023.

Cada quadrado representa um dia e os hábitos são criados para serem realizados em dias da semana específicos, à partir da data que foram criados.


## Pendências Web
### Achei necessário
    Abaixo segue uma lista das pendências na web que eu achei necessário finalizar para ficar de acordo com meu gosto (Itens também presentes em HabitDay.tsx e HabitsList.tsx da web):

 - (Talvez tenha dado colateral) (Feito) Separar em componente Checkbox.Root em um componente a parte
 - (Feito) Em HabitDay.tsx da web: Criar condição para destacar o dia atual e também quando todos os hábitos forem completos, como fiz no mobile
 - (Feito) Procurar exatamente qual seria a tonalidade para "Ouro": {Achei as cores e criei no config do tailwind (gold: '#FFD700', goldenrod: '#daa520'), mas não ficaram muito legal}
 - (Pulado, pois o próprio Popover não está preparado para isso: https://github.com/radix-ui/primitives/discussions/1081) tentar colocar ScrollView ao redor do componente <HabitsList />, pois com muitos hábitos, sai da tela
 - (Acho que vou pular) Tentar jogar todas as propriedades de focus em uma propriedade só, pois estão se repetindo muito no código:
    - (focus:outline-none - nos checkboxes ela não é usada) focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background
    - Talvez criar uma propriedade css do tailwind recebendo todos os outros, e mais uma concatenando o focus:outline-none
 - Seguir o exemplo do mobile de criar componente <HabitsEmpty /> para quando não houver hábitos no dia.
 - Seguir exemplo do mobile de indicar que não pode editar hábitos de dias passados, com opacity 50 e mensagem
 - Criar condição para que ao clicar em datas passadas sem hábitos, ao invés de dizer que não pode editar hábitos em datas passadas, dizer que não haviam sido criados hábitos para esse dia até essa data
 - Implementar alerta (não um alert(), um componente do radix) ao tentar criar hábito sem descrição e dias marcados
 - (Talvez fazer) Internacionalização: Permitir troca de linguagem para Inglês, criando arquivos lang para substituir os textos fixos da aplicação

### Levando o projeto para o próximo nível
    Itens que o Diego disse que seriam bons implementar para levar o projeto para o próximo nível, treinar mais afundo e diferenciar o projeto desenvolvido do de outras pessoas.

#### Autenticação
    Poder se autenticar no projeto, tomando cuidado pois a lista de hábitos deixaria de ser global e passaria a ser por usuário. Para isso, seria necessário ajustar a estrutura do banco de dados e alguns relacionamentos
- Ferramentas: Firebase, Auth0 (Trazem a parte de autenticação semi-pronta)

#### Notificões Push / Service Workers
- Notificações Push no mobile usando Expo;
- Service Workers para a web, para notificações no browser, incluindo quando a aplicação estiver fechada

#### Perfil Público com gráfico de resumo
    Após adicionar a autenticação, ter um perfil público do usuário, como se fosse o github, onde o gráfico está publicamente disponível, só não permitindo ver os hábitos.
    
## Pendências Mobile

### Achei necessário
    Abaixo segue uma lista das pendências no mobile que eu achei necessário finalizar para ficar de acordo com meu gosto (Itens também presentes em HabitDay.tsx da web):
 - Procurar a tonalidade de "Ouro" para o dia com todos os hábitos completos
 - Criar condição para que ao clicar em datas passadas sem hábitos, ao invés de dizer que não pode editar hábitos em datas passadas, dizer que não haviam sido criados hábitos para esse dia até essa data
 - Em New.tsx, implementar um loading com overlay, com fundo escurecido, meio transparente (opacity), enquanto aguarda a resposta do servidor, para que, como fiz um teste, ao clicar no botão de criar novo hábito quando tinha derrubado o server, parece que não aconteceu nada, mas a requisição estava agurdando resposta. Mas não tinha como saber que a requisição foi feita de fato. Só depois de uns 30 segundos que deu a mensagem de que deu erro.

### Levando o projeto para o próximo nível
    Itens que o Rodrigo disse que seriam bons implementar para levar o projeto para o próximo nível, treinar mais afundo e diferenciar o projeto desenvolvido do de outras pessoas.

#### Autenticação Social
    Adicionar autenticação social, usando login com conta google

#### Notificões Locais
    Para lembrar o usuário que tem hábitos esperando para serem concluídos.