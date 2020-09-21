exports.init = (models) => {
    return {
        getAll: (req, res) => {
            models.Team.findAll()
            .then((data) => {
                res.json({success: true, data: data, error: null});
            })
            .catch((err) => {
                res.json({success: false, data: null, error: err});
            })
        },

        getById: (req, res) => {
            models.Team.findOne({where: {id_equipe: req.params.id}})
            .then((data) => {
                res.json({success: true, data: data, error: null});
            })
            .catch((err) => {
                res.json({success: false, data: null, error: err});
            })
        },

        add: (req, res) => {
            models.Team.create(req.body)
            .then((data) => {
                res.json({success: true, data: data, error: null});
            })
            .catch((err) => {
                res.json({success: false, data: null, error: err});
            })
        },

        update: (req, res) => {
            models.Team.update({nom_equipe: req.body.nom_equipe}, {
              where: {
                id_equipe: req.params.id
              }
            })
            .then((data) => {
                res.json({success: true, data: null, error: null});
            })
            .catch((err) => {
                res.json({success: false, data: null, error: err});
            })
        },

        remove: (req, res) => {
            models.Team.destroy({
              where: {
                id_equipe: req.params.id
              }
            })
            .then((data) => {
                res.json({success: true, data: null, error: null});
            })
            .catch((err) => {
                res.json({success: false, data: null, error: err});
            })
        }
    }
}
