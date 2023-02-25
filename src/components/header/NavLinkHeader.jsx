export default ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="duration-700 absolute bottom-0 block h-3 w-full scale-0 transition-all group-hover:scale-100 group-hover:bg-orange-primary"></span>
    </a>
  );
};
