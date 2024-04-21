import { supabase } from "../../login/authLogin";

export const insertEmployees = async (employeeName:string,employeeLastName:string,employeeIdentification:string,employeePhone:string) => {
  try {
    const { data, error } = await supabase
      .from("employees")
      .insert({name:employeeName,lastname:employeeLastName, identification:employeeIdentification,phone:employeePhone})
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const getAllEmployees = async () => {
  try {
    let { data: employees, error } = await supabase
      .from("employees")
      .select("*")
      .eq("active",true)
    console.log(employees);
    return employees;
  } catch (err) {
    console.log(err);
  }
};
export const getAllEmployeesNames = async () => {
  try {
    let { data: employees, error } = await supabase
      .from("employees")
      .select("name")
      .eq("active",true)
    console.log(employees);
    return employees;
  } catch (err) {
    console.log(err);
  }
};
export const updateEmployees = async (id: any, employeeName:string,employeeLastName:string,employeeIdentification:string,employeePhone:string) => {
  try {
    const { data, error } = await supabase
      .from("employees")
      .update({name:employeeName,lastname:employeeLastName, identification:employeeIdentification,phone:employeePhone})
      .eq("id", id)
      .select();
  } catch (err) {
    console.log(err);
  }
};
export const deleteEmployees = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("employees")
      .delete()
      .eq("id", id)
      .select();
      console.log(error)
  } catch (err) {
    console.log(err);
  }
};
