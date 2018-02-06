export const fwdOrBkwd = (to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  return toDepth <= fromDepth ? 'slide-right' : 'slide-left';
};

export const somethingElse = () => {

};
