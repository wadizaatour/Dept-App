export type Client = {
    id: number,
    brandName: string,
    src: string,
    description: string, 
    readmore: boolean,
    industry: string
    category: string
}
export enum Industry {
    Technology = "technology",
    Commerce = "Commerce",
    Food = "Food",
    Travel = "Travel",
}
export enum Category {
    Service = "Service",
    Nutrition = "Nutrition"
}
const client: Client[] = [
    {
        id: 0,
        brandName: "FLORENSIS",
        src: "../src/assets/clientNote.webp",
        description: "Rethinking the entire online ecosystem", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
    },
    {
        id: 1,
        brandName: "Bol.com",
        src: "../src/assets/images/clientCard1.webp",
        description: "A Summer island in the Netherlands", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
    },
    {
        id: 2,
        brandName: "KEMPEN",
        src: "../src/assets/images/clientCard2.webp",
        description: "Not some average banking website", 
        readmore: true,
        industry: Industry.Commerce,
        category: Category.Service
    },
    {
        id: 3,
        brandName: "PHILIPS",
        src: "../src/assets/images/clientCard3.webp",
        description: "Beautiful design meets innovative technology", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
        
    },
    {
        id: 4,
        brandName: "GEMEENTEMUSUEM",
        src: "../src/assets/images/clientCard4.webp",
        description: "A 100 years of Mondriaan & De Stijl", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
        
    },
    {
        id: 5,
        brandName: "BE LIGHTNING",
        src: "../src/assets/images/clientCard5.webp",
        description: "Delivering clarity on a global scale", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
        
    },
    {
        id: 6,
        brandName: "TUI",
        src: "../src/assets/images/clientCard6.webp",
        description: "Swipe to find your next holiday destination", 
        readmore: true,
        industry: Industry.Travel,
        category: Category.Service
    },
    {
        id: 7,
        brandName: "CHOCOMEL",
        src: "../src/assets/images/clientCard7.webp",
        description: "A campaign for the limited edition letter packs", 
        readmore: true,
        industry: Industry.Food,
        category: Category.Nutrition
        
    },
    {
        id: 8,
        brandName: "JBL",
        src: "../src/assets/images/clientCard8.webp",
        description: "Live like a champion with Jerome Boateng", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service
        
    },
    {
        id: 9,
        brandName: "ZALANDO",
        src: "../src/assets/images/clientCard9.webp",
        description: "Innovative SEO and content strategy for Zalando", 
        readmore: true,
        industry: Industry.Commerce,
        category: Category.Service

        
    },
    {
        id: 10,
        brandName: "KONINKLIJKE BIBLIOTHEEK",
        src: "../src/assets/images/clientCard10.webp",
        description: "The search of the most influential book ever", 
        readmore: true,
        industry: Industry.Technology,
        category: Category.Service

    },
    {
        id: 11,
        brandName: "Liberty GLOBAL",
        src: "../src/assets/images/clientCard11.webp",
        description: "Delivering complex commerce solutions", 
        readmore: true,
        industry: Industry.Travel,
        category: Category.Service

        
    },
    {
        id: 12,
        brandName: "ARLA",
        src: "../src/assets/images/clientCard12.webp",
        description: "Swipe to find your next holiday destination", 
        readmore: true,
        industry: Industry.Food,
        category: Category.Nutrition

        
    },
      
];
export default client