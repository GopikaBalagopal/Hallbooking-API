

import { ObjectId } from "mongodb";
import   {client}   from "../index.js";


//to get all rooms data
export async function getallRooms() {
  return await client.db("Hallbooking").collection("Rooms").find({}).toArray();
}
//to get room by ID
export async function getRoomsbyID(id) {
  return await client.db("Hallbooking").collection("Rooms").findOne({_id: new ObjectId(id)});
}
//to add new room data
export async function CreateRooms(newrooomdata) {
  return await client.db("Hallbooking").collection("Rooms").insertMany(newrooomdata);
}

//update room by id

export async function updateroomsById(id, updatedrooms) {
  return await client.db("Hallbooking").collection("Rooms")
    .updateOne({Room_id:+id},{ $set: updatedrooms });
}
//Delete room by id
export async function deleteroomsById(id) {
  return await client.db("Hallbooking").collection("Rooms").deleteOne({Room_id:+id});
}
