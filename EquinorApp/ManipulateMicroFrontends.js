import React from 'react';
import { Button, Typography } from '@equinor/eds-core-react';

const IncDecDance = () => (
  <div style={{ margin: '4vw' }}>
    <Typography variant="h4">
      Increment/decrement a counter shared among microservices
    </Typography>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button onClick={() => window.myapp.incrementor()}>Increment</Button>
      <Button onClick={() => window.myapp.decrementor()} color="danger">
        Decrement
      </Button>
    </div>
  </div>
);
export default IncDecDance;
