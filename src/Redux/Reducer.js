
let initialdata={
        count:0,
}
const counterReducer=(storedata=initialdata, action)=>{
    if(action.type==="increament"){
        return {
           ...storedata,
           count:storedata.count+1
        }
    }else if(action.type==="decreament"){
        return {
            ...storedata,
            count:storedata.count-1
        }
    }else if(action.type==="reset"){
        return {
            ...storedata,
            count:0
        } 
    }
    return storedata
}

export default counterReducer;