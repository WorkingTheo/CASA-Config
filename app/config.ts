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

const Config: Config = {
  MESSAGE: config.get('MESSAGE'),
  SERVER_PORT: config.get('SERVER_PORT'),
  CASA_MOUNT_URL: config.get('CASA_MOUNT_URL'),
  SESSION_ID: config.get('SESSION_ID'),
  SESSIONS_SECRET: config.get('SESSIONS_SECRET'),
  SESSIONS_TTL_SECONDS: config.get('SESSIONS_TTL_SECONDS'),
  SECURE_COOKIES: config.get('SECURE_COOKIES'),
}

export default Config;
