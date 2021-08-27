const router = require('express').Router();
const controller = require('./controllers');

router.get(`/fav/agent`, controller.get.getAgents)
router.get(`/fav/weapon`, controller.get.getWeapons)
router.post(`/add/agent`, controller.add.addAgents)
router.post(`/add/weapon`, controller.add.addWeapons)
// router.put(`/delete/agent`, controller.delete.deleteAgents)
// router.put(`/delete/weapon`, controller.delete.deleteWeapons)

module.exports = router;