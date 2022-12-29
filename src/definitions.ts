import type { PluginListenerHandle } from '@capacitor/core';

export interface OpeninstallPlugin {
    configure(options: ConfigOptions): Promise<void>;
    serialEnabled(options: { enabled: boolean }): Promise<void>;
    clipBoardEnabled(options: { enabled: boolean }): Promise<void>;
    init(): Promise<void>;
    getInstall(): Promise<any>;
    getInstallCanRetry(): Promise<any>;
    reportRegister(): Promise<void>;
    reportEffectPoint(options: { pointId?: string, pointValue?: string }): Promise<void>;
    addListener(eventName: 'wakeUp', listenerFunc: WakeUpListener): Promise<PluginListenerHandle> & PluginListenerHandle;
    removeAllListeners(): Promise<void>;
}

export interface ConfigOptions {
    adEnabled: boolean,
    macDisabled: boolean,
    imeiDisabled: boolean,
    gaid: string,
    oaid: string,
}

export declare type WakeUpListener = (status: any) => void;

export type WakeUpCallback = (message: any | null, err?: any) => void;