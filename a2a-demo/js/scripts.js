var keycloak = Keycloak({
  url: "https://sso-dev.ised-isde.canada.ca/auth",
  realm: "vc-authn",
  clientId: "idm-vc-demo"
});
keycloak
  .init({ onLoad: "login-required" })
  .success(function(authenticated) {
    // alert(authenticated ? "authenticated" : "not authenticated");
    keycloak.loadUserInfo().success(function(userInfo) {
      console.log("UserInfo: ", userInfo)
      document.getElementById("user-info").innerHTML = userInfo.email;
      document.body.style.display = "";
    });
  })
  .error(function() {
    alert("failed to initialize");
  });

function logout() {
  keycloak.logout();
}

// test


