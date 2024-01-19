

const createUser = async(request)=> {
    const{firstName, lastName, email, password, userName} = request;
    const user = user.findOne([email])

    if(user){
        throw new NotFoundException('User Already Exist')
    }
    
}