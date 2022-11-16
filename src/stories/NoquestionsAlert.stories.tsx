import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import {NoquestionsAlert} from "../Components/Alerts"
import { Alertschild } from '../Components/Alertschild';
import { store } from '../Reducer/store';

export default {
  title: 'Component/NoquestionsAlert',
  component:NoquestionsAlert,
  argTypes:{handleUndo:{action:"clicked undo"}}

} as ComponentMeta<typeof NoquestionsAlert>;

const Template: ComponentStory<typeof NoquestionsAlert> = (args) => (<Provider store={store}><Alertschild {...args} /></Provider> );

export const AlertProps = Template.bind({});

AlertProps.args = {
   text:"Refresh your browser",
   alertBgColor:"#f50057",
   alertColor:"white",
   fs:"16px"
};

