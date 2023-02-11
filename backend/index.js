const express = require("express");
const app = express();
const firebase = require("firebase-admin");
const { AxePuppeteer } = require("@axe-core/puppeteer");
const puppeteer = require("puppeteer");

// provide the path to the service account file
const serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

// create a reference to the Firestore database
const db = firebase.firestore();

// create a GET endpoint at /api/todos

app.get("/api/assessments/:company", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  const company = req.params.company;
  // get all todos from the Firestore collection
  const assessmentSnapshot = await db
    .collection("assessments")
    .where("companyName", "==", company)
    .get();
  const assessments = [];
  assessmentSnapshot.forEach((doc) => {
    assessments.push({ id: doc.id, ...doc.data() });
  });
  res.send(assessments);
});

app.get("/api/assessments", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  // get all todos from the Firestore collection
  const assessmentSnapshot = await db.collection("assessments").get();
  const assessments = [];
  assessmentSnapshot.forEach((doc) => {
    const data = doc.data();
    assessments.push({
      id: doc.id,
      companyName: data.companyName,
      url: data.url,
      assessInfo: data.assessInfo,
    });
  });
  res.send(assessments);
});

// POST API for adding a new assessment

app.post("/api/assessment/add", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  const { companyName, timestamp, url, assessInfo } = req.body;
  const newAssessment = {
    companyName,
    timestamp,
    url,
    assessInfo,
    problemCount: 0,
    evalCount: 0,
  };
  try {
    const addedDoc = await db.collection("assessments").add(newAssessment);
    res.status(201).json({
      message: "Assessment added successfully",
      id: addedDoc.id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding assessment",
      error: error.message,
    });
  }
});

// POST API for automated testing of website
app.post("/api/test/", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  const { url } = req.body;
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setBypassCSP(true);

    await page.goto(url);
    const builder = new AxePuppeteer(page);
    const results = await builder.analyze();
    await page.close();
    await browser.close();
    res.status(201).json({
      message: "Test result",
      result: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error testing website",
      error: error.message,
    });
  }
});

// POST API for adding a new assessment result
app.post("/api/assessment/result/add", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  const { url, disability, evalTags, evalRemarks } = req.body;

  try {
    const newResult = ({
      url: string,
      disability: string,
      evalRemarks: object,
      evalTags: object,
    } = {
      url: url,
      disability: disability,
      evalRemarks: evalRemarks,
      evalTags: evalTags,
    });
    const assessment = await db
      .collection("assessments")
      .where("url", "==", url)
      .get();
    await assessment.forEach((doc) => {
      const data = doc.data();
      const newCount = data.evalCount + 1;
      db.collection("assessments").doc(doc.id).update({ evalCount: newCount });
    });
    const results = await db
      .collection("assessments")
      .doc(assessment.docs[0].id)
      .collection("results")
      .add(newResult);
    res.status(201).json({
      message: "Assessment added successfully",
      id: results.id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding assessment",
      error: error.message,
    });
  }
});

// GET API for getting information of an assessment result by ID
app.get("/api/assessment/result/:id", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  const assessmentId = req.params.id;

  db.collection("assessments")
    .doc(assessmentId)
    .collection("results")
    .get()
    .then((querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          disability: doc.data().disability,
          evalRemarks: doc.data().evalRemarks,
          evalTags: doc.data().evalTags,
          url: doc.data().url,
        };
      });

      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});


// GET API for getting information of an assessment by ID
app.get("/api/assessment/:id", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  const assessmentId = req.params.id;
  try {
    const assessmentRef = await db.collection("assessments").doc(assessmentId);
    const doc = await assessmentRef.get();
    if (!doc.exists) {
      console.error(error);
      res.status(500).send("No such document!");
    } else {
      res.json(doc.data());
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// export the function as an HTTP trigger
exports.fireAPI = (req, res) => {
  return app(req, res);
};
