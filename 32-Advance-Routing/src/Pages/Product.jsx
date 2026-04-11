import { Link ,Outlet} from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className="text-xl font-semibold text-blue-400 underline active:scale-95 hover:text-2xl " to="/product/Men">
          Men
        </Link>
        <Link className="text-xl font-semibold text-blue-400 underline active:scale-95 hover:text-2xl " to="/product/women">
          Women
        </Link>
        <Link className="text-xl font-semibold text-blue-400 underline active:scale-95 hover:text-2xl " to="/product/Kids">
          Kids
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Product;
