'use server';


import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Item from "../model/Item";

export async function AddItem(itemData) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Create a new item document
    const newItem = new Item({
      jobName: itemData.jobName,
      location: itemData.location,
      description: itemData.description,

    });

    // Save the item to the database
    const savedItem = await newItem.save();

    console.log('Item added successfully:', savedItem);
    revalidatePath('/')
    return { success: true };
  } catch (error) {
    console.error('Error adding item:', error);
    return { success: false, error: error.message };
  }
}