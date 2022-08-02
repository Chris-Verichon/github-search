import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

function ReposResults({ repos }) {
  return (
    <Card.Group itemsPerRow={3}>
      {repos.map((item) => (
        <Card
          key={item.id}
          image={item.owner.avatar_url}
          header={item.name}
          meta={item.owner.login}
          description={item.description}
        />
      ))}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default ReposResults;
