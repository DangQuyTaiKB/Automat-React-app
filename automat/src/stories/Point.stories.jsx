import Point from './Point';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
     */
    title: 'Vrchol',
    component: Point
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Point {...args} />;

//👇 Each story then reuses that template
export const Obecny = Template.bind({});

Obecny.args={
    x:200,
    y:100,
    label:'commonState',
    state:'q1'
};

export const Pocatecni = Template.bind({});
Pocatecni.args={
    x:200,
    y:100,
    label:"initialState",
    state:"q0"
};

export const Koncovy = Template.bind({});
Koncovy.args={
    x:200,
    y:100,
    label:"finalState",
    state: "q2"
};