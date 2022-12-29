import { WebPlugin } from '@capacitor/core';

import type { OpeninstallPlugin } from './definitions';

export class OpeninstallWeb extends WebPlugin implements OpeninstallPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
