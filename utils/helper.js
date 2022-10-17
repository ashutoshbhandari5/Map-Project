export const setHamburgerMenuClass = (sideBar) => {
  let sideBarClassName = "absolute transition-all".split(" ");
  let mapContentClassName =
    "flex w-full justify-between h-full absolute ml-2 transition-all".split(
      " "
    );
  if (sideBar) {
    sideBarClassName.push("left-0");
    mapContentClassName.push("left-44");
  } else {
    sideBarClassName.push("left-[-100%]");
    mapContentClassName.push("left-0");
  }
  return {
    sideBarClassName: sideBarClassName.join(" "),
    mapContentClassName: mapContentClassName.join(" "),
  };
};
