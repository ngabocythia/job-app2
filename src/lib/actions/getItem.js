"use server";

import { connectToDatabase } from "../database";
import Item from "../model/Item";

export async function getALLJob() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Create a new item document

    // Save the item to the database
    const item = await Item.find();
    // const data = item.json()
    // console.log('Item added successfully:', item);
    return item
  } catch (error) {
    console.error("Error gettin item:", error);
    return { success: false, error: error.message };
  }
}
