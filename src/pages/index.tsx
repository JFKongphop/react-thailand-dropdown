import ThailandDropdown from "@/components/ThailandDropdown/ThailandDropdown";
import { useState } from "react";

const index = () => {
  const [fixedScreen, setFixScreen] = useState<boolean>(false);

  const fixedScreenHandler = (status: boolean) => {
    setFixScreen(status);
  };
  
  return (
    <div className="">
      <ThailandDropdown onFixedScreen={fixedScreenHandler} />
    </div>
  )
}

export default index;