import saladeCesar from '../data/salade-cesar.jpg';
import pizzaMargheritta from '../data/Pizza_margherita.png';
import cheeseBurger from '../data/cheese_Burger.png';
import pateCarbonara from '../data/pate_Carbonara.png';
import Tiramisu from '../data/Tiramisu.png';
import lasagneBolognaise from '../data/lasagne_Bolognaise.jpeg';
import plat from '../data/plat.png';
import entree from '../data/entree.png';
import dessert from '../data/dessert.png';
export const products = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Une pizza classique avec de la tomate, de la mozzarella et du basilic frais.",
    price: 12,
    image: pizzaMargheritta,
    category:"plat",
    categoryimage:plat
  },
  {
    id: 2,
    name: "Burger Cheeseburger",
    description: "Un hamburger juteux avec du fromage fondant, de la laitue, et une sauce maison.",
    price: 15,
    image: cheeseBurger,
    category:"entrées",
    categoryimage:entree
  },
  {
    id: 3,
    name: "Pâtes Carbonara",
    description: "Des pâtes al dente avec une sauce crémeuse à base de pancetta, d'œufs et de parmesan.",
    price: 18,
    image: pateCarbonara,
    category:"entrées",
    categoryimage:entree
  },
  {
    id: 4,
    name: "Salade César",
    description: "Salade croquante avec des morceaux de poulet grillé, des croûtons, du parmesan et une sauce César maison.",
    price: 10,
    image: saladeCesar,
    category:"dessert",
    categoryimage:dessert
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Un dessert italien classique à base de mascarpone, café et cacao.",
    price: 7,
    image: Tiramisu,
    category:"dessert",
    categoryimage:dessert
  },
  {
    id: 6,
    name: "Lasagne Bolognaise",
    description: "Lasagne maison avec une riche sauce bolognaise, du fromage et des pâtes fraîches.",
    price: 20,
    image: lasagneBolognaise,
    category:"plat",
    categoryimage:plat
  }
];
