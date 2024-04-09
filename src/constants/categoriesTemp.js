import Assets from "@/assets/images/categories/3DAssets.png";
import Addons from "@/assets/images/categories/Addons.png";
import Art from "@/assets/images/categories/Art.png";
import Materials from "@/assets/images/categories/Materials.png";
import Robots from "@/assets/images/categories/Robots.png";
import Character_Creation from "@/assets/images/categories/Character_Creation.jpg";
import hard_surface_modeling from "@/assets/images/categories/hard_surface_modeling.jpg";
import scuplting from "@/assets/images/categories/scuplting.jpg";
import Rigging from "@/assets/images/categories/Rigging.jpg";
import Animation from "@/assets/images/categories/Animation.jpg";
import Enviroment_Design from "@/assets/images/categories/Enviroment_Design.jpg";
import Environment_Design from "@/assets/images/categories/Environment_Design.jpg";
import Cloth from "@/assets/images/categories/Cloth.jpg";
import Lighting from "@/assets/images/categories/Lighting.jpg";
import CAD from "@/assets/images/categories/CAD.jpg";
import Simulation from "@/assets/images/categories/Simulation.jpg";
import scifi from "@/assets/images/categories/scifi.jpg";
import Nodes from "@/assets/images/categories/Nodes.png";
import VFX from "@/assets/images/categories/VFX.webp";
import Printing from "@/assets/images/categories/3d_printing.webp";
import texturing from "@/assets/images/categories/3d-texturing.webp";
import modeling from "@/assets/images/categories/modeling.webp";
import addons2D from "@/assets/images/categories/2D_addons.png";
import compositing from "@/assets/images/categories/compositing.png";
import AI from "@/assets/images/categories/ai.webp";
import Asset_Managment from "@/assets/images/categories/Asset_Managment.webp";
import rendering from "@/assets/images/categories/rendering.jpg";
import motion_graphics from "@/assets/images/categories/motion_graphics.jpg";
import sound from "@/assets/images/categories/sound.png";

export const categories = [
  {
    name: "Courses",
    subcategories: [
      {
        name: "Character Creation",
        subjects: [
          "Character Anatomy",
          "Character Modeling",
          "Character Sculpting",
          "Stylized Characters",
        ],
        image: Character_Creation,
      },
      {
        name: "Hard Surface Modeling",
        subjects: ["Vehicles", "Weapons", "Robots"],
        image: hard_surface_modeling,
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
        image: scuplting,
      },
      {
        name: "Rigging",
        subjects: [
          "Vehicle RIgging",
          "Humanoid Rigging",
          "Weapon Rigging",
          "Animal R",
        ],
        image: Rigging,
      },
      {
        name: "Environment Design",
        subjects: ["Sci-fi environment", "Natural Environment"],
        image: Environment_Design,
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
        name: "Cloth",
        subjects: ["Cloth Design", "Cloth Simulation"],
        image: Cloth,
      },
      {
        name: "VFX",
        subjects: [
          "Compositing",
          "Camera Tracking",
          "Matt Painting",
          "Simulation",
        ],
        image: VFX,
      },
      {
        name: "Archviz",
        subjects: ["Interior Visualization", "Exterior Visualization"],
        image: Enviroment_Design,
      },
      {
        name: "Lighting",
        image: Lighting,
      },
      {
        name: "CAD Modeling",
        image: CAD,
      },
      {
        name: "Texturing",
        image: texturing,
      },
      {
        name: "3D Printing",
        image: Printing,
      },
    ],
  },
  {
    name: "Addons",
    subcategories: [
      {
        name: "Modeling",
        subjects: [
          "Hard Surface Modeling",
          "Sculpting",
          "Retopology",
          "Archviz Modeling",
          "CAD Modeling",
        ],
        image: modeling,
      },
      {
        name: "Simulation",
        subjects: [
          "Cloth",
          "Damage Destruction",
          "Fire & Explosions",
          "Fluids & Water",
          "Hair & Fur",
          "Physics & Dynamics",
          "Crowd Simulation",
          "Energy FX",
          "VDB Addons",
        ],
        image: Simulation,
      },
      {
        name: "Enviromnet Creation",
        subjects: [
          "Atmosphere & Skies",
          "Terrain Generation",
          "Buildings",
          "Roads & Streets",
          "Clouds",
          "Fog",
          "Space",
          "Water/See/Ocean",
          "Scattering",
          "Vegetation",
          "Weather FX",
        ],
        image: Environment_Design,
      },
      {
        name: "Texturing",
        subjects: ["Texture Painting", "Material Libraries", "Texture Baking"],
        image: texturing,
      },
      {
        name: "2D Addons",
        subjects: ["Grease Pencil", "Cell Shading", "Pixal Art"],
        image: addons2D,
      },
      {
        name: "Rigging",
        subjects: ["Facial Rigging", "Skinning & Weight painting"],
        image: Rigging,
      },

      {
        name: "Sci-Fi",
        subjects: ["Spaceships", "Generative Sci-fi"],
        image: scifi,
      },
      { name: "Nodes", subjects: ["Geometry Nodes"], image: Nodes },
      { name: "Animation", image: Animation },
      { name: "Compositing", image: compositing },
      { name: "AI", image: AI },
      { name: "Character Creation", image: Character_Creation },
      { name: "Asset Managment", image: Asset_Managment },
      { name: "Rendering", image: rendering },
      { name: "Motion Graphics", image: motion_graphics },
      { name: "Sound", image: sound },
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
