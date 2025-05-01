interface Props {
    title: string;
    titleColor?: string;
  }
  
  export const Title = ({ title, titleColor }: Props) => {
    return (
      <div className="py-2 relative w-full">
        <h2 className="relative font-semibold text-2xl text-black/70 inline-block
          after:content-[''] after:absolute after:left-0 after:-bottom-2.5 after:w-full after:h-1 after:bg-blue-500 after:z-10
        ">
          {title} <span className="text-blue-500/80">{titleColor}</span>
        </h2>
        <div className="absolute left-0 bottom-0 h-[0.5px] bg-gray-200 w-full"></div>
      </div>
    );
  };
  