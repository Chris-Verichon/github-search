import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

function LoaderExampleLoader() {
  return (
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
}

export default LoaderExampleLoader;
