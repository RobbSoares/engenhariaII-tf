import { Link } from "react-router-dom";
import './styles.css';

export default function Header () {
    return (
        <div className="header">
          <nav>
          <ul>
            <li className="logo">
              <Link to="/login">Shopping</Link>
            </li> 
            <li className="voltar">
              <Link to="/">Voltar</Link>
            </li>
          </ul>
          </nav>
        </div>
    );
}
