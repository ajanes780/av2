export const H1 = ({ children }) => {
  return <h1 className='m-3  text-center  text-white sm:text-lg md:text-5xl'>{children}</h1>;
};

export const H2 = ({ children, variants = 'text-white' }) => {
  return (
    <h1 className={`xs:text-2xl  xs:w-screen m-3 text-center  font-bold md:text-4xl ${variants} `}>
      {children}
    </h1>
  );
};

export const H3 = ({ children, variants = 'text-white' }) => {
  return (
    <h3 className={`xs:text-xl  xs:w-screen  m-5  text-center md:text-3xl ${variants} `}>
      {children}{' '}
    </h3>
  );
};
