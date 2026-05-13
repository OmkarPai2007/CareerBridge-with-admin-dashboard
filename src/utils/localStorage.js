export const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || []
}

export const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
}

export const getJobs = () => {
    return JSON.parse(localStorage.getItem('jobs')) || []
}

export const saveJobs = (jobs) => {
    localStorage.setItem('jobs', JSON.stringify(jobs))
}

export const getApplications = () => {
    return JSON.parse(localStorage.getItem('applications')) || []
}

export const saveApplications = (applications) => {
    localStorage.setItem('applications', JSON.stringify(applications))
}