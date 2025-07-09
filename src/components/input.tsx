type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

export function Input({ type = "text", label, ...props }: InputProps) {
  return (
    <div>
      {label && <label htmlFor={label}>{label}</label>}

      <input id={label} type={type} {...props} />
    </div>
  );
}
