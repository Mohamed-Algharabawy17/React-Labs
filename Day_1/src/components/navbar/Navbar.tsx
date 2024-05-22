import './index.scss'
interface IProps {
  setPage: (page: string) => void
}
const Navbar = ({setPage}: IProps) => {      
    return (
        <div>
          <ul>
            <li><a className="active" onClick={() => setPage('home')}>Home</a></li>
            <li><a onClick={() => setPage('products')}>Products</a></li>
            <li><a onClick={() => setPage('filter')}>Filter Products</a></li>

          </ul> 
        </div>
    );
};

export default Navbar;