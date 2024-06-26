import { supabase } from "../../login/authLogin";
import type UnitOfMesures from "../Entries/UnitOfMesures.svelte";
export let shortName = "";
export let largeName = "";

export const insertUnitsOfMeasures = async (shortName:string,largeName:string) => {
  try {
    const { data, error } = await supabase
      .from("units_of_measures")
      .insert([{ short_name: shortName, large_name: largeName }])
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const getAllMeasures = async () => {
  try {
    let { data: units_of_measures, error } = await supabase
      .from("units_of_measures")
      .select("*")
      .eq("active",true)
    console.log(units_of_measures);
    return units_of_measures;
  } catch (err) {
    console.log(err);
  }
};
export const getAllMeasuresNames = async () => {
  try {
    let { data: units_of_measures, error } = await supabase
      .from("units_of_measures")
      .select("large_name")
      .eq("active",true)
    console.log(units_of_measures);
    return units_of_measures;
  } catch (err) {
    console.log(err);
  }
};
export const updateUnitsOfMeasures = async (id: any, short_name: string, large_name:string) => {
  try {
    const { data, error } = await supabase
      .from("units_of_measures")
      .update({ short_name: short_name,large_name:large_name })
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const deleteUnitsOfMeasures = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("units_of_measures")
      .delete()
      .eq("id", id)
      .select();
      console.log(error)
  } catch (err) {
    console.log(err);
  }
};
