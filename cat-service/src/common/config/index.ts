import { config } from 'dotenv';
import { cleanEnv, num, str } from 'envalid';
config();

export const env = cleanEnv(process.env, {
  PORT: num(),
  ENV: str({ choices: ['dev', 'prod'] }),
  MONGO_URI: str(),
});
