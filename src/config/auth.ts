export default {
  jwt: {
    secret: process.env.APP_SECRET || 'test_secret',
    expiresIn: '1d',
  },
};
