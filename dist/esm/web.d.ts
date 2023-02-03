import { WebPlugin } from '@capacitor/core';
import type { CapacitorZipPlugin, UnzipResult } from './definitions';
export declare class CapacitorZipWeb extends WebPlugin implements CapacitorZipPlugin {
    unzip(): Promise<UnzipResult>;
}
