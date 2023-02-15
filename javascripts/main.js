import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs }, document);
});

const states_global = {
  unchecked: "unchecked",
  checked: "checked",
  intermediary: "intermediary"
};

const states_intermediary = {
  one_more_check: "one_more_check",
  one_more_uncheck: "one_more_uncheck",
  start: "start"
};


const events_global = {
  clickControl: "clickControl",
  clickRelated: "clickRelated",
};

const events_intermediary = {
  checkall: "checkall",
  uncheckall: "uncheckall",
};

const transitions_global = {
  [states.unchecked]: {
    [events.clickControl]: states.checked,
    [events.clickRelated]: states.unchecked
  },
  [states.checked]: {
    [events.clickControl]: states.unchecked,
    [events.clickRelated]: states.intermediary
  },
  [states.intermediary]: {
    [events.clickControl]: states.unchecked,
    [events.clickRelated]: states.intermediary
  } 
};

const transitions_imtermediary = {
  
};

function transition(state, event) {
  if (state == states_global.intermediary)
    return transitions_imtermediary[state][event] || state;
  return transitions_global[state][event] || state;
}

let currentState = states.unchecked;

currentState = transition(currentState, events_global.unchecked);


