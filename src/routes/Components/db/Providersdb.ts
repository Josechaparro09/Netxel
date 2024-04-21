import { supabase } from "../../login/authLogin";

export const insertProviders = async (providerName:string,providerPhone:string) => {
  try {
    const { data, error } = await supabase
      .from("providers")
      .insert([{ name: providerName, phone:providerPhone  }])
      .select();
      console.log("Error: ",error);
      
  } catch (err) {
    console.log(err);
  }
};
export const getAllProviders = async () => {
  try {
    let { data: providers, error } = await supabase
      .from("providers")
      .select("*")
      .eq("active",true)
    console.log(providers);
    return providers;
  } catch (err) {
    console.log(err);
  }
};
export const getAllProvidersNames = async () => {
  try {
    let { data: providers, error } = await supabase
      .from("providers")
      .select("name")
      .eq("active",true)
    console.log(providers);
    return providers;
  } catch (err) {
    console.log(err);
  }
};
export const updateProviders = async (id: any, providerName: string, providerPhone:string) => {
  try {
    const { data, error } = await supabase
      .from("providers")
      .update({ name: providerName,phone:providerPhone })
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const deleteProvider = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("providers")
      .delete()
      .eq("id", id)
      .select();
      console.log(error)
  } catch (err) {
    console.log(err);
  }
};
