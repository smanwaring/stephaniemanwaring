import React from 'react';
import {combineReducers} from 'redux';


const interestingFacts = [
	'yellow-cake enthusiast',
	'Mr. Meeseeks sympathizer',
	'Arrested Development quoter',
	'former baby',
	'NYC cyclist',
	'carrot juice junkie',
	'lover of semicolons',
	'needle fearer',
	'empanada maker',
	'mystery novel reader',
	'human being'
];

const interestingFactsReducer = function(state = interestingFacts, action) {
	switch (action.type){
		case 'test':
			return action.payload;
		default: return state;
	}
};



const rootReducer = combineReducers({
    test: interestingFactsReducer,
});

export default rootReducer;
