import { supabase } from "../../login/authLogin";
export let categoryName = "";
export const categories:{category_name:string}={
  category_name:""
}
export const insertCategory = async (categoryName: string) => {
  try {
    const { data, error } = await supabase
      .from("products_categories")
      .insert([{ category_name: categoryName }])
      .select("*");
  } catch (err) {
    console.log(err);
  }
<<<<<<< HEAD
}
export const getAllCategories = async () => {
=======
};
export const getAll = async () => {
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
  try {
    let { data: products_categories, error } = await supabase
      .from("products_categories")
      .select("id,category_name");
    console.log(products_categories);
    return products_categories;
  } catch (err) {
    console.log(err);
  }
<<<<<<< HEAD
}
export const getAllCategoriesNames = async () => {
  try {
    let { data: products_categories, error } = await supabase
      .from("products_categories")
      .select("category_name");
    console.log(products_categories);
    return products_categories;
  } catch (err) {
    console.log(err);
  }
}
=======
};
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
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
<<<<<<< HEAD
}
=======
};
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
export const deleteCategory = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("products_categories")
      .delete()
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
<<<<<<< HEAD
}
console.log()
=======
};
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
