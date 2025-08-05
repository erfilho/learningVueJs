import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const tasksRef = collection(db, "tasks");

export async function getTasks() {
  const qSnapshot = await getDocs(tasksRef);
  return qSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addTask(title) {
  try {
    const newTask = { title: title || null, finalized: false };
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    return { id: docRef.id, ...newTask };
  } catch (error) {
    console.error("Error while adding task:", error);
  }
}

export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
}

export async function toggleTask(id, currentState) {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, { finalized: !currentState });
}

export async function updateTaskTitle(id, newTitle) {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, { title: newTitle });
}
