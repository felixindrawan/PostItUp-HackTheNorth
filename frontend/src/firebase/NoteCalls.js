import firebase from "./firebase";

const db = firebase.firestore().collection("Notes");

export const getNotes = () => {
    var notes = [];
    
    db.onSnapshot((snapshot) => {
        notes = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    
    return notes;
}

export const addNote = (note) => {
    const message = note.message;

    db.add({
        message
    })
    .catch(function(error) {
        console.error("Error deleting note: ", error);
    })
}

export const setNote = (note) => {
    const documentID = note.target.id;

    db.doc(documentID).set({
        Message: note.message
    })
    .catch(function(error) {
        console.error("Error writing note: ", error);
    })
}

export const deleteNote = (note) => {
    const documentID = note.target.id;

    db.doc(documentID).delete();
}