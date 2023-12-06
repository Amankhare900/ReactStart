const cssServices = (...css)=>{
    return css.reduce((acc, curr) => acc + ' ' + curr, '');
}

export default cssServices;