import { CommonActions } from "@react-navigation/native"
import { CREATE_PASSWORD_SCREEN, FORGOT_PASSWORD_SCREEN, VERIFICATION_NUMBER_SCREEN } from "src/routes"

export const navigateToForgotPassword = (navigation) => {
  navigation.navigate(FORGOT_PASSWORD_SCREEN, {
    
  })
}


export const navigateBetweenTwoScreens = (routeName, params) => (state) => {
  const routes = [state.routes[0], {
    name: routeName,
    params: params ?? null,
  }]

  console.log({ routes })
  return CommonActions.reset({
    ...state,
    routes,
    index: routes.length - 1,
  });
}

export const navigateToCreateNewPassword = (navigation) => {
  navigation.navigate(CREATE_PASSWORD_SCREEN, {
    data: {
      names: ["password", "Confirm Password"],
      placeholders: ["Enter new password", "Retype new password"],
      types: ["password", "password"],
    },
    text: "Your new password must be different from your old password.",
    handleSubmit: () => console.log("Your password has been reseted")
  })
}