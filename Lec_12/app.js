export function msg() {
    console.log("Today i learn import/export method");
    
}
export const notification= ()=>{
    console.log("This is a notification function");
    
}
// export {msg, notification}; 


// -----------------------------------------------------
// two method in node js to import and export method:-

// 1. Common js method
// module.exports={msg,notification};  =>after ES6 method
// 2.method = function name before include export keyword