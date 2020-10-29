import React from 'react';
import { render } from 'react-dom';
import { Button, Typography, TopBar, Icon } from '@equinor/eds-core-react';
import IncDecDance from './ManipulateMicroFrontends';
const App = () => (
  <div style={{ margin: '5vh' }}>
    <TopBar>
      <TopBar.Header>Equinor eksisterende frontend</TopBar.Header>
      <TopBar.CustomContent>
        <input type="search" />
      </TopBar.CustomContent>
      <TopBar.Actions>Equinor komponenter</TopBar.Actions>
    </TopBar>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <IncDecDance />
      <div>
        <Typography variant="h4">Buttons</Typography>

        <Typography variant="h5">Contained (default)</Typography>

        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button disabled>Disabled</Button>

        <Typography variant="h5">Outlined</Typography>

        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="danger">
          Danger
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>

        <Typography variant="h5">Ghost</Typography>

        <Button variant="ghost">Primary</Button>
        <Button variant="ghost" color="secondary">
          Secondary
        </Button>
        <Button variant="ghost" color="danger">
          Danger
        </Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
