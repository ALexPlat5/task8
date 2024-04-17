import { types } from "mobx-state-tree";

export const test = types
    .model({
        email: types.optional(types.string, ''),
        password: types.optional(types.string, ''),
        logged: types.optional(types.boolean, false)
    })
    .actions(self=>{
        function logIn(email:string, password:string) {
            self.email = email
            self.password = password
            self.logged = true
        }

        function logOutMSTC() {
            self.email = ''
            self.password = ''
            self.logged = false
        }

        return {
            logIn,
            logOutMSTC
        }
    })
    .views(self=>{
        function getIsLogged() {
            return self.logged
        }  

        function getUser() {
            return ({
                email: self.email,
                password: self.password
            })
        }

        return {
            getIsLogged,
            getUser
        }
    })

const storeMSTC = test.create();
export default storeMSTC;
