import express from "express";
import { createEmployee,getEmployees,getEmployee,deletEmployee,updateEmployee } from "../service/employeeService.js";

const router=express.Router();
router.route("/").post(createEmployee);
router.route("/").get(getEmployees);
router.route("/:id").get(getEmployee);
router.route("/:id").delete(deletEmployee);
router.route("/:id").put(updateEmployee);

export { router};