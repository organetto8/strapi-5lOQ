'use strict';

/**
 * studio controller
 */

module.exports = {
  async find(ctx) {
    try {
      // Query files from upload plugin with folder_path filter
      const files = await strapi.db.query('plugin::upload.file').findMany({
        where: {
          folderPath: '/1',
        },
        select: ['url'],
      });

      // Extract only the URLs from the result
      const urls = files.map(file => file.url);

      return ctx.send(urls);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
