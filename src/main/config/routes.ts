import fs from 'fs';
import path from 'path';

export const setupRoutes = server => {
  const folder = fs.readdirSync(path.resolve(__dirname, '../routes'));

  folder.forEach(async file => {
    const { default: route } = await import(path.resolve(__dirname, `../routes/${file}`));
    await route(server);
  });
};
