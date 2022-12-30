import globalData from '../globalData.json'

export const currentUser = () => {
    const user = localStorage.getItem('currentUser');
    if (user) {
        localStorage.removeItem('currentUser');
    } 
}