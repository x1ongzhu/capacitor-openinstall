import { WebPlugin } from '@capacitor/core';
import type { OpeninstallPlugin, ConfigOptions } from './definitions';
export declare class OpeninstallWeb extends WebPlugin implements OpeninstallPlugin {
    configure(options: ConfigOptions): Promise<void>;
    serialEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    clipBoardEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    init(): Promise<void>;
    getInstall(): Promise<any>;
    getInstallCanRetry(): Promise<any>;
    reportRegister(): Promise<void>;
    reportEffectPoint(options: {
        pointId?: string | undefined;
        pointValue?: string | undefined;
    }): Promise<void>;
}
