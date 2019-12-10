module.exports = (collection) => {
  return collection.sort((a, b) => {
    if(a.data.order !== b.data.order) {
      return a.data.order > b.data.order;
    }

    return a.fileSlug > b.fileSlug;
  });
};
