export const redirectToLogin = () => {
    const app_id = process.env.NEXT_PUBLIC_APP_ID || '99301';
    const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URL || window.location.origin;
    const login_url = `https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}&l=EN&redirect_uri=${encodeURIComponent(redirect_uri)}`;

    window.location.href = login_url;
};

export const redirectToSignUp = () => {
    window.location.href = 'https://deriv.com/signup/';
};
