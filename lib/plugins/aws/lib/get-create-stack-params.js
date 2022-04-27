'use strict';

module.exports = {
  getCreateStackParams(options) {
    const params = {
      ...this.getSharedDirectStackActionParams(options),
      OnFailure: 'DELETE',
    };

    if (this.serverless.service.provider.disableRollback) {
      delete params.OnFailure;
      params.DisableRollback = this.serverless.service.provider.disableRollback;
    }

    return params;
  },
};
