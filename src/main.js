import App from './App.svelte';

var div = document.createElement('div');
var script = document.currentScript;
script.parentNode.insertBefore(div, script);

const app = new App({
  target: div
});

export default app;