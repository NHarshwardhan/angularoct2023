export interface IUser {
      id: number
      username: string
      name: string
      email: string
      address:{
            city:string,
            street: string,
            zipcode: number
      }
      phone: number
      website: string
}
