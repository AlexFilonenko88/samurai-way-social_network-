import {combineReducers, createStore} from "redux";
import {profileReducer} from "../../redux/profile-reducer";
import {dialogsReducer} from "../../redux/dialogs-reducer";
import {sidebarReducer} from "../../redux/sidebar-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
    }
)

let store = createStore(reducers);

export type AppStoreType = typeof store

export default store;