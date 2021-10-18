import winston from "winston"

const {combine, timestamp, printf} = winston.format;

const logger = winston.createLogger();

const myFormat = printf(({level, message, timestamp}) => {
        return `${timestamp} ${level}:  ${message}`;
});

logger.add(new winston.transports.File(
    {
            filename: './logs/' + "all_logs_" + (new Date()) + '.log',
            level: 'info',
            prettyPrint: true,
            handleExceptions: true,
            format: combine(
                timestamp(),
                myFormat
            ),
    }));

logger.add(new winston.transports.File(
    {
            filename: './logs/' + "error_logs_" + (new Date()) + '.log',
            level: ['error'],
            prettyPrint: true,
            handleExceptions: true,
            format: combine(
                timestamp(),
                myFormat
            ),
    }));

logger.add(new winston.transports.Console(
    {
            level:
                ['error'],
            format: combine(
                timestamp(),
                myFormat
            ),
            prettyPrint: true,
            handleExceptions: true,
            colorize: true,
            silent: false,
            timestamp: false
    }));

logger.exitOnError = false;
module.exports = logger;