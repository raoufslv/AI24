import Assets from "@/assets/images/categories/3DAssets.png";
import Printing from "@/assets/images/categories/3DPrinting.png";
import Addons from "@/assets/images/categories/Addons.png";
import Animation from "@/assets/images/categories/Animation.png";
import Art from "@/assets/images/categories/Art.png";
import Materials from "@/assets/images/categories/Materials.png";
import Robots from "@/assets/images/categories/Robots.png";

export const categories = [
  {
    name: "courses",
    subcategories: [
      {
        name: "Character Creation",
        subjects: [
          "Character Anatomy",
          "Character Modeling",
          "Character Sculpting",
          "Stylized Characters",
        ],
        image: Art,
      },
      {
        name: "Hard Surface Modeling",
        subjects: ["Vehicles", "Weapons", "Robots"],
        image: Assets,
      },
      {
        name: "Sculpting",
        subjects: [
          "Human Body",
          "Human Head",
          "Animals",
          "Creatures",
          "Environments",
          "Props",
          "Plants & Trees",
        ],
        image: Printing,
      },
      {
        name: "Rigging",
        subjects: [
          "Vehicle RIgging",
          "Humanoid Rigging",
          "Weapon Rigging",
          "Animal R",
        ],
        image: Robots,
      },
      {
        name: "Animation",
        subjects: [
          "Character Animation",
          "Vehicles Animation",
          "Weapon Animation",
          "Animal Animation",
        ],
        image: Animation,
      },
      {
        name: "Environment Design",
        subjects: ["Sci-fi environment", "Natural Environment"],
        image: Addons,
      },
      {
        name: "Cloth",
        subjects: ["Cloth Design", "Cloth Simulation"],
        image: Art,
      },
      {
        name: "VFX",
        subjects: [
          "Compositing",
          "Camera Tracking",
          "Matt Painting",
          "Simulation",
        ],
        image: Materials,
      },
      {
        name: "Archviz",
        subjects: ["Interior Visualization", "Exterior Visualization"],
        image: Assets,
      },
      {
        name: "Lighting",
        image: Printing,
      },
      {
        name: "CAD Modeling",
        image: Robots,
      },
      {
        name: "3D Printing",
        image: Animation,
      },
      {
        name: "Texturing",
        image: Addons,
      },
    ],
  },
  {
    name: "Addons",
    subcategories: [
      { name: "Modeling", image: Addons },
      { name: "Hard Surface Modeling", image: Assets },
      { name: "Sculpting", image: Animation },
      { name: "Texturing", image: Printing },
      { name: "Rigging", image: Robots },
      { name: "Animation", image: Animation },
      { name: "Skinning & Weight painting", image: Materials },
      { name: "Cloth", image: Printing },
      { name: "Grease Pencil", image: Animation },
      { name: "Atmosphere", image: Addons },
      { name: "Vegetation", image: Art },
      { name: "VDB Addons", image: Assets },
      { name: "Terrain Generation", image: Materials },
      { name: "Damage Destruction", image: Robots },
      { name: "Compositing", image: Printing },
      { name: "AI", image: Assets },
      { name: "Character Creation", image: Animation },
      { name: "Clouds", image: Addons },
      { name: "Crowd Simulation", image: Art },
      { name: "Sci-Fi", image: Assets },
      { name: "Asset Managment", image: Materials },
      { name: "Rendering", image: Printing },
      { name: "Water Simulation", image: Addons },
      { name: "Scattering", image: Assets },
      { name: "Energy FX", image: Robots },
      { name: "Hair & Fur", image: Art },
      { name: "Motion Graphics", image: Animation },
      { name: "Pixal Art", image: Assets },
      { name: "Archviz Modeling", image: Materials },
      { name: "Fire & Explosions", image: Printing },
      { name: "Physics & Dynamics", image: Robots },
      { name: "Space", image: Addons },
      { name: "Roads & Streets", image: Assets },
      { name: "Sound", image: Art },
      { name: "Interface", image: Printing },
      { name: "Nodes", image: Materials },
      { name: "Building", image: Robots },
      { name: "Weather FX", image: Addons },
      { name: "CAD Modeling", image: Assets },
    ],
  },
  {
    name: "Materials",
    subcategories: [
      { name: "Wood", image: Materials },
      { name: "Metal", image: Robots },
      { name: "Plastic", image: Assets },
      { name: "Glass", image: Art },
      { name: "Concrete", image: Printing },
      { name: "Fabric", image: Addons },
      { name: "Rubber", image: Animation },
      { name: "Asphalt", image: Assets },
      { name: "Marble", image: Materials },
      { name: "Tile", image: Printing },
      { name: "Grass", image: Robots },
      { name: "Water", image: Art },
      { name: "Snow", image: Addons },
      { name: "Sand", image: Animation },
      { name: "Dirt", image: Assets },
    ],
  },
  {
    name: "Shaders",
    subcategories: [
      { name: "Glass", image: Art },
      { name: "Metal", image: Printing },
      { name: "Plastic", image: Robots },
      { name: "Fabric", image: Assets },
      { name: "Leather", image: Materials },
      { name: "Stone", image: Animation },
      { name: "Brick", image: Addons },
      { name: "Ceramic", image: Art },
      { name: "Paper", image: Printing },
      { name: "Paint", image: Robots },
      { name: "Carpet", image: Materials },
      { name: "Rubber", image: Animation },
      { name: "Asphalt", image: Addons },
      { name: "Marble", image: Art },
      { name: "Tile", image: Printing },
      { name: "Grass", image: Robots },
    ],
  },
  {
    name: "Brushes",
    subcategories: [
      { name: "Character", image: Materials },
      { name: "Environment", image: Animation },
      { name: "Props", image: Assets },
      { name: "Plants & Trees", image: Printing },
      { name: "Vehicles", image: Art },
      { name: "Weapons", image: Addons },
      { name: "Cloth", image: Animation },
      { name: "Hair", image: Materials },
      { name: "Fur", image: Printing },
      { name: "Skin", image: Assets },
      { name: "Materials", image: Art },
      { name: "Shaders", image: Animation },
      { name: "Textures", image: Addons },
      { name: "HDRI", image: Materials },
      { name: "Lighting", image: Printing },
      { name: "VFX", image: Art },
      { name: "Archviz", image: Assets },
      { name: "CAD Modeling", image: Animation },
      { name: "3D Printing", image: Addons },
      { name: "Texturing", image: Materials },
    ],
  },
  {
    name: "Models",
    subcategories: [
      { name: "Hair", image: Printing },
      { name: "Fur", image: Robots },
      { name: "Skin", image: Assets },
      { name: "Materials", image: Art },
      { name: "Shaders", image: Addons },
      { name: "Textures", image: Animation },
      { name: "HDRI", image: Materials },
      { name: "Lighting", image: Printing },
      { name: "VFX", image: Art },
      { name: "Archviz", image: Assets },
      { name: "CAD Modeling", image: Addons },
      { name: "3D Printing", image: Animation },
      { name: "Texturing", image: Materials },
    ],
  },
];
