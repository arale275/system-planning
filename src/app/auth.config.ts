import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // Use HTTP here
  clientId:
    '38322093391-5cdehk0qqkhk6kf2b4ltc307kqnrnkih.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/success',
  responseType: 'token id_token',
  scope: 'openid profile email',
};

