import { colors } from "./styles/colors";
import "../src/styles/fonts.css";
import Careers from "./pages/CareersPage/Careers";
import { createGlobalStyle } from "styled-components";

// A global styled component to remove default margin and padding from the body
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'PP Mori', 'Inter';
    background-color: ${colors.primary};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Careers
        title="Our Values"
        content="We believe that making business accessible and understandable will lead to smarter decision-making, better-aligned teams, and a greater sense of purpose for everyone. Our mission is to make this a reality at every company."
      />
    </>
  );
}

export default App;
