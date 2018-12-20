const getData = (action, next) => {
    fetch('http://172.25.161.51:4000/base', {
        method: 'GET',
        //credentials: 'include',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/x-www-form-urlencoded, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        return res.json()
    }).then((data) => {
        next(
            {
                type: action.type,
                payload: data
            })
    })
}


const data = store => next => action => {
    switch (action.type) {
        case 'GET_DATA':
            getData(action, next)
            break;
        default:
            next(action);
    }
}

export default data;