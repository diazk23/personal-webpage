import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// gives file path to file name
const __filename = fileURLToPath(import.meta.url);

// returns directory the file name is in
const __dirname = path.dirname(__filename);

// serve static content at the path
app.use(express.static(path.join(__dirname)));

// allows express to read JSON in request body
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`node-demo listening on http://localhost:${port}`);
});
