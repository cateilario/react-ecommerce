import Logo from "../molecules/header/Logo";
import MainMenu from "../molecules/header/MainMenu";

const MainHeader = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-7 fixed bg-gradient">
      <Logo/>
      <MainMenu/>
    </div>
  )
}

export default MainHeader;
