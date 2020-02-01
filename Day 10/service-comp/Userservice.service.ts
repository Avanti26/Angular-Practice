export class UserService{

    constructor(){}
    getAllUsers()
    {
        return ( [
            {
                id:1,
                name:"Avanti",
                area:"Pratap nagar"
            },
            {
                id:2,
                name:"Kajal",
                area:"Subhash nagar"
            },
            {
                id:3,
                name:"Sayali",
                area:"Khamla"
            }
            ]);
    }
}