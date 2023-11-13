const FormModelAuth = ({ ttl, disc, children, ...props }) => {
  return (
    <div className="w-[550px] max-h-[5200px]">
      <p className="text-color_white text-2xl mt-4 mb-6">{ttl}</p>
      <p className="text-color_white text-lg flex items-start ml-6 mb-3 font-bold">
        {disc}
      </p>
      {children}
    </div>
  );
};

export default FormModelAuth;
