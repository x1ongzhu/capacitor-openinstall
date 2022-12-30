import { registerPlugin } from '@capacitor/core';
const Openinstall = registerPlugin('Openinstall', {
    web: () => import('./web').then(m => new m.OpeninstallWeb()),
});
export * from './definitions';
export { Openinstall };
//# sourceMappingURL=index.js.map