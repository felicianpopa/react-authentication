import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsloading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsloading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsloading(false);

    return () => (isMounted = false);
  }, []);

  return (
    // Here by rendering the loading instead of the <Outlet/> before we have the accessToken we do not trigger the logic from RequireAuth,
    // which would take us to the login page:
    // <Route element={<PersistLogin />}>
    // THIS WOULD BE RENDERED IF WE SHOW THE OUTLET BEFORE THE LOADING IS DONE
    //       <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
    //         <Route path="/" element={<Home />} />
    //       </Route>
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading ...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
