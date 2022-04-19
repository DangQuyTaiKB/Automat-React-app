import {Hrana} from './Hrana'

export default{
    title: 'Hrana',
    component: Hrana
};

const Template= (args)=> <Hrana {...args}></Hrana>;

export const Obecny= Template.bind({});
Obecny.args={
    a: [200,100],
    b: [400,100],
    signaly: "a"
};

export const Smycka = Template.bind({});
Smycka.args={
    a:[200,100],
    b:[200,100],
    signaly : "a"
};