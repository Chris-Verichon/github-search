import { Segment, Header } from 'semantic-ui-react';

function NotFound() {
  return (
    <Segment>
      <Header as="h1">Erreur 404</Header>
      <p>OUPS ! La page que vous demandez n'a pas été trouvée !</p>
    </Segment>
  );
}

export default NotFound;
