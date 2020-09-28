module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8888),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c4b6d52475a2852c277fe379cfb0efb5'),
    },
  },
});
