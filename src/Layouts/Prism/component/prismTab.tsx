import { Tabs } from "@components/index";
import { PrismLayoutTab } from "../prism.types";

export interface PrismTabProps extends PrismLayoutTab {
  onTabClick?: (id: number) => void;
  selected?: boolean;
}

const PrismTab: React.FC<PrismTabProps> = ({ title, icon, id, selected, onTabClick }) => {
  return (
    <Tabs
      title={title}
      label={title}
      selectType='select-300'
      direction='horizontal'
      selected={selected}
      icon={icon}
      onClick={() => {
        if (onTabClick) {
          onTabClick(id);
        }
      }}
    />
  );
};

export default PrismTab;
