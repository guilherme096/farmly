import globalData from '../globalData.json'

export const loginUser = (email, password) => {
    // check if params are in user from globalData and store logged in user in local storage
    const user = globalData.users.find(user => user.email === email && user.password === password)
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        return true
    }
    return false
}

export const checkAuth = () => {
    const user = localStorage.getItem('currentUser')
    return !!user
}