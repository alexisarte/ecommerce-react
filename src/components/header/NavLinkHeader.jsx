import { Link } from "react-router-dom";

export default ({ text }) => {
  return (
    <Link to={`/${text}`} className="group relative py-8">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="absolute bottom-0 block h-3 w-full scale-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-orange-primary"></span>
    </Link>
  );
};
