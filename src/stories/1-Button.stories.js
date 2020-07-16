import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// export const ButtonStoryDisabled = () => <Button2
//     type={select('버튼타입', {
//         solid: 'solid',
//         line: 'line',
//         text: 'text',
//         link: 'link'
//     }, 'solid')}
//     color={select('색깔', {
//         blue: 'blue',
//         green: 'green',
//         yellow: 'yellow',
//         red: 'red'
//     }, 'blue')}
//     disabled={true}
// />