import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { redirect , Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return redirect("/login");
            }

            if (isAdmin === true && user.role !== "admin") {
              return redirect("/login");
            }

            return <element {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;