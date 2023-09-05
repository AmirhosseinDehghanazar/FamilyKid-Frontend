import "./navbar.css";

const DropdownMenu = ({ links }) => {
  return (
    <div className="absolute dropdown-menu rounded-md overflow-hidden bg-gray-200 top-6">
      {links?.map((link, i) => (
        <div key={i}>
          <a /* href={"/link"}*/ className="dropdown-link" href="#">
            {link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
