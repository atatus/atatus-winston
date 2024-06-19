import { ILoggerOptions } from "./atatus-logger.d";
import Transport from "winston-transport";

declare namespace AtatusWinstonTransport {
    interface IWinstonAtatusLoggerOptions extends ILoggerOptions {
        name?: string;
        level?: string;
    }
}

declare class AtatusWinstonTransport extends Transport {
    constructor(options: AtatusWinstonTransport.IWinstonAtatusLoggerOptions);

    static safeToString(json: any): string;
}

export = AtatusWinstonTransport;