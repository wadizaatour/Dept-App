export type Client = {
    id: number,
    brandName: string,
    src: string,
    description: string, 
    readmore: boolean,
    industry: string
}
export enum Industry {
    Technology = "technology",
    Commerce = "Commerce",
    Food = "Food",
    Travel = "Food",
}
const client: Client[] = [
    {
        id: 0,
        brandName: "FLORENSIS",
        src: "../src/assets/clientNote.png",
        description: "Rethinking the entire online ecosystem", 
        readmore: true,
        industry: "technology"
    },
    {
        id: 1,
        brandName: "Bol.com",
        src: "../src/assets/images/clientCard1.png",
        description: "A Summer island in the Netherlands", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 2,
        brandName: "KEMPEN",
        src: "../src/assets/images/clientCard2.png",
        description: "Not some average banking website", 
        readmore: true,
        industry: "banking"
        
    },
    {
        id: 3,
        brandName: "PHILIPS",
        src: "../src/assets/images/clientCard3.png",
        description: "Beautiful design meets innovative technology", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 4,
        brandName: "GEMEENTEMUSUEM",
        src: "../src/assets/images/clientCard4.png",
        description: "A 100 years of Mondriaan & De Stijl", 
        readmore: true,
        industry: "goverment"
        
    },
    {
        id: 5,
        brandName: "BE LIGHTNING",
        src: "../src/assets/images/clientCard5.png",
        description: "Delivering clarity on a global scale", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 6,
        brandName: "TUI",
        src: "../src/assets/images/clientCard6.png",
        description: "Swipe to find your next holiday destination", 
        readmore: true,
        industry: "travel"
    },
    {
        id: 7,
        brandName: "CHOCOMEL",
        src: "../src/assets/images/clientCard7.png",
        description: "A campaign for the limited edition letter packs", 
        readmore: true,
        industry: "food"
        
    },
    {
        id: 8,
        brandName: "JBL",
        src: "../src/assets/images/clientCard8.png",
        description: "Live like a champion with Jerome Boateng", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 9,
        brandName: "ZALANDO",
        src: "../src/assets/images/clientCard9.png",
        description: "Innovative SEO and content strategy for Zalando", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 10,
        brandName: "KONINKLIJKE BIBLIOTHEEK",
        src: "../src/assets/images/clientCard10.png",
        description: "The search of the most influential book ever", 
        readmore: true,
        industry: "bibliothec"
    },
    {
        id: 11,
        brandName: "Liberty GLOBAL",
        src: "../src/assets/images/clientCard11.png",
        description: "Delivering complex commerce solutions", 
        readmore: true,
        industry: "technology"
        
    },
    {
        id: 12,
        brandName: "ARLA",
        src: "../src/assets/images/clientCard12.png",
        description: "Swipe to find your next holiday destination", 
        readmore: true,
        industry: "food"
        
    },
      
];
export default client