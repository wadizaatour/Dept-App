export type Client = {
    id: number,
    brandName: string,
    src: string,
    description: string, 
    readmore: boolean,
}
const client: Client[] = [
    {
        id: 1,
        brandName: "Bol.com",
        src: "../src/assets/clientCard1.png",
        description: "A Summer island in the Netherlands", 
        readmore: true,
        
    },
    {
        id: 2,
        brandName: "KEMPEN",
        src: "../src/assets/clientCard2.png",
        description: "Not some average banking website", 
        readmore: true,
        
    },
  
    // {
    //     id: 3,
    //     brandName: "KEMPEN",
    //     src: "../src/assets/clientCard2.png",
    //     description: "Not some average banking website", 
    //     readmore: true,
        
    // },
  
     
];
export default client