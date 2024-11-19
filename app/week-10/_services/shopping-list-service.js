import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  try {
    // Reference to the items subcollection for the given userId
    const itemsCollectionRef = collection(db, `users/${userId}/items`);

    // Fetch all documents in the items subcollection
    const querySnapshot = await getDocs(itemsCollectionRef);

    // Array to store the items
    const items = [];

    // Iterate through the fetched documents
    querySnapshot.forEach((doc) => {
      // Add each document's ID and data to the items array
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Return the array of items
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items.");
  }
}

export async function addItem(userId, item) {
  try {
    // Reference to the items subcollection for the specified userId
    const itemsCollectionRef = collection(db, `users/${userId}/items`);

    // Add the item to the Firestore subcollection
    const docRef = await addDoc(itemsCollectionRef, item);

    // Return the id of the newly created document
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw new Error("Failed to add item.");
  }
}
