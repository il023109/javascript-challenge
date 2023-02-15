import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs }, document);
});

const states = {
  unchecked: "unchecked",
  checked: "checked",
  intermediary: "intermediary"
};
