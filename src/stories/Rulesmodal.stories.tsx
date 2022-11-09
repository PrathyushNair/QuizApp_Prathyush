
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rulesmodal from "../Components/Rulesmodal"


export default {
  title: 'Component/Rulesmodal',
  component:Rulesmodal,

} as ComponentMeta<typeof Rulesmodal>;

const Template: ComponentStory<typeof Rulesmodal> = (args) => (<Rulesmodal {...args} />);

export const Fontcolor = Template.bind({});

Fontcolor.args = {
    modalTextColor: "red"
};

export const Field = Template.bind({});

Field.args={
   bgColor:"white",
   modalTextColor: "red"
}

