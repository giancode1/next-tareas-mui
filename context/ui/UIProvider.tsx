import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
    children?: React.ReactNode | undefined, //react18
}

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
};

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    return (
        <UIContext.Provider value={{
            // sidemenuOpen: state.sidemenuOpen   //lo mismo
            ...state,

            // Methods
            closeSideMenu,
            openSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}