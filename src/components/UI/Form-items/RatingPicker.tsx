import ICONS from "@/components/shared/Icons/AllIcons";

const RatingPicker = ({
  current_value,
  clickHandler,
}: {
  current_value: number;
  clickHandler?: (value: number) => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className={[
          current_value >= 1 ? "text-secondary" : "text-white",
          !clickHandler && "cursor-text",
        ].join(" ")}
        onClick={() => clickHandler && clickHandler(1)}
      >
        {ICONS.star_icon}
      </button>
      <button
        type="button"
        className={[
          current_value >= 2 ? "text-secondary" : "text-white",
          !clickHandler && "cursor-text",
        ].join(" ")}
        onClick={() => clickHandler && clickHandler(2)}
      >
        {ICONS.star_icon}
      </button>
      <button
        type="button"
        className={[
          current_value >= 3 ? "text-secondary" : "text-white",
          !clickHandler && "cursor-text",
        ].join(" ")}
        onClick={() => clickHandler && clickHandler(3)}
      >
        {ICONS.star_icon}
      </button>
      <button
        type="button"
        className={[
          current_value >= 4 ? "text-secondary" : "text-white",
          !clickHandler && "cursor-text",
        ].join(" ")}
        onClick={() => clickHandler && clickHandler(4)}
      >
        {ICONS.star_icon}
      </button>
      <button
        type="button"
        className={[
          current_value >= 5 ? "text-secondary" : "text-white",
          !clickHandler && "cursor-text",
        ].join(" ")}
        onClick={() => clickHandler && clickHandler(5)}
      >
        {ICONS.star_icon}
      </button>
    </div>
  );
};

export default RatingPicker;
