
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { QuizDetails } from '../Components/QuizDetails';
import { Provider } from 'react-redux';
import { store } from '../Reducer/store';


export default {
  title: 'Component/QuizDetails',
  component: QuizDetails,

} as ComponentMeta<typeof QuizDetails>;

const Template: ComponentStory<typeof QuizDetails> = (args) => (<Provider store={store}><QuizDetails {...args} /></Provider>);

export const Blackborder = Template.bind({});

Blackborder.args = {
  marginTop :"200px",
  indiDivMarginTop :"20px",
  bordercolor :"black",
  borderRadius :4,
  fs :16,
  onFocusColor :"green",
  buttonFontSize :16,
  buttonColor :"white",
  buttonBackgroundColor :"blue",
  onFocusBoxShadow :"red",
  selectTagColor:"black"
};
export const Blueborder = Template.bind({});

Blueborder.args = {
  marginTop :"200px",
  indiDivMarginTop :"20px",
  bordercolor :"black",
  borderRadius :4,
  fs :16,
  onFocusColor :"green",
  buttonFontSize :16,
  buttonColor :"white",
  buttonBackgroundColor :"blue",
  onFocusBoxShadow :"red",
};

export const FontSize = Template.bind({});

FontSize.args={
  marginTop :"200px",
  indiDivMarginTop :"20px",
  bordercolor :"black",
  borderRadius :4,
  fs :16,
  onFocusColor :"green",
  buttonFontSize :16,
  buttonColor :"white",
  buttonBackgroundColor :"blue",
  onFocusBoxShadow :"red",
}

