import { Eye, EyeSlash } from "iconsax-react";
import { IPasswordToggler } from "./PasswordToggler.types";

const PasswordToggler = ({
  isPasswordVisible,
  onToggle,
  style = {},
  className = "",
}: IPasswordToggler) => {
  return (
    <div style={style} className={`cursor-pointer ${className}`}>
      {isPasswordVisible ? (
        <Eye
          onClick={onToggle}
          className="text-gray-500  h-4 w-4 lg:h-6 lg:w-6"
        />
      ) : (
        <EyeSlash
          onClick={onToggle}
          className="text-gray-500  h-4 w-4 lg:h-6 lg:w-6"
        />
      )}
    </div>
  );
};

export default PasswordToggler;
