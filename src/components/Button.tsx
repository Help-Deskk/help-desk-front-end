import { classMerge } from "../utils/classMerge";

type ButtonProps = React.ComponentProps<"button"> & {
  variant: "light" | "black";
  isLoading?: boolean;
};

export function Button({
  className,
  isLoading,
  children,
  variant = "black",
  ...props
}: ButtonProps) {
  const variants = {
    light: "bg-gray-500 text-gray-200",
    black: "bg-gray-200 text-gray-600",
  };

  return (
    <button
    
      className={classMerge([
        "w-full px-8 py-2 rounded-md cursor-pointer  font-semibold hover:opacity-90",
        variants[variant],
        isLoading && "cursor-progress",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
}

