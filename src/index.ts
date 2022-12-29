import { registerPlugin } from '@capacitor/core';

import type { OpeninstallPlugin } from './definitions';

const Openinstall = registerPlugin<OpeninstallPlugin>('Openinstall', {
  web: () => import('./web').then(m => new m.OpeninstallWeb()),
});

export * from './definitions';
export { Openinstall };
