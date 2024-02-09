type HeaderProps = { title: string };

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className=" px-4 py-2">
      <h2 className="text-xl text-white">{title}</h2>
    </div>
  );
};
