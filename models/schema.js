import mongoose from "mongoose"

let Link = mongoose.model("Links", new mongoose.Schema({
  title: String,
  link: String,
  date: Date
}))

export default Link