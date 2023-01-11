import aquaPrincessImg from '../images/products/aqua_princess.jpg';
import blkLeoPImg from '../images/products/black_leopard_print.jpg';
import dazzSquImg from '../images/products/dazzling_square.jpg';
import fancFushImg from '../images/products/fancy_fushia.jpg';
import gMarbMadImg from '../images/products/g.p_glitter_marble_madness.jpg';
import greGoldImg from '../images/products/green_gold.jpg';
// import lovLifeImg from '../images/products/loving_life.jpg';
import matNeoOraImg from '../images/products/matt_neon_orange.jpg';
import matTanGliImg from '../images/products/matt_tan_glitter_gem.jpg';
import nudeSpeckImg from '../images/products/nude_speckle.jpg';
import plPinkMarbMadImg from '../images/products/pale_pink_marble_madness.jpg';
import pinkFlwrPwrImg from '../images/products/pink_flower_power.jpg';
import prplPartyImg from '../images/products/purple_party.jpg';
import prplPassImg from '../images/products/purple_passion.jpg';
import redOpalVelvImg from '../images/products/red_opal_velvet.jpg';
import roseGoldMarbImg from '../images/products/rose_gold_marble.jpg';
import toneGreySandImg from '../images/products/two_tone_grey_sand.jpg';
 
 let Products = [
        {
            id: 1,
            name:" Dazzling Red",
            image: {dazzSquImg},
            alt: "Red glittery nails with gemstones in square shape",
            description: "These sophisticated nails are bold and glamorous, perfect for formal events or a night out.",
            options: [],
            filters: {
                colors: ["red", "silver"],
                collection: ["glitter", "gemstone"]
            }
        }
        , {
            id: 2,
            name: "Black Leopard Print",
            image: {blkLeoPImg},
            alt: "Leopard spots print in black",
            description:" This on trend nail design is perfect for casual outfits.",
            options: [],
            filters: {
                colors: ["brown", "black"],
                collection: ["animal"]
            }
        }, {
            id: 3,
            name: "Aqua Princess",
            image: {aquaPrincessImg},
            alt: "Aqua and white Princess style nails with gemstones",
            description:" Feminine and unique, pair with your perfect party outfit.",
            options: [],
            filters: {
                colors: ["blue", "green", "white"],
                collection: ["gemstone"]
            }
        },{
            id: 4,
            name: "Glitter Marble Madness",
            image: {gMarbMadImg},
            alt: "White and Grey marble with Pink nails, including gemstones",
            description:" Contemporary on trend nail design.",
            options: [],
            filters: {
                colors: ["pink", "white", "grey"],
                collection: ["glitter", "gemstone", "marble"]
            }
        },{
            id: 5,
            name: "Green Gold",
            image: {greGoldImg},
            alt: "Gold and green glittery nails",
            description: "",
            options: [],
            filters: {
                colors: ["brown", "blue"],
                collection: ["glitter", "gemstone"]
            }
        },{
            id: 6,
            name: "Fancy Fushia",
            image: {fancFushImg},
            alt: "Glittery fushia nails",
            description: "",
            options: [],
            filters: {
                colors: ["pink"],
                collection: ["glitter"]
            }
        }
    ]

    export default Products;
