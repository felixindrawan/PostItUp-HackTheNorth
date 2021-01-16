import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const db = firebase.firestore().collection("Notes");

const getNotes = () => {
    db.onSnapshot((querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((note) => {
            notes.push(note.data());
        });
    })
    .catch(function(error) {
        console.error("Error adding note: ", error);
    })

    return notes;
}

const addNote = (note) => {
    const id = note.id;
    const content = note.content;

    db.add({
        id,
        content
    })
    .catch(function(error) {
        console.error("Error deleting note: ", error);
    })
}

const setNote = (note) => {
    const documentID = note.target.id;

    db.doc(documentID).set({
        ID: note.id,
        Content: note.content
    })
    .catch(function(error) {
        console.error("Error writing note: ", error);
    })
}

const deleteNote = (note) => {
    const documentID = note.target.id;

    db.doc(documentID).delete();
}