import {Edge} from './Edge'

export default{
    title: 'Hrana',
    component: Edge
};

const Template= (args)=> <Edge {...args}></Edge>;

export const Obecna= Template.bind({});
Obecna.args={
    startPoint: {'x':200,'y':100},
    endPoint: {'x':400,'y':100},
    symbols: "a"
};

export const Smycka = Template.bind({});
Smycka.args={
    startPoint:{'x':200,'y':100},
    endPoint:{'x':200,'y':100},
    symbols: "a"
};