import { response } from "express";
import Link from "../models/schema.js";

export const getLinks = async (request, response) => {
  try {
    const links = await Link.find();
    response.json(links);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getLink = async (request, response) => {
  try {
    const { id } = request.params;
    const link = await Link.findById(id);

    if (link) {
      return response.json(link);
    }

    response.status(400).json({ message: "Potd not found!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getLinkTitle = async (request, response) => {
  try {
    const { title } = request.params;
    const link = await Link.findOne({ title });

    if (link) {
      return response.json(link);
    }

    response.status(400).json({ message: "Potd not found!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getLinkDate = async (request, response) => {
  try {
    const { date } = request.params;
    const link = await Link.findOne({ date });

    if (link) {
      return response.json(link);
    }

    response.status(400).json({ message: "Potd not found!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const createLink = async (request, response) => {
  try {
    const link = new Link(request.body);
    await link.save();
    response.status(201).json(link);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateLink = async (request, response) => {
  const { id } = request.params;
  const link = await Link.findByIdAndUpdate(id, request.body);
  response.status(200).json(link);
};

export const deleteLink = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Link.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Potd deleted!");
    }

    throw new Error("Potd not found");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};