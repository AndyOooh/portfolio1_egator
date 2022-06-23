import React, { useEffect, Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";

const data = [
  {
    menu: "HOME",
    path: "home",
    data:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    menu: "PROFILE",
    path: "profile",
    data:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    Sub_menu: [
      // some menus have submenus also
      {
        menu: "Profile1",
        path: "profile1",
        data: "Some data for the sub menu"
      },
      {
        menu: "Profile2",
        path: "profile2",
        data: "Some data for the sub menu 2"
      }
    ]
  },
  {
    menu: "STATUS",
    path: "status",
    data:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    menu: "INFO",
    path: "info",
    data:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). q",
    Sub_menu: [
      {
        menu: "info1",
        path: "info1",
        data: "Some data for the sub menu info"
      },
      {
        menu: "info2",
        path: "info2",
        data: "Some data for the sub menu info2"
      }
    ]
  }
];

const Section = ({ title, description, path, parent = "" }) => {
  const history = useHistory();

  useEffect(() => {
    const el = document.getElementById(path);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (parent) {
            history.push(`#${parent}/${path}`);
          } else {
            history.push(`#${path}`);
          }
          return;
        }
      },
      {
        root: null,
        threshold: 0.1 // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );

    observer.observe(el);
  }, [path, parent, history]);

  return (
    <div style={{ height: "500px" }}>
      <h3 id={path}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const NavBar = () => (
  <div className="menuBar">
    <div className="mr-auto ml-1">
      {data.map((item) => {
        const hashPath = `#${item.path}`;
        const currentHash = document.location.hash;
        return (
          <li className="nav-item" key={item.path}>
            <HashLink to={hashPath} smooth={true}>
              {item.menu}
            </HashLink>
            {currentHash.includes(hashPath)
              ? item?.Sub_menu?.map((sub) => (
                  <p key={sub.path}>
                    <HashLink to={`${hashPath}/${sub.path}`}>
                      {sub.path}
                    </HashLink>
                  </p>
                ))
              : null}
          </li>
        );
      })}
    </div>
  </div>
);

const App = () => {
  return (
    <div>
      <div style={{ position: "fixed", zIndex: 10, backgroundColor: "white" }}>
        <NavBar />
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px"
        }}
      >
        {data.map((item) => {
          return (
            <Fragment key={item.path}>
              <Section
                title={item.menu}
                description={item.data}
                path={item.path}
                key={item.path}
              />
              {item?.Sub_menu?.map((sub) => (
                <Section
                  title={sub.menu}
                  description={sub.data}
                  path={sub.path}
                  parent={item.path}
                  key={sub.path}
                />
              ))}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
