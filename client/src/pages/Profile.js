import React, { useState, useEffect } from "react";
import { apiUsers } from "../utils/api/users";
import { apiAuth} from "../utils/api/auth";
import { useAuth } from "../utils/context";
import { AuthContainer, AuthRow, AuthColumn } from "../components/Auth";
import BMI from "../components/BMI"

export function Profile() {
  const [state, setState] = useState({
    user: null,
  });

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user) {
      setState({ ...state, user: auth.user });
    } else {
      apiUsers
        .getProfile()
        .then((res) => {
          if (res.data._id) {
            // For local read/update/delete
            setState({ ...state, user: res.data });
            // For local auth context
            setAuth({ ...auth, user: res.data });
            // For persistent auth
            apiAuth.setAuth({ ...auth, user: res.data });
          }
        })
        .catch((err) => {
          // Choose your error notification
          // console.log("err", err);
        });
    }
  }, []);

  return (
    <>
    <AuthContainer className="mt-5">
      <AuthRow>
        <AuthColumn>
          <h1>Profile</h1>
          {state.user && <p>Welcome {state.user.username}</p>}
        </AuthColumn>
      </AuthRow>
    </AuthContainer>
    <BMI />
    </>
  );
}
