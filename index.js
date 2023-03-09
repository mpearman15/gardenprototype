// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { html, render } from "lit-html";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIS7tpssHcPojfXAoGtEUDlpQfrAUaTMM",
  authDomain: "garden-journal-146bd.firebaseapp.com",
  projectId: "garden-journal-146bd",
  storageBucket: "garden-journal-146bd.appspot.com",
  messagingSenderId: "827802375183",
  appId: "1:827802375183:web:fbbf6497532ad8a8427f7a",
  measurementId: "G-FC93M6D38R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let entries = [];
const entryRef = collection(db, "entries");

async function getAllEntries() {
  entries = [];
  const querySnapshot = await getDocs(
    query(entryRef, orderBy("time", "desc"))
  );
  querySnapshot.forEach((doc) => {
    let entryData = doc.data();
    entries.push(entryData);
  });
  // console.log(entries);
  render(view(), document.body);
}

getAllEntries();

onSnapshot(
  collection(db, "entries"),
  (snapshot) => {
    console.log("snap", snapshot);
    getAllEntries();
  },
  (error) => {
    console.error(error);
  }
);

async function addEntry(data) {
  console.log("adding entry to database");
  try {
    const docRef = await addDoc(collection(db, "entries"),
      data );

    // testing out sketching
    // printing out whatever was just written in
    let mouseClicked = false;
    const sketch = (p) => {

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background('white');
      };

      p.draw = () => {
        if (mouseClicked) {
          p.fill(p.random(255), p.random(255), p.random(255));
          p.noStroke();
          let locX = p.mouseX;
          let locY = p.mouseY;
          let size = p.random(50,150);
          p.ellipse(locX, locY, size);
          p.fill(0);
          p.text("activity: " + data.activity, locX-(size/2)+20, locY);
          p.text("mood: " + data.mood, locX-(size/2)+20, locY+10);
          p.text("note: " + data.note, locX-(size/2)+20, locY+20);
          mouseClicked = false;
        }
      };

      p.mousePressed = () => {
        mouseClicked = true;
      };
    };
    new p5(sketch);


    render(view(), document.body);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function createFlower(activity, mood, note) {
  return html`
  <p>${activity}</p>
  <p>${mood}</p>
  <p>${note}</p>
  `;
}

function popup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      activity: formData.get('activity'),
      mood: formData.get('mood'),
      note: document.getElementById("text-note").value,
      time: Date.now()
    };
    console.log(data);
    addEntry(data);
  };
  return html`
    <div class="popup-overlay">
      <div class="popup-container">
        <form @submit=${handleSubmit}>
          <p>Type of activity</p>
          <input type="radio" id="work" name="activity" value="work">
          <label for="work">work</label><br>
          <input type="radio" id="leisure" name="activity" value="leisure">
          <label for="leisure">leisure</label><br>
          <input type="radio" id="school" name="activity" value="school">
          <label for="school">school</label><br>

          <p>Mood</p>
          <input type="radio" id="happy" name="mood" value="happy">
          <label for="happy">happy</label><br>
          <input type="radio" id="sad" name="mood" value="sad">
          <label for="sad">sad</label><br>
          <input type="radio" id="okay" name="mood" value="okay">
          <label for="okay">okay</label><br>
          <input type="radio" id="excited" name="mood" value="excited">
          <label for="excited">excited</label><br>
          <label for="text-note">notes</label><br>
          <input type="text" id="text-note">
          <input type="submit" value="save!">
        </form>
      </div>
    </div>
  `;
}

function logEntry() {
  render(popup(), document.body);
}

function view() {
  return html`
    <h1>garden journal</h1>
    <p> welcome! add in your entry, and then use your click on whatever spot on
    the screen to plant that entry :) </p>
    <button class="button" @click=${logEntry}> Log Entry! </button>
    ${entries.map((entry) => html`<p> ${entry.activity} </p>`)}
  `;
}

render(view(), document.body);

