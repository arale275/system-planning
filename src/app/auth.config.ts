import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '138322093391-5cdehk0qqkhk6kf2b4ltc307kqnrnkih.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/success',
  responseType: 'token id_token',
  scope: 'openid profile email',
};

export const authConfigFacebook: AuthConfig = {
  clientId: '24015666154714335',
  redirectUri: window.location.origin + '/success', 
  scope: 'email',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
};




  

