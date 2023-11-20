const getShapeClass = (shape:string) => {
    return shape === 'circular' ? 'rounded-full' : 'rounded-lg'
};

export {getShapeClass};