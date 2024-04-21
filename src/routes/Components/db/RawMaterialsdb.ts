import { supabase } from "../../login/authLogin";

export const insertRawMaterials = async (RawMaterialName: any,ProviderId:any,unitOfMesureId:any) => {
    try {
      const { data, error } = await supabase
        .from("raw_materials")
        .insert([{ name: RawMaterialName,provider_id:ProviderId,unit_of_measure_id:unitOfMesureId }])
        .select("*");
        console.log("Error: ",error,"Data: ",data);
    } catch (err) {
      console.log(err);
    }
  }
  export const getAllRawMaterials = async () => {
    try {
      let { data: rawMaterials, error } = await supabase
        .from("raw_materials")
        .select("*,providers(id,name),units_of_measures(id,short_name)")
        .eq('active', "true")
      console.log(rawMaterials, error);
      if (error) {
        console.log(error)
      }
      return rawMaterials;
    } catch (err) {
      console.log(err);
    }
  }
  export const updateRawMaterials = async (id:any, RawMaterialName: any,ProviderId:any,unitOfMesureId:any) => {
    try {
      const { data, error } = await supabase
        .from("raw_materials")
        .update({ name: RawMaterialName,provider_id:ProviderId,unit_of_measure_id:unitOfMesureId  })
        .eq("id", id)
        .select();
        console.log("Error: ",error,"Data: ",data);
        if (error) {
        console.log(error)
        }
        
    } catch (err) {
      console.log(err);
    }
  }
  export const deleteRawMaterials = async (id: any) => {
    try {
      const { data, error } = await supabase
        .from("raw_materials")
        .update({ active:false})
        .eq("id", id)
        .select();
    } catch (err) {
      console.log(err);
    }
  }