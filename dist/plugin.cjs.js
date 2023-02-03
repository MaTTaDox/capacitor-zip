'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

/*
 * @enum {string}
 */
exports.ZipErrorCodes = void 0;
(function (ZipErrorCodes) {
    ZipErrorCodes["SUCCESS"] = "SUCCESS";
    ZipErrorCodes["NO_SOURCE_SPECIFIED"] = "NO_SOURCE_SPECIFIED";
    ZipErrorCodes["NO_DESTINATION_SPECIFIED"] = "NO_DESTINATION_SPECIFIED";
    ZipErrorCodes["NO_PASSWORD_SPECIFIED"] = "NO_PASSWORD_SPECIFIED";
    ZipErrorCodes["NO_PERMISSION"] = "NO_PERMISSION";
    ZipErrorCodes["NO_FILE_EXISTS"] = "NO_FILE_EXISTS";
    ZipErrorCodes["NO_FILE_VALID"] = "NO_FILE_VALID";
    ZipErrorCodes["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(exports.ZipErrorCodes || (exports.ZipErrorCodes = {}));

const CapacitorZip = core.registerPlugin('CapacitorZip', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorZipWeb()),
});

class CapacitorZipWeb extends core.WebPlugin {
    /*
     * @param {UnzipOptions} options - The shape is the same as the UnzipOptions interface
     * @returns {Promise<UnzipResult>} - The shape is the same as the UnzipResult interface
     */
    async unzip() {
        return Promise.reject(new Error('Only available on android'));
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorZipWeb: CapacitorZipWeb
});

exports.CapacitorZip = CapacitorZip;
//# sourceMappingURL=plugin.cjs.js.map
