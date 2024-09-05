import config from 'config';

interface Config {
  MESSAGE: string;
  SERVER_PORT: number,
  CASA_MOUNT_URL: string,
  SESSION_ID: string,
  SESSIONS_SECRET: string,
  SESSIONS_TTL_SECONDS: number,
  SECURE_COOKIES: boolean
}

function parseEnvVar(key: string) {
  switch(key) {
    case "SECURE_COOKIES": {
      return process.env[key] === 'true';
    }
    case "SERVER_PORT":
    case "SESSIONS_TTL_SECONDS": {
      const variable = process.env[key];
      if(variable){
        return parseInt(variable);
      }
      return undefined;
    }
    default:
      return process.env[key];
  }
}

function getEnvVar(key: string) {
  const processValue = process.env[key];
  if(processValue) {
    return parseEnvVar(key);
  }
  try {
    const value = config.get(key);
    return value;
  } catch(error) {
    console.log(`env var ${key} is undefined`);
    return undefined;
  }
}

const Config = {
  MESSAGE: getEnvVar('MESSAGE'),
  SERVER_PORT: getEnvVar('SERVER_PORT'),
  CASA_MOUNT_URL: getEnvVar('CASA_MOUNT_URL'),
  SESSION_ID: getEnvVar('SESSION_ID'),
  SESSIONS_SECRET: getEnvVar('SESSIONS_SECRET'),
  SESSIONS_TTL_SECONDS: getEnvVar('SESSIONS_TTL_SECONDS'),
  SECURE_COOKIES: getEnvVar('SECURE_COOKIES'),
} as Config;

console.log(Config);
console.log(process.env);

export default Config;
