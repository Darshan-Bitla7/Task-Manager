const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  EditTask,
  deleteTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(EditTask).delete(deleteTasks);

module.exports = router;
