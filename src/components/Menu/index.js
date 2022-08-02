import { Menu as MenuSemanticUI } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <MenuSemanticUI>
      <MenuSemanticUI.Item
        name="Recherche"
        to="/"
        as={NavLink}
      />

      <MenuSemanticUI.Item
        name="FAQ"
        to="/faq"
        as={NavLink}
      />

    </MenuSemanticUI>
  );
}

export default Menu;
