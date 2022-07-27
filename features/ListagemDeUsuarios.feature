Feature: Listagem de usuarios com gostos em comum.
    Como usuario, preciso ver a lista de usuarios que tem gostos similares ao meu.

Scenario: Exibindo a lista de usuario com gostos em comum
    Given  Eu sou o usuario do sistema, cadastrado com o login "jjjoo" e senha "12345"
    And    minhas escolhas no perfil foram: Interesse: Mulheres, Hobby: treinar e viajar,
    And     Busco por: encontros casuais.
    When   Eu vou para a tela que mostra a listagem de usuarios com base no gostos.
    Then   Consigo ver "Ana Maria", que possui Hobby: treinar e viajar
    e Busco por: encontros casuais.
    And    tambem vejo "Joana Luzia" que possui Hobby: treinar e viajar
    e Busco por: encontros casuais.
    And    tambem vejo "Maria Clara" que possui Hobby: treinar e viajar
    e Busco por: encontros casuais.
