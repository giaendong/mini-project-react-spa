import {registerApplication, start} from 'single-spa';
import {matchingPathname, runScript} from "./utils";

const loadServiceA = async () => {
    await runScript('http://localhost:3000/static/js/main.js');
    return window.serviceA;
};

const loadServiceB = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.serviceB;
};

const loadServiceC = async () => {
    await runScript('http://localhost:3002/client/vendor.js');
    await runScript('http://localhost:3002/client/client.js');
    return window.serviceC;
};

registerApplication('serviceHeader', () => import ('./src/serviceHeader/serviceHeader.app.js').then( module => module.serviceHeader), () => true);
registerApplication('serviceMenu', () => import ('./src/serviceMenu/serviceMenu.app.js').then( module => module.serviceMenu), () => true);
registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
registerApplication('serviceA', loadServiceA, matchingPathname(['/serviceA']));
registerApplication('serviceB', loadServiceB, matchingPathname(['/serviceB']));
registerApplication('serviceC', loadServiceC, matchingPathname(['/serviceC']));

start();