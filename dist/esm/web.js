import { WebPlugin } from '@capacitor/core';
export class CapacitorZipWeb extends WebPlugin {
    /*
     * @param {UnzipOptions} options - The shape is the same as the UnzipOptions interface
     * @returns {Promise<UnzipResult>} - The shape is the same as the UnzipResult interface
     */
    async unzip() {
        return Promise.reject(new Error('Only available on android'));
    }
}
//# sourceMappingURL=web.js.map