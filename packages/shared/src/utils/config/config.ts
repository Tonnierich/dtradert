import dotenv from 'dotenv';
dotenv.config();
/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged packages/shared/src/utils/config.js
 *
 */

import { getProductionPlatformHostname, getStagingPlatformHostname } from '../brand';

// Detect environment
export const isProduction = () => {
    const hostname = window?.location?.hostname ?? '';
    return hostname === getProductionPlatformHostname() || process.env.NODE_ENV === 'production';
};

// ✅ Use the App ID from Vercel env or fallback to 99301
export const getAppId = (): number => {
    const app_id = Number(process.env.DERIV_APP_ID || 99301);
    return app_id;
};

export const getSocketUrl = () => {
    if (isProduction()) return 'wss://ws.derivws.com/websockets/v3';
    return 'wss://staging-ws.derivws.com/websockets/v3';
};

export const getDerivComUrl = () => (isProduction() ? 'https://deriv.com' : 'https://staging.deriv.com');
