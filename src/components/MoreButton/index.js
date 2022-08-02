import PropTypes from 'prop-types';
import { Divider, Container, Button } from 'semantic-ui-react';

function MoreButton({ loadMore }) {
  return (
    <Container textAlign="center">
      <Divider hidden />
      <Button onClick={loadMore}>Plus de résultats</Button>
    </Container>
  );
}

MoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default MoreButton;
