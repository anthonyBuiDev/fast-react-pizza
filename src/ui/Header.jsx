import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Fast React Pizza Co.</Link>
      </h1>
      <SearchOrder />
      <p>Nam</p>
    </header>
  );
}

export default Header;
