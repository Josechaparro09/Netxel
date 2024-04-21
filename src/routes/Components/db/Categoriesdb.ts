import { supabase } from "../../login/authLogin";
export let categoryName = "";

export const insertCategory = async (categoryName: string) => {
  try {
    const { data, error } = await supabase
      .from("products_categories")
      .insert([{ category_name: categoryName }])
      .select("*");
  } catch (err) {
    console.log(err);
  }
};
export const getAllCategories = async () => {
  try {
    let { data: products_categories, error } = await supabase
      .from("products_categories")
      .select("id,category_name")
      .eq("active",true)
    console.log(products_categories);
    return products_categories;
  } catch (err) {
    console.log(err);
  }
};
export const getAllCategoriesNames = async () => {
  try {
    let { data: products_categories, error } = await supabase
      .from("products_categories")
      .select("category_name")
      .eq("active",true)
    console.log(products_categories);
    return products_categories;
  } catch (err) {
    console.log(err);
  }
}

export const updateCategory = async (id: number, category_name: string) => {
  try {
    const { data, error } = await supabase
      .from("products_categories")
      .update({ category_name: category_name })
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const deleteCategory = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("products_categories")
      .update({ active: false })
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
};