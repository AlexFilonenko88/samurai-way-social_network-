import {combineReducers, createStore} from "redux";
import {profileReducer} from "../../redux/profile-reducer";
import {dialogsReducer} from "../../redux/dialogs-reducer";
import {sidebarReducer} from "../../redux/sidebar-reducer";

let rootReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
    }
)

let store = createStore(rootReducers);

export type AppStoreType = ReturnType<typeof rootReducers>

export default store;