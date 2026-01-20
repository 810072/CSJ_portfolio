export const getAssetPath = (path) => {
    const isProd = process.env.NODE_ENV === 'production';
    const prefix = isProd ? '/CSJ_portfolio' : '';

    // Ensure path starts with /
    const safePath = path.startsWith('/') ? path : `/${path}`;

    return `${prefix}${safePath}`;
};
