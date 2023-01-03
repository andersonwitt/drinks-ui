import { categories } from "../../utils/Db";
import Tab from "../molecules/Tab";
import DrinksMenu from "../organisms/DrinksMenu";

const MenuTemplate = () => {
  return (
    <>
      <Tab
        items={categories.map((category) => ({
          label: category.label,
          value: category.value,
          component: <DrinksMenu items={category.items} />,
        }))}
        defaultValue="1"
      />
      <div></div>
    </>
  );
};

export default MenuTemplate;
