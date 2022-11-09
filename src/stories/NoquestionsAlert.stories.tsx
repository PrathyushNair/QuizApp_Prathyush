import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import {NoquestionsAlert} from "../Components/Alerts"
import { store } from '../Reducer/store';

export default {
  title: 'Component/NoquestionsAlert',
  component:NoquestionsAlert,
  argTypes:{handleUndo:{action:"clicked undo"}}

} as ComponentMeta<typeof NoquestionsAlert>;

const Template: ComponentStory<typeof NoquestionsAlert> = (args) => (<Provider store={store}><NoquestionsAlert {...args} /></Provider> );

export const AlertProps = Template.bind({});

AlertProps.args = {
   alertBgColor:"#f50057",
   alertColor:"white",
   fs:"16px"
};

