type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

export function Input({ type = "text", label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-300" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        {...props}
        className="border-b border-gray-500 outline-none p-1 text-xl"
      />
    </div>
  );
}
