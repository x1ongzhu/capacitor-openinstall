import { WebPlugin } from '@capacitor/core';

import type { OpeninstallPlugin, ConfigOptions } from './definitions';

export class OpeninstallWeb extends WebPlugin implements OpeninstallPlugin {
    configure(options: ConfigOptions): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
    serialEnabled(options: { enabled: boolean; }): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
    clipBoardEnabled(options: { enabled: boolean; }): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
    init(): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
    getInstall(): Promise<any> {
        throw this.unimplemented('Not implemented on web.');
    }
    getInstallCanRetry(): Promise<any> {
        throw this.unimplemented('Not implemented on web.');
    }
    reportRegister(): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
    reportEffectPoint(options: { pointId?: string | undefined; pointValue?: string | undefined; }): Promise<void> {
        throw this.unimplemented('Not implemented on web.');
    }
}
