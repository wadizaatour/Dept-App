export type Client = {
    id: number,
    brandName: string,
    src: string,
    description: string, 
    readmore: boolean,
}
const client: Client[] = [
    {
        id: 0,
        brandName: "FLORENSIS",
        src: "../src/assets/clientNote.png",
        description: "Rethinking the entire online ecosystem", 
        readmore: true,
        
    },
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
      
];
export default client