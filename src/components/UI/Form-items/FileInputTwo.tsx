import { useContext, useState } from "react";

type FileInputProps = {
  label?: string;
  onChange: (file: File | undefined) => void;
  currentFile?: File | undefined;
  placeholder: string;
  className?: string;
  required?: boolean;
  currentValue: string | number;
  htmlFor?: string;
  id?: string;
};

const FileInput = ({
  label,
  onChange,
  placeholder,
  className,
  required,
  id,
}: FileInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const defaultClassValue = `block py-1 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-primary peer focus:border-t-1 pl-2`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || undefined;
    setSelectedFile(file);
    onChange(file);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={id || "dropzone-file"}
        className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 relative"
      >
        {/* Hidden Input Field */}
        <input
          id="dropzone-file"
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
          required={required ?? false}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Text */}
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {selectedFile ? (
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              File Selected: {selectedFile.name}
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
      </label>
    </div>
  );
};

export default FileInput;
