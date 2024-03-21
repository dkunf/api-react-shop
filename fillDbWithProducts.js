const getAllProductsTODOLater = require("./controllers/getAllProductsTODOLater");

async function getMockData() {
  const mockData = await getAllProductsTODOLater();
  console.log(mockData);
}
getMockData();
