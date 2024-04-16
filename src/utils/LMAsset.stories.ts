import type { Meta, StoryObj } from "@storybook/react";

import { LMAsset } from ".";
import { LumiaLogo } from "@icons/logo";
import { LmBuble } from "@icons/lmBuble";
import { LmCkAdd } from "@icons/lmCkAdd";
import { LmCkArrowBack } from "@icons/lmCkArrowBack";
import { LmCkArrowDown } from "@icons/lmCkArrowDown";
import { LmCkArrowForward } from "@icons/lmCkArrowForward";
import { LmCkArrowLeft } from "@icons/lmCkArrowLeft";
import { LmCkArrowRight } from "@icons/lmCkArrowRight";
import { LmCkArrowUp } from "@icons/lmCkArrowUp";
import { LmCkArrowUpDown } from "@icons/lmCkArrowUpDown";
import { LmCkAtSign } from "@icons/lmCkAtSign";
import { LmCkAttachment } from "@icons/lmCkAttachment";
import { LmCkBell } from "@icons/lmCkBell";
import { LmCkCalendar } from "@icons/lmCkCalendar";
import { LmCkCheck } from "@icons/lmCkCheck";
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
import { LmCkChevronDown } from "@icons/lmCkChevronDown";
import { LmCkChevronLeft } from "@icons/lmCkChevronLeft";
import { LmCkChevronRight } from "@icons/lmCkChevronRight";
import { LmCkChevronUp } from "@icons/lmCkChevronUp";
import { LmCkClose } from "@icons/lmCkClose";
import { LmCkCopy } from "@icons/lmCkCopy";
import { LmCkDelete } from "@icons/lmCkDelete";
import { LmCkDownload } from "@icons/lmCkDownload";
import { LmCkDragHandle } from "@icons/lmCkDragHandle";
import { LmCkEdit } from "@icons/lmCkEdit";
import { LmCkEmail } from "@icons/lmCkEmail";
import { LmCkExternalLink } from "@icons/lmCkExternalLink";
import { LmCkHamburger } from "@icons/lmCkHamburger";
import { LmCkInfo } from "@icons/lmCkInfo";
import { LmCkInfoOutline } from "@icons/lmCkInfoOutline";
import { LmCkLink } from "@icons/lmCkLink";
import { LmCkLock } from "@icons/lmCkLock";
import { LmCkMinus } from "@icons/lmCkMinus";
import { LmCkMoon } from "@icons/lmCkMoon";
import { LmCkNotAllowed } from "@icons/lmCkNotAllowed";
import { LmCkPhone } from "@icons/lmCkPhone";
import { LmCkPlusSquare } from "@icons/lmCkPlusSquare";
import { LmCkQuestion } from "@icons/lmCkQuestion";
import { LmCkQuestionOutline } from "@icons/lmCkQuestionOutline";
import { LmCkReact } from "@icons/lmCkReact";
import { LmCkRepeat } from "@icons/lmCkRepeat";
import { LmCkRepeatClock } from "@icons/lmCkRepeatClock";
import { LmCkSearch } from "@icons/lmCkSearch";
import { LmCkSearch2 } from "@icons/lmCkSearch2";
import { LmCkSettings } from "@icons/lmCkSettings";
import { LmCkSmallAdd } from "@icons/lmCkSmallAdd";
import { LmCkSmallClose } from "@icons/lmCkSmallClose";
import { LmCkSpinner } from "@icons/lmCkSpinner";
import { LmCkStar } from "@icons/lmCkStar";
import { LmCkSun } from "@icons/lmCkSun";
import { LmCkTime } from "@icons/lmCkTime";
import { LmCkTriangleDown } from "@icons/lmCkTriangleDown";
import { LmCkTriangleUp } from "@icons/lmCkTriangleUp";
import { LmCkUnlock } from "@icons/lmCkUnlock";
import { LmCkUpDown } from "@icons/lmCkUpDown";
import { LmCkView } from "@icons/lmCkView";
import { LmCkViewOff } from "@icons/lmCkViewOff";
import { LmCkWarning } from "@icons/lmCkWarning";
import { LmCkWarningTwo } from "@icons/lmCkWarningTwo";
import { LmLogOut } from "@icons/lmLogOut";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";
import { LmCkCamera } from "@icons/lmCkCamera";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Assets/LMAsset",
  component: LMAsset,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    Asset: LumiaLogo,
  },
} satisfies Meta<typeof LMAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    Asset: LumiaLogo,
    size: 2,
  },
};

export const Red: Story = {
  args: {
    Asset: LumiaLogo,
    color: "red",
  },
};

export const GreenLarge: Story = {
  args: {
    Asset: LumiaLogo,
    color: "green",
    size: 3,
  },
};

export const Buble: Story = {
  args: {
    Asset: LmBuble,
    color: "black",
    size: 3,
  },
};
export const CkAdd: Story = {
  args: {
    Asset: LmCkAdd,
    color: "black",
    size: 3,
  },
};
export const CkArrowBack: Story = {
  args: {
    Asset: LmCkArrowBack,
    color: "black",
    size: 3,
  },
};
export const CkArrowDown: Story = {
  args: {
    Asset: LmCkArrowDown,
    color: "black",
    size: 3,
  },
};
export const CkArrowForward: Story = {
  args: {
    Asset: LmCkArrowForward,
    color: "black",
    size: 3,
  },
};
export const CkArrowLeft: Story = {
  args: {
    Asset: LmCkArrowLeft,
    color: "black",
    size: 3,
  },
};
export const CkArrowRight: Story = {
  args: {
    Asset: LmCkArrowRight,
    color: "black",
    size: 3,
  },
};
export const CkArrowUp: Story = {
  args: {
    Asset: LmCkArrowUp,
    color: "black",
    size: 3,
  },
};
export const CkArrowUpDown: Story = {
  args: {
    Asset: LmCkArrowUpDown,
    color: "black",
    size: 3,
  },
};
export const CkAtSign: Story = {
  args: {
    Asset: LmCkAtSign,
    color: "black",
    size: 3,
  },
};
export const CkAttachment: Story = {
  args: {
    Asset: LmCkAttachment,
    color: "black",
    size: 3,
  },
};
export const CkBell: Story = {
  args: {
    Asset: LmCkBell,
    color: "black",
    size: 3,
  },
};
export const CkCalendar: Story = {
  args: {
    Asset: LmCkCalendar,
    color: "black",
    size: 3,
  },
};
export const CkCheck: Story = {
  args: {
    Asset: LmCkCheck,
    color: "black",
    size: 3,
  },
};
export const CkCheckCircle: Story = {
  args: {
    Asset: LmCkCheckCircle,
    color: "black",
    size: 3,
  },
};
export const CkChevronDown: Story = {
  args: {
    Asset: LmCkChevronDown,
    color: "black",
    size: 3,
  },
};
export const CkChevronLeft: Story = {
  args: {
    Asset: LmCkChevronLeft,
    color: "black",
    size: 3,
  },
};
export const CkChevronRight: Story = {
  args: {
    Asset: LmCkChevronRight,
    color: "black",
    size: 3,
  },
};
export const CkChevronUp: Story = {
  args: {
    Asset: LmCkChevronUp,
    color: "black",
    size: 3,
  },
};
export const CkClose: Story = {
  args: {
    Asset: LmCkClose,
    color: "black",
    size: 3,
  },
};
export const CkCopy: Story = {
  args: {
    Asset: LmCkCopy,
    color: "black",
    size: 3,
  },
};
export const CkDelete: Story = {
  args: {
    Asset: LmCkDelete,
    color: "black",
    size: 3,
  },
};
export const CkDownload: Story = {
  args: {
    Asset: LmCkDownload,
    color: "black",
    size: 3,
  },
};
export const CkDragHandle: Story = {
  args: {
    Asset: LmCkDragHandle,
    color: "black",
    size: 3,
  },
};
export const CkEdit: Story = {
  args: {
    Asset: LmCkEdit,
    color: "black",
    size: 3,
  },
};
export const CkEmail: Story = {
  args: {
    Asset: LmCkEmail,
    color: "black",
    size: 3,
  },
};
export const CkExternalLink: Story = {
  args: {
    Asset: LmCkExternalLink,
    color: "black",
    size: 3,
  },
};
export const CkHamburger: Story = {
  args: {
    Asset: LmCkHamburger,
    color: "black",
    size: 3,
  },
};
export const CkInfo: Story = {
  args: {
    Asset: LmCkInfo,
    color: "black",
    size: 3,
  },
};
export const CkInfoOutline: Story = {
  args: {
    Asset: LmCkInfoOutline,
    color: "black",
    size: 3,
  },
};
export const CkLink: Story = {
  args: {
    Asset: LmCkLink,
    color: "black",
    size: 3,
  },
};
export const CkLock: Story = {
  args: {
    Asset: LmCkLock,
    color: "black",
    size: 3,
  },
};
export const CkMinus: Story = {
  args: {
    Asset: LmCkMinus,
    color: "black",
    size: 3,
  },
};
export const CkMoon: Story = {
  args: {
    Asset: LmCkMoon,
    color: "black",
    size: 3,
  },
};
export const CkNotAllowed: Story = {
  args: {
    Asset: LmCkNotAllowed,
    color: "black",
    size: 3,
  },
};
export const CkPhone: Story = {
  args: {
    Asset: LmCkPhone,
    color: "black",
    size: 3,
  },
};
export const CkPlusSquare: Story = {
  args: {
    Asset: LmCkPlusSquare,
    color: "black",
    size: 3,
  },
};
export const CkQuestion: Story = {
  args: {
    Asset: LmCkQuestion,
    color: "black",
    size: 3,
  },
};
export const CkQuestionOutline: Story = {
  args: {
    Asset: LmCkQuestionOutline,
    color: "black",
    size: 3,
  },
};
export const CkReact: Story = {
  args: {
    Asset: LmCkReact,
    color: "black",
    size: 3,
  },
};
export const CkRepeat: Story = {
  args: {
    Asset: LmCkRepeat,
    color: "black",
    size: 3,
  },
};
export const CkRepeatClock: Story = {
  args: {
    Asset: LmCkRepeatClock,
    color: "black",
    size: 3,
  },
};
export const CkSearch: Story = {
  args: {
    Asset: LmCkSearch,
    color: "black",
    size: 3,
  },
};
export const CkSearch2: Story = {
  args: {
    Asset: LmCkSearch2,
    color: "black",
    size: 3,
  },
};
export const CkSettings: Story = {
  args: {
    Asset: LmCkSettings,
    color: "black",
    size: 3,
  },
};
export const CkSmallAdd: Story = {
  args: {
    Asset: LmCkSmallAdd,
    color: "black",
    size: 3,
  },
};
export const CkSmallClose: Story = {
  args: {
    Asset: LmCkSmallClose,
    color: "black",
    size: 3,
  },
};
export const CkSpinner: Story = {
  args: {
    Asset: LmCkSpinner,
    color: "black",
    size: 3,
  },
};
export const CkStar: Story = {
  args: {
    Asset: LmCkStar,
    color: "black",
    size: 3,
  },
};
export const CkSun: Story = {
  args: {
    Asset: LmCkSun,
    color: "black",
    size: 3,
  },
};
export const CkTime: Story = {
  args: {
    Asset: LmCkTime,
    color: "black",
    size: 3,
  },
};
export const CkTriangleDown: Story = {
  args: {
    Asset: LmCkTriangleDown,
    color: "black",
    size: 3,
  },
};
export const CkTriangleUp: Story = {
  args: {
    Asset: LmCkTriangleUp,
    color: "black",
    size: 3,
  },
};
export const CkUnlock: Story = {
  args: {
    Asset: LmCkUnlock,
    color: "black",
    size: 3,
  },
};
export const CkUpDown: Story = {
  args: {
    Asset: LmCkUpDown,
    color: "black",
    size: 3,
  },
};
export const CkView: Story = {
  args: {
    Asset: LmCkView,
    color: "black",
    size: 3,
  },
};
export const CkViewOff: Story = {
  args: {
    Asset: LmCkViewOff,
    color: "black",
    size: 3,
  },
};
export const CkWarning: Story = {
  args: {
    Asset: LmCkWarning,
    color: "black",
    size: 3,
  },
};
export const CkWarningTwo: Story = {
  args: {
    Asset: LmCkWarningTwo,
    color: "black",
    size: 3,
  },
};
export const LogOut: Story = {
  args: {
    Asset: LmLogOut,
    color: "black",
    size: 3,
  },
};
export const Hide: Story = {
  args: {
    Asset: LmHide,
    color: "black",
    size: 3,
  },
};
export const Show: Story = {
  args: {
    Asset: LmShow,
    color: "black",
    size: 3,
  },
};
export const CkCamera: Story = {
  args: {
    Asset: LmCkCamera,
    color: "black",
    size: 3,
  },
};
