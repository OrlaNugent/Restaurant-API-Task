const setupDb = require("./setupDb");
const Company = require("./companies");
const express = require("express");
const Menu = require("./menus");

const app = express();

app.use(express.json());

app.get("/companies", async (req, res) => {
  const companies = await Company.findAll();
  res.json(companies);
});

app.get("/companies/:id", async (req, res) => {
  const companies = await Company.findByPk(req.params.id);
  if (!companies) {
    return res.sendStatus(404);
  }
  res.json(companies);
});

app.get("/menus", async (req, res) => {
  const menus = await Menu.findAll();
  res.json(menus);
});

app.delete("/companies/:id", async (req, res) => {
  const companies = await Company.findByPk(req.params.id);
  if (!companies) {
    return res.sendStatus(404);
  }
  await companies.destroy();
  res.sendStatus(200);
});

///app.post("/companies", async (req, res) => {
///const { name, logoURL } = req.body;
///await Company.create({ name, logoURL });
///res.sendStatus(201);
///});

setupDb();

module.exports = app;
