import { Request, Response } from "express";
import User from "../modules/userr";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. Check if user exists
  // 2. create a new user if it does not already exist
  // 3. return the user object to the calling client

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id })
    if (existingUser) {
      return res.status(200).send();
    }
    else {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser.toObject());
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Error creating user"})
  }
}

export default {
  createCurrentUser
}