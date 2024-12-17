import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const Sidebar = ({ sidebarName, children }) => {
  return (
    <aside className="h-min sm:h-full">
      <nav className="h-full flex flex-wrap sm:flex-col items-center sm:items-start sm:border-r dark:border-gray-700 ">
        <div className="p-4 pb-2 flex justify-between items-center ">
          <article className="common-prose">
            <h4>{sidebarName}</h4>
          </article>
        </div>
        <ul className="flex-1 px-3 flex sm:flex-col  gap-4">{children}</ul>
        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div> */}
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, alert, onPress }) {
  //   const { expanded } = useContext(SidebarContext);

  return (
    <div className="w-full">
      <Button
        startContent={icon}
        size="lg"
        variant={active ? "flat" : "light"}
        color="primary"
        className="items-center p-6 cursor-pointer"
        onPress={onPress}
      >
        <span className={`overflow-hidden transition-all table-cell`}>
          {text}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />
        )}
      </Button>
    </div>
  );
}

Sidebar.propTypes = {
  sidebarName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
  ]),
};

SidebarItem.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Sidebar;
