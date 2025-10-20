'use strict';

/**
 * studio custom routes
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/studio',
      handler: 'studio.find',
      config: {
        auth: false,
      },
    },
  ],
};
