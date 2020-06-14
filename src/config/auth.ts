export default {
  jwt: {
    secret: process.env.APP_SECRET || 'development_secret',
    expiresIn: '1d',
  },
};
