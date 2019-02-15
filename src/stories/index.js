import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import '@hmh/text-input';
import '@hmh/plot-graph';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('<text-input>', module).add('Default', () => <text-input />);
storiesOf('<plat-graph>', module).add('Default', () => (
    <plot-graph>
        <coordinate-system slot="graph-axis">
            <div slot="axis" color="red" direction="x" min="-5" max="5" axis-visibility="visible" scale-visibility="visible" other-axes-crossing-point="0">
                Time
            </div>
            <div slot="axis" color="green" direction="y" min="-1" max="1" axis-visibility="visible" scale-visibility="visible" other-axes-crossing-point="0">
                Frequency
            </div>
        </coordinate-system>

        <div slot="equation-items" class="equation-item" color="red" equation-xmin="0" equation-xmax="360" equation-ymin="-1" equation-ymax="1" step=".1">
            Math.sin(x)
        </div>
        <div slot="equation-items" class="equation-item" color="blue" equation-xmin="0" equation-xmax="360" equation-ymin="-1" equation-ymax="1" step=".1">
            Math.cos(x)
        </div>
    </plot-graph>
));
