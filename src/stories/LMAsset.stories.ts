import type { Meta, StoryObj } from "@storybook/react";

import { LMAsset } from "../utils";
import { LmBubble } from "@icons/lmBubble";
import { LmInfo } from "@icons/lmInfo";
import { LumiaLogo } from "@icons/logo";
import { LmSun } from "@icons/lmSun";
import { LmArrowDown } from "@icons/lmArrowDown";
import { LmArrowDownCircle } from "@icons/lmArrowDownCircle";
import { LmArrowLeft } from "@icons/lmArrowLeft";
import { LmArrowRight } from "@icons/lmArrowRight";
import { LmArrowUpCircle } from "@icons/lmArrowUpCircle";
import { LmArrowLeftCircle } from "@icons/lmArrowLeftCircle";
import { LmArrowRightCircle } from "@icons/lmArrowRightCircle";
import { LmBackArrowResetReply } from "@icons/lmBackArrowResetReply";
import { LmBedSleepingNight } from "@icons/lmBedSleepingNight";
import { LmBagBackpack } from "@icons/lmBagBackpack";
import { LmBriefcaseSuitcaseLuggage } from "@icons/lmBriefcaseSuitcaseLuggage";
import { LmCheckmarkAproveConfirm } from "@icons/lmCheckmarkAproveConfirm";
import { LmArrowUp } from "@icons/lmArrowUp";
import { LmCameraPhoto } from "@icons/lmCameraPhoto";
import { LmChevronArrowDown } from "@icons/lmChevronArrowDown";
import { LmCheckmarkInCircle } from "@icons/lmCheckmarkInCircle";
import { LmChevronArrowLeft } from "@icons/lmChevronArrowLeft";
import { LmChevronArrowRight } from "@icons/lmChevronArrowRight";
import { LmChevronArrowUp } from "@icons/lmChevronArrowUp";
import { LmClock } from "@icons/lmClock";
import { LmCoinStackedDrum } from "@icons/lmCoinStackedDrum";
import { LmCommentSpeech } from "@icons/lmCommentSpeech";
import { LmCommentSpeechRound } from "@icons/lmCommentSpeechRound";
import { LmCommentSpeechRoundTypingEllipse } from "@icons/lmCommentSpeechRoundTypingEllipse";
import { LmCommentSpeechTypingEllipse } from "@icons/lmCommentSpeechTypingEllipse";
import { LmCursorPanResize } from "@icons/lmCursorPanResize";
import { LmCubeSquare3d } from "@icons/lmCubeSquare3d";
import { LmCursorResizeDiagonal } from "@icons/lmCursorResizeDiagonal";
import { LmCursorResizeHorizontal } from "@icons/lmCursorResizeHorizontal";
import { LmDesktopMonitor } from "@icons/lmDesktopMonitor";
import { LmDatabaseDrumBarrel } from "@icons/lmDatabaseDrumBarrel";
import { LmCursorResizeVertical } from "@icons/lmCursorResizeVertical";
import { LmDoubleBackArrowReplyAll } from "@icons/lmDoubleBackArrowReplyAll";
import { LmEnterEntrance } from "@icons/lmEnterEntrance";
import { LmDivisionDivideObelusMath } from "@icons/lmDivisionDivideObelusMath";
import { LmExclamationInCircleWarning } from "@icons/lmExclamationInCircleWarning";
import { LmEditNote } from "@icons/lmEditNote";
import { LmExitLeave } from "@icons/lmExitLeave";
import { LmExclamationWarning } from "@icons/lmExclamationWarning";
import { LmExternalLinkHyperlink } from "@icons/lmExternalLinkHyperlink";
import { LmExportEject } from "@icons/lmExportEject";
import { LmFavoriteFlagSaved } from "@icons/lmFavoriteFlagSaved";
import { LmEyedropperDropperColorPicker } from "@icons/lmEyedropperDropperColorPicker";
import { LmFilterFunnel } from "@icons/lmFilterFunnel";
import { LmFavoriteStar } from "@icons/lmFavoriteStar";
import { LmFileFolderOrganize } from "@icons/lmFileFolderOrganize";
import { LmFourSquareMenuTile } from "@icons/lmFourSquareMenuTile";
import { LmFlagFlagpole } from "@icons/lmFlagFlagpole";
import { LmFullscreenEnter } from "@icons/lmFullscreenEnter";
import { LmFullscreenEnterArrows } from "@icons/lmFullscreenEnterArrows";
import { LmFullscreenExitArrows } from "@icons/lmFullscreenExitArrows";
import { LmForwardArrow } from "@icons/lmForwardArrow";
import { LmImportDownload } from "@icons/lmImportDownload";
import { LmHomeMenu2 } from "@icons/lmHomeMenu2";
import { LmInboxFileDrawer } from "@icons/lmInboxFileDrawer";
import { LmInvisivleEyeClosed } from "@icons/lmInvisivleEyeClosed";
import { LmMailEmailLetter } from "@icons/lmMailEmailLetter";
import { LmLockedLockPadlock } from "@icons/lmLockedLockPadlock";
import { LmMapLocationMarker } from "@icons/lmMapLocationMarker";
import { LmMenuHamburger } from "@icons/lmMenuHamburger";
import { LmMapPaperFolded } from "@icons/lmMapPaperFolded";
import { LmMinusInCircleSubtract } from "@icons/lmMinusInCircleSubtract";
import { LmFullscreenExit } from "@icons/lmFullscreenExit";
import { LmMinusSubtractMath } from "@icons/lmMinusSubtractMath";
import { LmMultipleFilesFoldersOrganize } from "@icons/lmMultipleFilesFoldersOrganize";
import { LmMicrophone } from "@icons/lmMicrophone";
import { LmPaperFileDocument } from "@icons/lmPaperFileDocument";
import { LmPaperclipAttachment } from "@icons/lmPaperclipAttachment";
import { LmPencilEdit1 } from "@icons/lmPencilEdit1";
import { LmPaperFileDocument2 } from "@icons/lmPaperFileDocument2";
import { LmPhoneSmartphoneMobile } from "@icons/lmPhoneSmartphoneMobile";
import { LmPencilEdit } from "@icons/lmPencilEdit";
import { LmPickerTargetAimSight } from "@icons/lmPickerTargetAimSight";
import { LmPieChartGraph } from "@icons/lmPieChartGraph";
import { LmPinMapLocation } from "@icons/lmPinMapLocation";
import { LmPlusInCircleAdd } from "@icons/lmPlusInCircleAdd";
import { LmProfileUserPersonAccount } from "@icons/lmProfileUserPersonAccount";
import { LmSaveFloppy } from "@icons/lmSaveFloppy";
import { LmPlusAddMath } from "@icons/lmPlusAddMath";
import { LmSearchMagnifyingGlass } from "@icons/lmSearchMagnifyingGlass";
import { LmRefresh } from "@icons/lmRefresh";
import { LmSettingsCog } from "@icons/lmSettingsCog";
import { LmShoppingCart } from "@icons/lmShoppingCart";
import { LmShoppingCart2 } from "@icons/lmShoppingCart2";
import { LmSignalStrength2 } from "@icons/lmSignalStrength2";
import { LmSignalStrengthDiagonal } from "@icons/lmSignalStrengthDiagonal";
import { LmSignalStrength3 } from "@icons/lmSignalStrength3";
import { LmSendPlane } from "@icons/lmSendPlane";
import { LmStickyNote } from "@icons/lmStickyNote";
import { LmTabletMobile } from "@icons/lmTabletMobile";
import { LmTelevision } from "@icons/lmTelevision";
import { LmTrashCanDelete } from "@icons/lmTrashCanDelete";
import { LmUnlockedLockPadlock } from "@icons/lmUnlockedLockPadlock";
import { LmTicket } from "@icons/lmTicket";
import { LmWarningStrikethrough } from "@icons/lmWarningStrikethrough";
import { LmVisibleEyeOpen } from "@icons/lmVisibleEyeOpen";
import { LmXInCircleWarningDelete } from "@icons/lmXInCircleWarningDelete";
import { LmZoomIn } from "@icons/lmZoomIn";
import { LmZoomOut } from "@icons/lmZoomOut";
import { LmXWarningDeleteCloseMultiplyMath } from "@icons/lmXWarningDeleteCloseMultiplyMath";
import { LmBatteryCharge0ZeroEmpty } from "@icons/lmBatteryCharge0ZeroEmpty";
import { LmBatteryCharge100Full } from "@icons/lmBatteryCharge100Full";
import { LmBatteryCharge25 } from "@icons/lmBatteryCharge25";
import { LmBatteryCharge50 } from "@icons/lmBatteryCharge50";
import { LmBatteryCharge75 } from "@icons/lmBatteryCharge75";
import { LmBitcoinMoneyCurrencyCrypto } from "@icons/lmBitcoinMoneyCurrencyCrypto";
import { LmBluetooth } from "@icons/lmBluetooth";
import { LmBrightnessHighBright } from "@icons/lmBrightnessHighBright";
import { LmBrightnessLowDim } from "@icons/lmBrightnessLowDim";
import { LmBrightnessMediumMiddle } from "@icons/lmBrightnessMediumMiddle";
import { LmBusTransportationVehicle } from "@icons/lmBusTransportationVehicle";
import { LmCalendarDate1 } from "@icons/lmCalendarDate1";
import { LmCalendarDate2 } from "@icons/lmCalendarDate2";
import { LmCalendarDate3 } from "@icons/lmCalendarDate3";
import { LmCarTransportationVehicle } from "@icons/lmCarTransportationVehicle";
import { LmChromeChromeOSLogo } from "@icons/lmChromeChromeOSLogo";
import { LmCircleEllipseShape } from "@icons/lmCircleEllipseShape";
import { LmCommandAppleKeyLoopedSquare } from "@icons/lmCommandAppleKeyLoopedSquare";
import { LmCreditCard } from "@icons/lmCreditCard";
import { LmDiamondComponentInstanceFigmaShape } from "@icons/lmDiamondComponentInstanceFigmaShape";
import { LmDiamondComponentMasterFigma } from "@icons/lmDiamondComponentMasterFigma";
import { LmDollarMoneyCurrencyUSD } from "@icons/lmDollarMoneyCurrencyUSD";
import { LmDotMenuEllipseSmall } from "@icons/lmDotMenuEllipseSmall";
import { LmEnvelopeOpenRead } from "@icons/lmEnvelopeOpenRead";
import { LmEuroMoneyCurrency } from "@icons/lmEuroMoneyCurrency";
import { LmFastFowardMedia } from "@icons/lmFastFowardMedia";
import { LmFigmaLogoF } from "@icons/lmFigmaLogoF";
import { LmFrownSadFace } from "@icons/lmFrownSadFace";
import { LmGlasses } from "@icons/lmGlasses";
import { LmGlobeGlobalPlanetWorldEarth } from "@icons/lmGlobeGlobalPlanetWorldEarth";
import { LmHeartFavoriteSave } from "@icons/lmHeartFavoriteSave";
import { LmImageThumbnail } from "@icons/lmImageThumbnail";
import { LmLetterCircle } from "@icons/lmLetterCircle";
import { LmLetterSquare } from "@icons/lmLetterSquare";
import { LmLifesaverHelpSafety } from "@icons/lmLifesaverHelpSafety";
import { LmLightBulbLightbulbIdea } from "@icons/lmLightBulbLightbulbIdea";
import { LmMacAppleLogo } from "@icons/lmMacAppleLogo";
import { LmNeutralFace } from "@icons/lmNeutralFace";
import { LmNextForwardMedia } from "@icons/lmNextForwardMedia";
import { LmNumberCircle } from "@icons/lmNumberCircle";
import { LmNumberSquare } from "@icons/lmNumberSquare";
import { LmOptionAltKey } from "@icons/lmOptionAltKey";
import { LmOnigiriRiceBall } from "@icons/lmOnigiriRiceBall";
import { LmPauseMedia } from "@icons/lmPauseMedia";
import { LmPersonSitting } from "@icons/lmPersonSitting";
import { LmPersonSittingElderly } from "@icons/lmPersonSittingElderly";
import { LmPersonSittingInjuredHandicap } from "@icons/lmPersonSittingInjuredHandicap";
import { LmPersonSittingInternalHandicapHeart } from "@icons/lmPersonSittingInternalHandicapHeart";
import { LmPersonSittingInWheelchairHandicap } from "@icons/lmPersonSittingInWheelchairHandicap";
import { LmPersonSittingPregnant } from "@icons/lmPersonSittingPregnant";
import { LmPersonWalkingTransportation } from "@icons/lmPersonWalkingTransportation";
import { LmPlayMedia } from "@icons/lmPlayMedia";
import { LmPoundMoneyCurrencyGBP } from "@icons/lmPoundMoneyCurrencyGBP";
import { LmPower } from "@icons/lmPower";
import { LmPreviousBackwardsMedia } from "@icons/lmPreviousBackwardsMedia";
import { LmRefreshArrowRestartRedo } from "@icons/lmRefreshArrowRestartRedo";
import { LmRewindMedia } from "@icons/lmRewindMedia";
import { LmRubleMoneyCurrency } from "@icons/lmRubleMoneyCurrency";
import { LmSignalBars } from "@icons/lmSignalBars";
import { LmSignalFull100 } from "@icons/lmSignalFull100";
import { LmSignalLow } from "@icons/lmSignalLow";
import { LmSignalMedium50 } from "@icons/lmSignalMedium50";
import { LmSmileyHappyFace } from "@icons/lmSmileyHappyFace";
import { LmSquareRectangleShape } from "@icons/lmSquareRectangleShape";
import { LmStopMedia } from "@icons/lmStopMedia";
import { LmSubwayTransportationVehicle } from "@icons/lmSubwayTransportationVehicle";
import { LmTargetBullseye } from "@icons/lmTargetBullseye";
import { LmThumbsDownDislikeVote } from "@icons/lmThumbsDownDislikeVote";
import { LmThumbsUpLikeVote } from "@icons/lmThumbsUpLikeVote";
import { LmTrainRailTransportationVehicle } from "@icons/lmTrainRailTransportationVehicle";
import { LmTranslateTranslation } from "@icons/lmTranslateTranslation";
import { LmTriangleShape } from "@icons/lmTriangleShape";
import { LmUndoArrowRestartRefresh } from "@icons/lmUndoArrowRestartRefresh";
import { LmVolumeHigherVolumeUp } from "@icons/lmVolumeHigherVolumeUp";
import { LmVolumeLowerVolumeDown } from "@icons/lmVolumeLowerVolumeDown";
import { LmVolumeMute } from "@icons/lmVolumeMute";
import { LmWarningTriangleCaution } from "@icons/lmWarningTriangleCaution";
import { LmWindowsKeyLogo } from "@icons/lmWindowsKeyLogo";
import { LmWindowSwatchCard } from "@icons/lmWindowSwatchCard";
import { LmYenRenminbiMoneyCurrencyJPYRMB } from "@icons/lmYenRenminbiMoneyCurrencyJPYRMB";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/LMAsset",
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
export const OneSize: Story = {
  args: {
    Asset: LmBubble,
  },
};

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
export const Sun: Story = {
  args: {
    Asset: LmSun,
    color: "yellow",
    size: 3,
  },
};
export const ArrowDown: Story = {
  args: {
    Asset: LmArrowDown,
    color: "black",
    size: 3,
  },
};
export const ArrowDownCircle: Story = {
  args: {
    Asset: LmArrowDownCircle,
    color: "black",
    size: 3,
  },
};
export const ArrowLeftCircle: Story = {
  args: {
    Asset: LmArrowLeftCircle,
    color: "black",
    size: 3,
  },
};
export const ArrowIeft: Story = {
  args: {
    Asset: LmArrowLeft,
    color: "black",
    size: 3,
  },
};
export const ArrowRight: Story = {
  args: {
    Asset: LmArrowRight,
    color: "black",
    size: 3,
  },
};
export const ArrowRightCircle: Story = {
  args: {
    Asset: LmArrowRightCircle,
    color: "black",
    size: 3,
  },
};
export const ArrowUp: Story = {
  args: {
    Asset: LmArrowUp,
    color: "black",
    size: 3,
  },
};
export const ArrowUpCircle: Story = {
  args: {
    Asset: LmArrowUpCircle,
    color: "black",
    size: 3,
  },
};
export const BackArrowResetReply: Story = {
  args: {
    Asset: LmBackArrowResetReply,
    color: "black",
    size: 3,
  },
};
export const BagBackpack: Story = {
  args: {
    Asset: LmBagBackpack,
    color: "black",
    size: 3,
  },
};
export const BedSleepingNight: Story = {
  args: {
    Asset: LmBedSleepingNight,
    color: "black",
    size: 3,
  },
};
export const BriefcaseSuitcaseLuggage: Story = {
  args: {
    Asset: LmBriefcaseSuitcaseLuggage,
    color: "black",
    size: 3,
  },
};
export const CameraPhoto: Story = {
  args: {
    Asset: LmCameraPhoto,
    color: "black",
    size: 3,
  },
};
export const CheckmarkAproveConfirm: Story = {
  args: {
    Asset: LmCheckmarkAproveConfirm,
    color: "black",
    size: 3,
  },
};
export const CheckmarkInCircle: Story = {
  args: {
    Asset: LmCheckmarkInCircle,
    color: "black",
    size: 3,
  },
};
export const ChevronArrowDown: Story = {
  args: {
    Asset: LmChevronArrowDown,
    color: "black",
    size: 3,
  },
};
export const ChevronArrowLeft: Story = {
  args: {
    Asset: LmChevronArrowLeft,
    color: "black",
    size: 3,
  },
};
export const ChevronArrowRight: Story = {
  args: {
    Asset: LmChevronArrowRight,
    color: "black",
    size: 3,
  },
};
export const ChevronArrowUp: Story = {
  args: {
    Asset: LmChevronArrowUp,
    color: "black",
    size: 3,
  },
};
export const Clock: Story = {
  args: {
    Asset: LmClock,
    color: "black",
    size: 3,
  },
};
export const CoinStackedDrum: Story = {
  args: {
    Asset: LmCoinStackedDrum,
    color: "black",
    size: 3,
  },
};
export const CommentSpeechRound: Story = {
  args: {
    Asset: LmCommentSpeechRound,
    color: "black",
    size: 3,
  },
};
export const CommentSpeechRoundTypingEllipse: Story = {
  args: {
    Asset: LmCommentSpeechRoundTypingEllipse,
    color: "black",
    size: 3,
  },
};
export const CommentSpeechTypingEllipse: Story = {
  args: {
    Asset: LmCommentSpeechTypingEllipse,
    color: "black",
    size: 3,
  },
};
export const CubeSquare3d: Story = {
  args: {
    Asset: LmCubeSquare3d,
    color: "black",
    size: 3,
  },
};
export const CursorPanResize: Story = {
  args: {
    Asset: LmCursorPanResize,
    color: "black",
    size: 3,
  },
};
export const CommentSpeech: Story = {
  args: {
    Asset: LmCommentSpeech,
    color: "black",
    size: 3,
  },
};
export const CursorResizeDiagonal: Story = {
  args: {
    Asset: LmCursorResizeDiagonal,
    color: "black",
    size: 3,
  },
};
export const CursorResizeHorizontal: Story = {
  args: {
    Asset: LmCursorResizeHorizontal,
    color: "black",
    size: 3,
  },
};
export const DatabaseDrumBarrel: Story = {
  args: {
    Asset: LmDatabaseDrumBarrel,
    color: "black",
    size: 3,
  },
};
export const DesktopMonitor: Story = {
  args: {
    Asset: LmDesktopMonitor,
    color: "black",
    size: 3,
  },
};
export const CursorResizeVertical: Story = {
  args: {
    Asset: LmCursorResizeVertical,
    color: "black",
    size: 3,
  },
};
export const DivisionDivideObelusMath: Story = {
  args: {
    Asset: LmDivisionDivideObelusMath,
    color: "black",
    size: 3,
  },
};
export const DoubleBackArrowReplyAll: Story = {
  args: {
    Asset: LmDoubleBackArrowReplyAll,
    color: "black",
    size: 3,
  },
};
export const EditNote: Story = {
  args: {
    Asset: LmEditNote,
    color: "black",
    size: 3,
  },
};
export const EnterEntrance: Story = {
  args: {
    Asset: LmEnterEntrance,
    color: "black",
    size: 3,
  },
};
export const ExclamationInCircleWarning: Story = {
  args: {
    Asset: LmExclamationInCircleWarning,
    color: "black",
    size: 3,
  },
};
export const ExitLeave: Story = {
  args: {
    Asset: LmExitLeave,
    color: "black",
    size: 3,
  },
};
export const ExclamationWarning: Story = {
  args: {
    Asset: LmExclamationWarning,
    color: "black",
    size: 3,
  },
};
export const ExportEject: Story = {
  args: {
    Asset: LmExportEject,
    color: "black",
    size: 3,
  },
};
export const EyedropperDropperColorPicker: Story = {
  args: {
    Asset: LmEyedropperDropperColorPicker,
    color: "black",
    size: 3,
  },
};
export const FavoriteFlagSaved: Story = {
  args: {
    Asset: LmFavoriteFlagSaved,
    color: "black",
    size: 3,
  },
};
export const ExternalLinkHyperlink: Story = {
  args: {
    Asset: LmExternalLinkHyperlink,
    color: "black",
    size: 3,
  },
};
export const FileFolderOrganize: Story = {
  args: {
    Asset: LmFileFolderOrganize,
    color: "black",
    size: 3,
  },
};
export const FavoriteStar: Story = {
  args: {
    Asset: LmFavoriteStar,
    color: "black",
    size: 3,
  },
};
export const FilterFunnel: Story = {
  args: {
    Asset: LmFilterFunnel,
    color: "black",
    size: 3,
  },
};
export const FlagFlagpole: Story = {
  args: {
    Asset: LmFlagFlagpole,
    color: "black",
    size: 3,
  },
};
export const ForwardArrow: Story = {
  args: {
    Asset: LmForwardArrow,
    color: "black",
    size: 3,
  },
};
export const FourSquareMenuTile: Story = {
  args: {
    Asset: LmFourSquareMenuTile,
    color: "black",
    size: 3,
  },
};
export const FullscreenEnterArrows: Story = {
  args: {
    Asset: LmFullscreenEnterArrows,
    color: "black",
    size: 3,
  },
};
export const FullscreenEnter: Story = {
  args: {
    Asset: LmFullscreenEnter,
    color: "black",
    size: 3,
  },
};
export const FullscreenExitArrows: Story = {
  args: {
    Asset: LmFullscreenExitArrows,
    color: "black",
    size: 3,
  },
};
export const FullscreenExit: Story = {
  args: {
    Asset: LmFullscreenExit,
    color: "black",
    size: 3,
  },
};
export const HomeMenu2: Story = {
  args: {
    Asset: LmHomeMenu2,
    color: "black",
    size: 3,
  },
};
export const ImportDownload: Story = {
  args: {
    Asset: LmImportDownload,
    color: "black",
    size: 3,
  },
};
export const InvisivleEyeClosed: Story = {
  args: {
    Asset: LmInvisivleEyeClosed,
    color: "black",
    size: 3,
  },
};
export const LockedLockPadlock: Story = {
  args: {
    Asset: LmLockedLockPadlock,
    color: "black",
    size: 3,
  },
};
export const MailEmailLetter: Story = {
  args: {
    Asset: LmMailEmailLetter,
    color: "black",
    size: 3,
  },
};
export const MapLocationMarker: Story = {
  args: {
    Asset: LmMapLocationMarker,
    color: "black",
    size: 3,
  },
};
export const InboxFileDrawer: Story = {
  args: {
    Asset: LmInboxFileDrawer,
    color: "black",
    size: 3,
  },
};
export const MenuHamburger: Story = {
  args: {
    Asset: LmMenuHamburger,
    color: "black",
    size: 3,
  },
};
export const MapPaperFolded: Story = {
  args: {
    Asset: LmMapPaperFolded,
    color: "black",
    size: 3,
  },
};
export const Microphone: Story = {
  args: {
    Asset: LmMicrophone,
    color: "black",
    size: 3,
  },
};
export const MinusInCircleSubtract: Story = {
  args: {
    Asset: LmMinusInCircleSubtract,
    color: "black",
    size: 3,
  },
};
export const MinusSubtractMath: Story = {
  args: {
    Asset: LmMinusSubtractMath,
    color: "black",
    size: 3,
  },
};
export const MultipleFilesFoldersOrganize: Story = {
  args: {
    Asset: LmMultipleFilesFoldersOrganize,
    color: "black",
    size: 3,
  },
};
export const PaperFileDocument: Story = {
  args: {
    Asset: LmPaperFileDocument,
    color: "black",
    size: 3,
  },
};
export const PaperclipAttachment: Story = {
  args: {
    Asset: LmPaperclipAttachment,
    color: "black",
    size: 3,
  },
};
export const PaperFileDocument2: Story = {
  args: {
    Asset: LmPaperFileDocument2,
    color: "black",
    size: 3,
  },
};
export const PencilEdit1: Story = {
  args: {
    Asset: LmPencilEdit1,
    color: "black",
    size: 3,
  },
};
export const PhoneSmartphoneMobile: Story = {
  args: {
    Asset: LmPhoneSmartphoneMobile,
    color: "black",
    size: 3,
  },
};
export const PencilEdit: Story = {
  args: {
    Asset: LmPencilEdit,
    color: "black",
    size: 3,
  },
};
export const PickerTargetAimSight: Story = {
  args: {
    Asset: LmPickerTargetAimSight,
    color: "black",
    size: 3,
  },
};
export const PinMapLocation: Story = {
  args: {
    Asset: LmPinMapLocation,
    color: "black",
    size: 3,
  },
};
export const PlusAddMath: Story = {
  args: {
    Asset: LmPlusAddMath,
    color: "black",
    size: 3,
  },
};
export const PlusInCircleAdd: Story = {
  args: {
    Asset: LmPlusInCircleAdd,
    color: "black",
    size: 3,
  },
};
export const PieChartGraph: Story = {
  args: {
    Asset: LmPieChartGraph,
    color: "black",
    size: 3,
  },
};
export const ProfileUserPersonAccount: Story = {
  args: {
    Asset: LmProfileUserPersonAccount,
    color: "black",
    size: 3,
  },
};
export const Refresh: Story = {
  args: {
    Asset: LmRefresh,
    color: "black",
    size: 3,
  },
};
export const SaveFloppy: Story = {
  args: {
    Asset: LmSaveFloppy,
    color: "black",
    size: 3,
  },
};
export const SearchMagnifyingGlass: Story = {
  args: {
    Asset: LmSearchMagnifyingGlass,
    color: "black",
    size: 3,
  },
};
export const SendPlane: Story = {
  args: {
    Asset: LmSendPlane,
    color: "black",
    size: 3,
  },
};
export const SettingsCog: Story = {
  args: {
    Asset: LmSettingsCog,
    color: "black",
    size: 3,
  },
};
export const ShoppingCart: Story = {
  args: {
    Asset: LmShoppingCart,
    color: "black",
    size: 3,
  },
};
export const ShoppingCart2: Story = {
  args: {
    Asset: LmShoppingCart2,
    color: "black",
    size: 3,
  },
};
export const SignalStrength2: Story = {
  args: {
    Asset: LmSignalStrength2,
    color: "black",
    size: 3,
  },
};
export const SignalStrength3: Story = {
  args: {
    Asset: LmSignalStrength3,
    color: "black",
    size: 3,
  },
};
export const SignalStrengthDiagonal: Story = {
  args: {
    Asset: LmSignalStrengthDiagonal,
    color: "black",
    size: 3,
  },
};
export const Television: Story = {
  args: {
    Asset: LmTelevision,
    color: "black",
    size: 3,
  },
};
export const TabletMobile: Story = {
  args: {
    Asset: LmTabletMobile,
    color: "black",
    size: 3,
  },
};
export const StickyNote: Story = {
  args: {
    Asset: LmStickyNote,
    color: "black",
    size: 3,
  },
};
export const Ticket: Story = {
  args: {
    Asset: LmTicket,
    color: "black",
    size: 3,
  },
};
export const TrashCanDelete: Story = {
  args: {
    Asset: LmTrashCanDelete,
    color: "black",
    size: 3,
  },
};
export const UnlockedLockPadlock: Story = {
  args: {
    Asset: LmUnlockedLockPadlock,
    color: "black",
    size: 3,
  },
};
export const VisibleEyeOpen: Story = {
  args: {
    Asset: LmVisibleEyeOpen,
    color: "black",
    size: 3,
  },
};
export const WarningStrikethrough: Story = {
  args: {
    Asset: LmWarningStrikethrough,
    color: "black",
    size: 3,
  },
};
export const XInCircleWarningDelete: Story = {
  args: {
    Asset: LmXInCircleWarningDelete,
    color: "black",
    size: 3,
  },
};
export const XWarningDeleteCloseMultiplyMath: Story = {
  args: {
    Asset: LmXWarningDeleteCloseMultiplyMath,
    color: "black",
    size: 3,
  },
};
export const ZoomIn: Story = {
  args: {
    Asset: LmZoomIn,
    color: "black",
    size: 3,
  },
};
export const ZoomOut: Story = {
  args: {
    Asset: LmZoomOut,
    color: "black",
    size: 3,
  },
};

export const BatteryCharge100Full: Story = {
  args: {
    Asset: LmBatteryCharge100Full,
    color: "black",
    size: 3,
  },
};
export const BatteryCharge0ZeroEmpty: Story = {
  args: {
    Asset: LmBatteryCharge0ZeroEmpty,
    color: "black",
    size: 3,
  },
};
export const BatteryCharge25: Story = {
  args: {
    Asset: LmBatteryCharge25,
    color: "black",
    size: 3,
  },
};
export const BatteryCharge50: Story = {
  args: {
    Asset: LmBatteryCharge50,
    color: "black",
    size: 3,
  },
};
export const BatteryCharge75: Story = {
  args: {
    Asset: LmBatteryCharge75,
    color: "black",
    size: 3,
  },
};
export const BitcoinMoneyCurrencyCrypto: Story = {
  args: {
    Asset: LmBitcoinMoneyCurrencyCrypto,
    color: "black",
    size: 3,
  },
};
export const BrightnessHighBright: Story = {
  args: {
    Asset: LmBrightnessHighBright,
    color: "black",
    size: 3,
  },
};
export const BrightnessLowDim: Story = {
  args: {
    Asset: LmBrightnessLowDim,
    color: "black",
    size: 3,
  },
};
export const Bluetooth: Story = {
  args: {
    Asset: LmBluetooth,
    color: "black",
    size: 3,
  },
};
export const BrightnessMediumMiddle: Story = {
  args: {
    Asset: LmBrightnessMediumMiddle,
    color: "black",
    size: 3,
  },
};
export const BusTransportationVehicle: Story = {
  args: {
    Asset: LmBusTransportationVehicle,
    color: "black",
    size: 3,
  },
};
export const CalendarDate1: Story = {
  args: {
    Asset: LmCalendarDate1,
    color: "black",
    size: 3,
  },
};
export const CalendarDate2: Story = {
  args: {
    Asset: LmCalendarDate2,
    color: "black",
    size: 3,
  },
};
export const CalendarDate3: Story = {
  args: {
    Asset: LmCalendarDate3,
    color: "black",
    size: 3,
  },
};
export const CarTransportationVehicle: Story = {
  args: {
    Asset: LmCarTransportationVehicle,
    color: "black",
    size: 3,
  },
};
export const ChromeChromeOSLogo: Story = {
  args: {
    Asset: LmChromeChromeOSLogo,
    color: "black",
    size: 3,
  },
};
export const CircleEllipseShape: Story = {
  args: {
    Asset: LmCircleEllipseShape,
    color: "black",
    size: 3,
  },
};
export const CommandAppleKeyLoopedSquare: Story = {
  args: {
    Asset: LmCommandAppleKeyLoopedSquare,
    color: "black",
    size: 3,
  },
};
export const CreditCard: Story = {
  args: {
    Asset: LmCreditCard,
    color: "black",
    size: 3,
  },
};
export const DiamondComponentInstanceFigmaShape: Story = {
  args: {
    Asset: LmDiamondComponentInstanceFigmaShape,
    color: "black",
    size: 3,
  },
};
export const DiamondComponentMasterFigma: Story = {
  args: {
    Asset: LmDiamondComponentMasterFigma,
    color: "black",
    size: 3,
  },
};
export const DollarMoneyCurrencyUSD: Story = {
  args: {
    Asset: LmDollarMoneyCurrencyUSD,
    color: "black",
    size: 3,
  },
};
export const DotMenuEllipseSmall: Story = {
  args: {
    Asset: LmDotMenuEllipseSmall,
    color: "black",
    size: 3,
  },
};
export const EnvelopeOpenRead: Story = {
  args: {
    Asset: LmEnvelopeOpenRead,
    color: "black",
    size: 3,
  },
};
export const EuroMoneyCurrency: Story = {
  args: {
    Asset: LmEuroMoneyCurrency,
    color: "black",
    size: 3,
  },
};
export const FastFowardMedia: Story = {
  args: {
    Asset: LmFastFowardMedia,
    color: "black",
    size: 3,
  },
};
export const FigmaLogoF: Story = {
  args: {
    Asset: LmFigmaLogoF,
    color: "black",
    size: 3,
  },
};
export const FrownSadFace: Story = {
  args: {
    Asset: LmFrownSadFace,
    color: "black",
    size: 3,
  },
};
export const Glasses: Story = {
  args: {
    Asset: LmGlasses,
    color: "black",
    size: 3,
  },
};
export const GlobeGlobalPlanetWorldEarth: Story = {
  args: {
    Asset: LmGlobeGlobalPlanetWorldEarth,
    color: "black",
    size: 3,
  },
};
export const HeartFavoriteSave: Story = {
  args: {
    Asset: LmHeartFavoriteSave,
    color: "black",
    size: 3,
  },
};
export const ImageThumbnail: Story = {
  args: {
    Asset: LmImageThumbnail,
    color: "black",
    size: 3,
  },
};
export const LetterCircle: Story = {
  args: {
    Asset: LmLetterCircle,
    color: "black",
    size: 3,
  },
};
export const LifesaverHelpSafety: Story = {
  args: {
    Asset: LmLifesaverHelpSafety,
    color: "black",
    size: 3,
  },
};
export const LightBulbLightbulbIdea: Story = {
  args: {
    Asset: LmLightBulbLightbulbIdea,
    color: "black",
    size: 3,
  },
};
export const LetterSquare: Story = {
  args: {
    Asset: LmLetterSquare,
    color: "black",
    size: 3,
  },
};
export const MacAppleLogo: Story = {
  args: {
    Asset: LmMacAppleLogo,
    color: "black",
    size: 3,
  },
};
export const NeutralFace: Story = {
  args: {
    Asset: LmNeutralFace,
    color: "black",
    size: 3,
  },
};
export const NextForwardMedia: Story = {
  args: {
    Asset: LmNextForwardMedia,
    color: "black",
    size: 3,
  },
};
export const NumberCircle: Story = {
  args: {
    Asset: LmNumberCircle,
    color: "black",
    size: 3,
  },
};
export const NumberSquare: Story = {
  args: {
    Asset: LmNumberSquare,
    color: "black",
    size: 3,
  },
};
export const OnigiriRiceBall: Story = {
  args: {
    Asset: LmOnigiriRiceBall,
    color: "black",
    size: 3,
  },
};
export const OptionAltKey: Story = {
  args: {
    Asset: LmOptionAltKey,
    color: "black",
    size: 3,
  },
};
export const PauseMedia: Story = {
  args: {
    Asset: LmPauseMedia,
    color: "black",
    size: 3,
  },
};
export const PersonSitting: Story = {
  args: {
    Asset: LmPersonSitting,
    color: "black",
    size: 3,
  },
};
export const PersonSittingElderly: Story = {
  args: {
    Asset: LmPersonSittingElderly,
    color: "black",
    size: 3,
  },
};
export const PersonSittingInjuredHandicap: Story = {
  args: {
    Asset: LmPersonSittingInjuredHandicap,
    color: "black",
    size: 3,
  },
};
export const PersonSittingInternalHandicapHeart: Story = {
  args: {
    Asset: LmPersonSittingInternalHandicapHeart,
    color: "black",
    size: 3,
  },
};
export const PersonSittingInWheelchairHandicap: Story = {
  args: {
    Asset: LmPersonSittingInWheelchairHandicap,
    color: "black",
    size: 3,
  },
};
export const PersonSittingPregnant: Story = {
  args: {
    Asset: LmPersonSittingPregnant,
    color: "black",
    size: 3,
  },
};
export const PersonWalkingTransportation: Story = {
  args: {
    Asset: LmPersonWalkingTransportation,
    color: "black",
    size: 3,
  },
};
export const PlayMedia: Story = {
  args: {
    Asset: LmPlayMedia,
    color: "black",
    size: 3,
  },
};
export const PoundMoneyCurrencyGBP: Story = {
  args: {
    Asset: LmPoundMoneyCurrencyGBP,
    color: "black",
    size: 3,
  },
};
export const Power: Story = {
  args: {
    Asset: LmPower,
    color: "black",
    size: 3,
  },
};
export const PreviousBackwardsMedia: Story = {
  args: {
    Asset: LmPreviousBackwardsMedia,
    color: "black",
    size: 3,
  },
};
export const RefreshArrowRestartRedo: Story = {
  args: {
    Asset: LmRefreshArrowRestartRedo,
    color: "black",
    size: 3,
  },
};
export const RewindMedia: Story = {
  args: {
    Asset: LmRewindMedia,
    color: "black",
    size: 3,
  },
};
export const RubleMoneyCurrency: Story = {
  args: {
    Asset: LmRubleMoneyCurrency,
    color: "black",
    size: 3,
  },
};
export const SignalBars: Story = {
  args: {
    Asset: LmSignalBars,
    color: "black",
    size: 3,
  },
};
export const SignalFull100: Story = {
  args: {
    Asset: LmSignalFull100,
    color: "black",
    size: 3,
  },
};
export const SignalLow: Story = {
  args: {
    Asset: LmSignalLow,
    color: "black",
    size: 3,
  },
};
export const SignalMedium50: Story = {
  args: {
    Asset: LmSignalMedium50,
    color: "black",
    size: 3,
  },
};
export const SmileyHappyFace: Story = {
  args: {
    Asset: LmSmileyHappyFace,
    color: "black",
    size: 3,
  },
};
export const SquareRectangleShape: Story = {
  args: {
    Asset: LmSquareRectangleShape,
    color: "black",
    size: 3,
  },
};
export const StopMedia: Story = {
  args: {
    Asset: LmStopMedia,
    color: "black",
    size: 3,
  },
};
export const SubwayTransportationVehicle: Story = {
  args: {
    Asset: LmSubwayTransportationVehicle,
    color: "black",
    size: 3,
  },
};
export const TargetBullseye: Story = {
  args: {
    Asset: LmTargetBullseye,
    color: "black",
    size: 3,
  },
};
export const ThumbsDownDislikeVote: Story = {
  args: {
    Asset: LmThumbsDownDislikeVote,
    color: "black",
    size: 3,
  },
};
export const ThumbsUpLikeVote: Story = {
  args: {
    Asset: LmThumbsUpLikeVote,
    color: "black",
    size: 3,
  },
};
export const TrainRailTransportationVehicle: Story = {
  args: {
    Asset: LmTrainRailTransportationVehicle,
    color: "black",
    size: 3,
  },
};
export const TranslateTranslation: Story = {
  args: {
    Asset: LmTranslateTranslation,
    color: "black",
    size: 3,
  },
};
export const TriangleShape: Story = {
  args: {
    Asset: LmTriangleShape,
    color: "black",
    size: 3,
  },
};
export const UndoArrowRestartRefresh: Story = {
  args: {
    Asset: LmUndoArrowRestartRefresh,
    color: "black",
    size: 3,
  },
};
export const VolumeHigherVolumeUp: Story = {
  args: {
    Asset: LmVolumeHigherVolumeUp,
    color: "black",
    size: 3,
  },
};
export const VolumeMute: Story = {
  args: {
    Asset: LmVolumeMute,
    color: "black",
    size: 3,
  },
};
export const VolumeLowerVolumeDown: Story = {
  args: {
    Asset: LmVolumeLowerVolumeDown,
    color: "black",
    size: 3,
  },
};
export const WarningTriangleCaution: Story = {
  args: {
    Asset: LmWarningTriangleCaution,
    color: "black",
    size: 3,
  },
};
export const WindowsKeyLogo: Story = {
  args: {
    Asset: LmWindowsKeyLogo,
    color: "black",
    size: 3,
  },
};
export const WindowSwatchCard: Story = {
  args: {
    Asset: LmWindowSwatchCard,
    color: "black",
    size: 3,
  },
};
export const YenRenminbiMoneyCurrencyJPYRMB: Story = {
  args: {
    Asset: LmYenRenminbiMoneyCurrencyJPYRMB,
    color: "black",
    size: 3,
  },
};
export const Info: Story = {
  args: {
    Asset: LmInfo,
    color: "black",
    size: 3,
  },
};
