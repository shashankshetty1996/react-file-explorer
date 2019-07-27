const getFileExtension = fileName => fileName.split('.').pop();

const getPathArray = pathname => (pathname === '/' ? [''] : pathname.split('/'));

const getParentDirectory = pathname => pathname.substring(0, pathname.lastIndexOf('/'));

export { getFileExtension, getPathArray, getParentDirectory };
