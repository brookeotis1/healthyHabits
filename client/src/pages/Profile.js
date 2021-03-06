import React, { useState, useEffect } from "react";
import { apiUsers } from "../utils/api/users";
import { apiAuth} from "../utils/api/auth";
import { useAuth } from "../utils/context";
import { AuthContainer, AuthRow, AuthColumn } from "../components/Auth";
import axios from "axios";

//random inspirational quote API
const options = {
  method: 'GET',
  url: 'https://quotejoy.p.rapidapi.com/random',
  headers: {
    'x-rapidapi-key': '617a4f066cmsh0a311780b1b6d9cp1ada08jsna7edb4fc2985',
    'x-rapidapi-host': 'quotejoy.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  let quote = response.quote;
  let source = response.source;
  let randomQuote = document.createElement("blockquote");
  randomQuote.id = "randomQuote";
  randomQuote.innerHTML = quote + "-" + source;
}).catch(function (error) {
	console.error(error);
});

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
    <div>
    <AuthContainer className="mt-5">
      <AuthRow>
        <AuthColumn>
          <h1>Profile</h1>
          {state.user && <p>Welcome {state.user.username}</p>}
        </AuthColumn>
      </AuthRow>
    </AuthContainer>
    <div id="quoteHolder"></div>
    </div>
  );
}

