/**
 * Render graph's initial data for automat page
 * @returns library
 */
const initialData={
    'points':[
        {'id':0,'x':300,'y':400, 'state':'q0', 'label':'initialState', 'meaning':'meaning of q0'},
        {'id':1,'x':600,'y':400, 'state':'q1', 'label':'finalState','meaning':'meaning of q1'},
    ],
    'edges':[
        {'id':0,'startId':0,'endId':1, 'symbols':'a'}
    ],
    "symbols":[
        {'id':0,'name':'a','label':'meaning of a'}
    ],
    "names":[
        {"automat":"Example"}
    ]
};

export default initialData