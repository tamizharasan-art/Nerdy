import React, { useCallback, useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button } from "../ui/button";

const FileUploader = ({ fieldChange, mediaUrl }: any) => {
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath) => {
      setFile(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
      fieldChange(acceptedFiles);
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".svg", ".png"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-gap rounded-xl bg-dark-3 cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <div>test1</div>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            alt="upload"
            width={96}
            height={77}
          />
          <h3 className="base-medium text-light-2 mb-2 mt-2 ">
            Drag your file
          </h3>
          <p className="text-light-4 small-regular mb-6">SVEG, JPEG, PNG</p>
          <Button className="shad-button_dark_4">
            Select from your device
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
