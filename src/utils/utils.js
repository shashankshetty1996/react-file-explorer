const getFileExtension = fileName => fileName.split('.').pop();

const getPathArray = pathname => (pathname === '/' ? [''] : pathname.split('/'));

const getParentDirectory = pathname => pathname.substring(0, pathname.lastIndexOf('/'));

const prepareDirectoryTree = data => {
  return data
    .filter(file => {
      return file.is_directory;
    })
    .map(item => {
      let { children } = item;
      if (children.length) {
        children = prepareDirectoryTree(children);
      }
      return { id: item.id, name: item.name, children: [...children] };
    });
};

export { getFileExtension, getPathArray, getParentDirectory, prepareDirectoryTree };
