import { Redirect, Route, RouteProps } from "react-router";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

export default function PrivateRoute({
  component: Component,
  ...theRest
}: PrivateRouteProps) {
  return (
    <Route
      {...theRest}
      render={(props) => {
        const token = localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}
