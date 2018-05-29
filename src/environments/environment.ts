// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const configuration = {
  production: false,
  zoneRestApi: 'http://mudbe/api/v1/zones',
  roomRestApi: 'http://mudbe/api/v1/rooms-api',
  objRestApi: 'http://mudbe/api/v1/objs',
  mobRestApi: 'http://mudbe/api/v1/mobs',
  specRestApi: 'http://mudbe/api/v1/specs',
  shopRestApi: 'http://mudbe/api/v1/shops',
  zoneDbRestApi: 'http://mudbe/api/v1/dbzones',
  auth: 'mammoletta=gemma'
};
