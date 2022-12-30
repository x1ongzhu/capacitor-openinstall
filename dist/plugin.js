var capacitorOpeninstall = (function (exports, core) {
    'use strict';

    const Openinstall = core.registerPlugin('Openinstall', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.OpeninstallWeb()),
    });

    class OpeninstallWeb extends core.WebPlugin {
        configure(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        serialEnabled(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        clipBoardEnabled(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        init() {
            throw this.unimplemented('Not implemented on web.');
        }
        getInstall() {
            throw this.unimplemented('Not implemented on web.');
        }
        getInstallCanRetry() {
            throw this.unimplemented('Not implemented on web.');
        }
        reportRegister() {
            throw this.unimplemented('Not implemented on web.');
        }
        reportEffectPoint(options) {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OpeninstallWeb: OpeninstallWeb
    });

    exports.Openinstall = Openinstall;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
