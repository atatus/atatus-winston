const Transport = require('winston-transport');
const stringifySafe = require('json-stringify-safe');
const atatusLogger = require('./atatus-logger');
const {
    LEVEL,
    MESSAGE,
} = require('triple-beam');

module.exports = class AtatusWinstonTransport extends Transport {
    constructor(options) {
        super(options);
        this.name = options.name || 'atatus';
        // this.level = options.level || 'info';
        this.AtatusLogger = atatusLogger.createLogger(options);
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });

        const infoMessage = info.message || info[MESSAGE];
        let msg;
        if (typeof infoMessage !== 'string' && typeof infoMessage !== 'object') {
            msg = {
                message: this.constructor.safeToString(infoMessage),
            };
        } else if (typeof infoMessage === 'string') {
            msg = {
                message: infoMessage,
            };
        }

        const logObject = Object.assign({},
            info,
            msg, {
                level: info[LEVEL] || this.level,
                api: this.api,
            });

        this.AtatusLogger.log(logObject);
        callback(null, true);
    }

    static safeToString(json) {
        try {
            return JSON.stringify(json);
        } catch (ex) {
            return stringifySafe(json, null, null, () => {});
        }
    }

    finish(callback) {
        this.AtatusLogger.sendAndClose(callback);
    }

    close(cb) {
        this.finish(() => {
            this.emit('finish');
            this.emit('close');
            if (cb) cb();
        });
    }
};











