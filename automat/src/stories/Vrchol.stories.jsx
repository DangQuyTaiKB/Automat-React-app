//vrchol.stories.jsx
import {Vrchol} from './Vrchol';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
     */
    title: 'Vrchol',
    component: Vrchol
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Vrchol {...args} />;

//👇 Each story then reuses that template
export const Normal = Template.bind({});

Normal.args={
    position: [200,100],
    index: 1
};

export const StartState = Template.bind({});
StartState.args={
    position: [200,100],
    index: 0
};