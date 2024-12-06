import ListBar from "@/components/common/ListBar/ListBar";
import Toggle from "@/components/common/Toggle/Toggle";
import { Category } from "@/types";

import * as Styled from "./CategoryFilterItem.style";
import { useCategoryStore } from "@/store/categoryStore";

interface CategoryFilterItemProps {
  category: Category & { isSelected: boolean };
}

function CategoryFilterItem({ category }: CategoryFilterItemProps) {
  const { toggleFilterCategory } = useCategoryStore();

  return (
    <Styled.CategoryFilterItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={category.color} />
        {category.name}
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Toggle
          type="alarm"
          isOn={category.isSelected}
          onClick={() => toggleFilterCategory(category.categoryId)}
        />
      </Styled.RightWrapper>
    </Styled.CategoryFilterItemWrapper>
  );
}

export default CategoryFilterItem;
