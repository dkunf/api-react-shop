//lets try to send as a blob to the frontent all of them and one by one too
const fs = require("fs");

async function getImg(path) {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    else return data;
  });
}

async function getAllProducts() {
  const Avocado = await getImg("./files/avocado.webp");
  const Kiwi = await getImg("./files/kiwi.avif");
  const Pineapple = await getImg("./files/pineapple.avif");
  const Zucchini = await getImg("./files/zucchini.avif");
  const Cherry = await getImg("./files/cherry.avif");
  const Watermelon = await getImg("./files/watermelon.avif");
  const Cucumber = await getImg("./files/cucumber.webp");
  const Blueberry = await getImg("./files/blueberry.avif");
  const Potato = await getImg("./files/potato.avif");
  const Lettuce = await getImg("./files/lettuce.avif");
  const Strawberry = await getImg("./files/strawberry.avif");
  const Spinach = await getImg("./files/spinach.avif");
  const Apple = await getImg("./files/apple.png");
  const Banana = await getImg("./files/banana.avif");
  const Orange = await getImg("./files/orange.avif");
  const Carrot = await getImg("./files/carrot.avif");
  const Broccoli = await getImg("./files/broccoli.avif");
  const Grapes = await getImg("./files/grapes.avif");
  const Tomato = await getImg("./files/tomato.avif");
  const Pepper = await getImg("./files/pepper.avif");

  const mockData = [
    {
      title: "Apple",
      description: "Experience the crisp sweetness of fresh apples.",
      src: Apple,
      credits: "",
    },

    {
      title: "Banana",
      src: Banana,
      credits: "Giorgio Trovato",
      description: "Fuel your day with our potassium-packed bananas.",
    },
    {
      title: "Orange",
      src: Orange,
      credits: "Mae Mu",
      description: "Unleash a burst of citrus delight in every bite.",
    },
    {
      title: "Carrot",
      src: Carrot,
      credits: "Nick Fewings",
      description: "Indulge in the crunchiness of nutrient-rich carrots.",
    },
    {
      title: "Broccoli",
      src: Broccoli,
      credits: "Annie Spratt",
      description: "Elevate your health with our versatile broccoli.",
    },
    {
      title: "Grapes",
      src: Grapes,
      credits: "Andrey Haimin",
      description: "Savor the sweetness of our bountiful grape clusters.",
    },
    {
      title: "Tomato",
      src: Tomato,
      credits: "Ed O'Neil",
      description: "Add flavor to your dishes with our juicy tomatoes.",
    },
    {
      title: "Spinach",
      src: Spinach,
      credits: "Elianna Friedman",
      description: "Revitalize your meals with our iron-packed spinach.",
    },
    {
      title: "Strawberry",
      src: Strawberry,
      credits: "Allec Gomes",
      description: "Delight in the sweetness of succulent strawberries.",
    },
    {
      title: "Cucumber",
      src: Cucumber,
      credits: "",
      description: "Stay refreshed with the crispness of our cucumbers.",
    },
    {
      title: "Kiwi",
      src: Kiwi,
      credits: "",
      description: "Boost your day with the vitamin C richness of kiwi.",
    },
    {
      title: "Avocado",
      src: Avocado,
      credits: "",
      description: "Savor the creamy goodness of nutrient-dense avocados.",
    },
    {
      title: "Pineapple",
      src: Pineapple,
      credits: "",
      description: "Escape to the tropics with our sweet pineapples.",
    },
    {
      title: "Bell Pepper",
      src: Pepper,
      credits: "",
      description: "Color your meals with the crunch of bell peppers.",
    },
    {
      title: "Watermelon",
      src: Watermelon,
      credits: "",
      description: "Quench your thirst with the juicy freshness of watermelon.",
    },
    {
      title: "Cherry",
      src: Cherry,
      credits: "Mae Mu",
      description: "Indulge in the sweetness of plump, red cherries.",
    },
    {
      title: "Zucchini",
      src: Zucchini,
      credits: "",
      description: "Transform your recipes with the versatility of zucchini.",
    },
    {
      title: "Blueberry",
      src: Blueberry,
      credits: "",
      description: "Enjoy a burst of antioxidants with our blueberries.",
    },
    {
      title: "Potato",
      src: Potato,
      credits: "",
      description:
        "Ignite your culinary creativity with our versatile potatoes.",
    },
    {
      title: "Lettuce",
      src: Lettuce,
      credits: "",
      description: "Create vibrant salads with our crisp and fresh lettuce.",
    },
  ];

  return mockData;
}

module.exports = getAllProducts;
