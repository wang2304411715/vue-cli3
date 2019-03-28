import Vue from "vue";
const requireComponent = require.context("./", true, /\w+\.(vue)$/);
requireComponent.keys().forEach(component => {
  const componentConfig = requireComponent(component);
  const ctrl = componentConfig.default || componentConfig;
  Vue.component(ctrl.name, ctrl);
  console.log(ctrl);
});
