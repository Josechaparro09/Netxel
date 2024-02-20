import { supabase } from "../../login/authLogin";

export const insertProducts = async (productName: any,categoryId:any,unitOfMesureId:any,salePrice:any,productionPrice:any, presentation:any,description:any) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert([{ product_name: productName,category_id:categoryId,unit_of_measure_id:unitOfMesureId ,sale_price:salePrice,production_price:productionPrice,presentation_quantity:presentation,description_product:description}])
        .select("*");
        console.log("Error: ",error,"Data: ",data);
    } catch (err) {
      console.log(err);
    }
  }
  export const getAllProducts = async () => {
    try {
      let { data: products, error } = await supabase
        .from("products")
        .select("*,products_categories(id,category_name),units_of_measures(id,large_name)")
        .eq('active', "true")
      console.log(products);
      if (error) {
        console.log(error)
      }
      return products;
    } catch (err) {
      console.log(err);
    }
  }
  export const updateProducts = async (id:any, productName: any,categoryId:any,unitOfMesureId:any,salePrice:any,productionPrice:any, presentation:any,description:any) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({ product_name: productName,category_id:categoryId,unit_of_measure_id:unitOfMesureId ,sale_price:salePrice,production_price:productionPrice,presentation_quantity:presentation,description_product:description })
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
  export const deleteProducts = async (id: any) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({ active:false})
        .eq("id", id)
        .select();
    } catch (err) {
      console.log(err);
    }
  }