/**
 * PM2 config for running Next.js in production.
 * Usage on VPS:
 *   npm ci
 *   npm run build
 *   pm2 start ecosystem.config.cjs
 */

module.exports = {
  apps: [
    {
      name: "netsecinfotech",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
