import React, { useRef } from "react";
import styled from "styled-components";
import { ImageProps } from "../image.types";
import { cx } from "@utils/cx";
import { color, spacing } from "@shared/styles";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmCkCamera } from "@icons/lmCkCamera";
import { Text } from "@texts/Text/Text";
import { hexToRGBA } from "@utils/hexToRgba";

const UpdateImageComponent: React.FC<ImageProps> = ({
  onUpdate,
  accepted,
  updateUI = "overlay",
  canUpdate = false,
  overlay,
  borderRadius = spacing.borderRadius.r2,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const UpdateImageContainer = styled.button`
    display: ${canUpdate ? "flex" : "none"};
    background-color: ${!overlay && hexToRGBA(color.foreground, 0.5)};
    border-radius: ${borderRadius};
  `;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      throw new Error("No file selected.");
    }

    console.log("fileObj is", fileObj);
    const ext = fileObj.type.split("/")[1];

    if (accepted !== undefined) {
      const supported = accepted.split(",").map((e) => e.trim());

      if (supported.filter((i) => i === ext).length === 0) {
        throw new Error("Format not supported.");
      }
    }

    // Reset file input
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Create object URL for preview
    const url = URL.createObjectURL(fileObj);

    // Call onUpdate callback with URL and file object
    if (onUpdate) {
      onUpdate(url, fileObj);
    }
  };

  return (
    <>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={inputRef}
        accept={accepted}
      />
      {updateUI === "overlay" && (
        <UpdateImageContainer
          onClick={() => inputRef.current?.click()}
          className={cx("lmImageUpdateContainer")}
        >
          <LMAsset
            Asset={LmCkCamera}
            size={2}
            color={color.foregroundInverse200}
          />
          <Text
            color={color.foregroundInverse200}
            type="body"
          >
            Update Photo
          </Text>
        </UpdateImageContainer>
      )}
    </>
  );
};

export default UpdateImageComponent;
