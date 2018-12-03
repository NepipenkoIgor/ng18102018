export interface IUser {
    firstName: string;
    bonuse: number;
}

const initialState: IUser = {
    firstName: 'Igor',
    bonuse: 0.9
};


export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
