const express = require('express'),
router = express.Router();

exports.init = (models) => {

    // Controllers
    const TeamController = require('../controllers/team').init(models);

    router.route('/')
    .get(TeamController.getAll)
    .post(TeamController.add);

    router.route('/:id')
    .get(TeamController.getById)
    .put(TeamController.update)
    .delete(TeamController.remove);

    return router;
}
