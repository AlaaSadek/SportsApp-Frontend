import { SignUp } from '../../../models/users/UserModel';
import backendAxios from "../../../services/backendAxios";

export const Start_Sign_Up = 'Start_Sign_UP';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';
export const Clear_Sign_Up_State = 'Clear_Sign_UP_State';

export const signUpAction = (user = new SignUp()) => {

    return (dispatch) => {
        dispatch({ type: Start_Sign_Up })
        backendAxios .post('/Account/Register',
            {
                fullName: user.fullName,
                mobile: user.phoneNumber,
                email: user.email,
                password: user.password,

            }
        ).then(
            () => {
                dispatch({ type: Success_Sign_Up })

            }
        )
            .catch(
                (err) => {
                    setTimeout(
                        () => {

                            dispatch({ type: Error_Sign_Up, payload: err.response.data.message })
                        }, 200
                    )

                }
            )


    }

}
export const ClearSignUpStateAction = () => {

    return { type: Clear_Sign_Up_State }
}

