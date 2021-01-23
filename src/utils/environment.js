export const isProductionEnv = () => process.env.ENV_NAME === 'production';

console.log('env is ', process.env);
console.log('isProductionEnv', isProductionEnv());

export const getPlatformBaseUrl = (location = 'path') =>
  isProductionEnv() ? `https://exemple.com` : `https://staging.exemple.com`;
