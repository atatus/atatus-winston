# atatus-winston

`atatus-winston` is a [winston](https://github.com/winstonjs/winston) plugin. With `atatus-winston`, you can take advantage of the winston logger framework with your Node.js app.

### Versions

Supports Winston 3, If you want to use Winston 2 - Checkout v1.0.8

### Add the dependency to your project

```bash
npm install atatus-winston --save
```

## Configure atatus-winston

Use the samples in the code block below as a starting point, and replace the sample with a configuration that matches your needs.  
To run with **Typescript** [click here](#typescript).

```javascript
const winston = require('winston');
const AtatusWinstonTransport = require('atatus-winston');

let atatusWinstonTransport = new AtatusWinstonTransport({
    apiKey: '<YOUR_API_KEY>',
    name: 'atatus-winston',
    service: 'payment-service',
    source: 'payment-service'
});

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [ atatusWinstonTransport ],
});

logger.info('Just a test message for Atatus Winston Logger setup');
```

Replace `<YOUR_API_KEY>` with your own Atatus [api key](https://docs.atatus.com/docs/faq/basics-faq/where-to-find-api-key.html).<br/>

If you do not have a [Atatus](https://www.atatus.com) account, you can sign up for a free trial [here](https://www.atatus.com/signup)


### Logs in my console

The winston logger by default sends all logs to the console.  
You can easily disable this by adding this line to your code :

```js
winston.remove(winston.transports.Console);
```

<div id="typescript">

## Running with Typescript

If you don't have a 'tsconfig.json' file start by running:

```bash
tsc --init
```

On your 'tsconfig' file, under 'compilerOptions' make sure you have 'esModuleInterop' flag with the value 'true' or add it this way:

```
  "compilerOptions": {
    ...
    "esModuleInterop": true
  }
```

Code sample:

```ts
import winston from 'winston';
import AtatusWinstonTransport from 'atatus-winston';

let atatusWinstonTransport = new AtatusWinstonTransport({
    apiKey: '<YOUR_API_KEY>',
    name: 'atatus-winston',
    service: 'payment-service',
    source: 'payment-service'
});

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [ atatusWinstonTransport ],
});

logger.log('warn', 'Just a test warning message');
```

Replace `<YOUR_API_KEY>` with your own Atatus [api key](https://docs.atatus.com/docs/faq/basics-faq/where-to-find-api-key.html).<br/>


<div id="trouble-shooting">

# Troubleshooting

To fix errors related to "esModuleInterop" flag make sure you run the relavent 'tsconfig' file.
These might help:

```
tsc <file-name>.ts --esModuleInterop
```

or

```
tsc --project tsconfig.json
```

</div>

</div>
