export const copyToClipboard = async (text: string) => {
  if (!text) {
    return false;
  }
  try {
    await window.navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};

export const truncateString = (sentence: string, length: number = 3) => {
  if (!sentence) {
    return '';
  }
  const words = sentence.split(' ');
  return words.slice(0, length).join(' ');
};

export const oauthSignIn = async () => {
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_APP_URL,
    response_type: 'code',
    scope: 'email profile openid',
    include_granted_scopes: 'true',
    state: '42a7bd822fe32cc56',
    prompt: 'select_account'
  };

  // Add form parameters as hidden input values.
  if (params) {
    const keys = Object.keys(params);
    keys.forEach((key) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      // @ts-ignore
      input.setAttribute('value', params[key]);
      form.appendChild(input);
    });
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  const result = await form.submit();
  return result;
};
