//import { categories } from "../../utils/Db";
import { useEffect, useState } from "react";
import Tab from "../molecules/Tab";
import DrinksMenu from "../organisms/DrinksMenu";

const MenuTemplate = () => {
  const [categories, setCategories] = useState<any[]>([]);

  const getCategories = async () => {
    const response = await fetch("https://localhost:5001/api/categories").then(
      (res) => res.json()
    );

    setCategories(response);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Tab
        items={categories.map((category, index) => ({
          label: category.name,
          value: String(index + 1),
          component: <DrinksMenu items={category.drinks} />,
        }))}
        defaultValue="1"
      />
      <div></div>
    </>
  );
};

export default MenuTemplate;
