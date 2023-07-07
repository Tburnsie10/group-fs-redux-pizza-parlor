import "./Layout.css"
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
}