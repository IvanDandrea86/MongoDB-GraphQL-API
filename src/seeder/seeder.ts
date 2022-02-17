import artisans from  "../../data/artisan.json"
import { ArtisanModel } from "../entities/artisan/artisan"
import {ObjectId}from "mongodb"


export const seed =async()=>
{
     artisans.map(async elem=>{
         let loc= elem.Localité.split(" ")
    
         let ID=new ObjectId()
         let artisan = new ArtisanModel(
{
    _id:ID,
    email: elem.Email,
    companyNumber: elem["Numéro d'entreprise"],
    type:elem["Type d'entreprise"],
    langue:elem.Langue,
    legalForm:elem["Forme juridique"],
    name:elem.Nom,
     street:elem.Adresse,
        number:elem.Numéro,
        city:loc[1],
        cap:loc[0],
    telephone: elem.Téléphone, 
    startDate:elem["Date début"],
    endDate: elem["Date de fin"], 
    secteur:elem.Secteur
         
     
   })
   try {
    await artisan.save();
   } catch (err) {
    console.log(err);
   }
})

}
    
