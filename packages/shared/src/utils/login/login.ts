import { getAppId } from '../config/config';

export const redirectToLogin = () => {
    // 🔹 Auto-connect using your App ID for demo/virtual account
    const app_id = getAppId();
    const redirect_url = `https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}&l=EN`;

    // You could optionally include your redirect back to your app:
    const current_host = window.location.origin;
    const final_url = `${redirect_url}&redirect_uri=${encodeURIComponent(current_host)}`;

    window.location.href = final_url;
};

export const redirectToSignUp = () => {
    // Direct to Deriv signup page
    window.location.href = 'https://deriv.com/signup/';
};
