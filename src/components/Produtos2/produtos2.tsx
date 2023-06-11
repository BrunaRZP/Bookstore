import CheckinProduto from '../../CheckinProduto/CheckinProduto'
import NavbarNavigation from '../Navbar/NavbarNavigatio';

const Produtos2 = () => {
  const product = {};
  return (
    <div>
      <NavbarNavigation />
      <CheckinProduto product={product}/>
    </div>
  )
}

export default Produtos2