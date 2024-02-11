import { Link } from "react-router-dom";
import BasePage from "../component/BasePage";

export const TemplateTop = () => {
  return (
    <>
      <BasePage>
        <h1>Todoアプリ</h1>
        <p>予定を書いてください。</p>
        <Link to={"/Todo"}>Todoアプリ</Link>
      </BasePage>
    </>
  );
};

export default TemplateTop;
