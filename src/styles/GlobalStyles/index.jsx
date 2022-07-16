import ResetCss from "../settings/reset";
import Colors from "../variables/colors";
import Fonts from "../settings/fonts";

const GlobalStyle = () => {
  return (
    <>
      <ResetCss />
      <Colors />
      <Fonts />
    </>
  );
};

export default GlobalStyle;
