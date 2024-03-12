const express =  require('express');
const router = express.Router();

//controller
const postsController =  require("../controller/posts.controller.js");

//routes
router.get("/professorstudent", postsController.getProfessorStudent);
// router.post("/", postsController.create);
// router.get("/:id", postsController.getById);
// // router.put("/edit/:id", postsController.update);
// router.put("/:id", postsController.update);
// router.delete("/:id", postsController.delete);

module.exports = router;