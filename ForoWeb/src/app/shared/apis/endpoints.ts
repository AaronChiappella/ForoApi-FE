import { environment } from "../../../envirotments/envirotment";


export const endpoint = {
    // POSTS MODULE
    LIST_POST: `${environment.apiUrl}/Posts/GetAll`,
    POST_REGISTER: `${environment.apiUrl}/Posts/Create`,
    POST_EDIT: `${environment.apiUrl}/Posts/Edit`,
    POST_REMOVE: `${environment.apiUrl}/Posts/Delete`,

    // USERS MODULE
    USER_REGISTER: `${environment.apiUrl}/Users/Register`,
    USER_LOGIN: `${environment.apiUrl}/Users/Login`,
   



  };