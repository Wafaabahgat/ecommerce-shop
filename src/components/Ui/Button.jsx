import { cn } from "@lib/utils";

// const buttonVariants =
//   ("border-2 lg:px-10 md:px-4 py-2 rounded-full font-bold mt-4 ",
//   {
//     variants: {
//       variant: {
//         default: "text-white hover:bg-white hover:text-green-500",
//       },
//     },
//   });

const Button = ({
  className,
  variant,
  type,
  size,
  text,
  children,
  link,
  ...props
}) => {
  return (
    <>
      <button
        className={cn(
          "border-2 flex items-center justify-center py-2 mt-4",
          className
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
