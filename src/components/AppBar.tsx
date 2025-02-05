
const IsAuthenticated = () => {
    return true
}

const TestAppBarAuthenticated = () => {

}

const TestAppBarAnon = () => {

    
}

const TestAppBar = () => {
    if(IsAuthenticated()){
        return TestAppBarAuthenticated
    }else{
        return TestAppBarAnon
    }
}

export default TestAppBar