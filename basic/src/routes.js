import Animal from './components/routecomponents/Animal.vue';
import Plant from './components/routecomponents/Plant.vue';
import Planet from './components/routecomponents/Planet.vue';

export const routes = [
    {path : '',component : Animal},
    {path : '/plant',component : Plant},
    {path : '/planet',component : Planet}
];