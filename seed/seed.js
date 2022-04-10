import db from "../db/connection.js";
import mongoose from "mongoose"
import Link from "../models/schema.js"
import links from "./nasaPotd.json" assert{type: "json"}



const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert links into database
  await Link.insertMany(links);

  // close db connection (done)
  db.close();
};

insertData();