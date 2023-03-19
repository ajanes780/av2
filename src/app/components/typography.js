
export const H1 = ({children}) => {
    return (
        <h1 className="sm:text-lg  md:text-5xl  text-center text-white m-3">{children}</h1>
    )
}

export const H2 = ({children}) => {
    return (
        <h1 className=" xs:text-2xl  md:text-4xl font-bold text-center text-white m-3">{children}</h1>
    )
}

export const H3 = ({children}) => {
    return (
        <h3 className=" xs:text-xl  md:text-3xl  text-center text-white m-3">{children} </h3>
    )
}
