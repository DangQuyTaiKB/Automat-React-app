import Edge from './Edge'

export default {
    title: 'Hrana',
    component: Edge
};
const Template= (args)=> <Edge {...args}></Edge>;

export const Obecna= Template.bind({});
Obecna.args={
    points:[
        {'id':0,'x':200,'y':100, 'state':'A',"label":"commonState"},
        {'id':1,'x':600,'y':100, 'state':'B',"label":"commonState"}
    ],
    startId:0,
    endId:1,
    label:'obecna',
    symbols: "a"
};

export const Smycka = Template.bind({});
Smycka.args={
    points:[
        {'id':0,'x':200,'y':100, 'state':'A',"label":"commonState"},
        {'id':1,'x':600,'y':100, 'state':'B',"label":"commonState"}
    ],
    startId:0,
    endId:0,
    label:'smycka',
    symbols: "a"
};

export const Krivka = Template.bind({});
Krivka.args={
    points:[
        {'id':0,'x':200,'y':100, 'state':'A',"label":"commonState"},
        {'id':1,'x':600,'y':100, 'state':'B',"label":"commonState"}
    ],
    startId:0,
    endId:1,
    label:'krivka',
    symbols: "a"
};