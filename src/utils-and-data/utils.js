export const fwdOrBkwd = (to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  return toDepth <= fromDepth ? 'slide-right' : 'slide-left';
};

export const somethingElse = () => {

};

/*
*    Implements *basic* LocalStorage functionality:
*    --------------------------------------------------------------------------
*    - also adds some customised functions around book and edit progress
*/

// @TODO: Add expiry date to all items
export function LS() {
  const EXPIRY = 10;
  return {
    set: (name, value) => {
      console.log('LS, set:', name, value);
      window.localStorage.setItem(name, value);
    },
    get: (name) => {
      return window.localStorage.getItem(name);
    },
  }
})

export function GetSimpleRect(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
}

export function PromiseState(p) {
  const t = {};
  return Promise.race([p, t])
    .then(v => (v === t ? 'pending' : 'fulfilled'),
      () => 'rejected');
}

export function SendGAPageView({ title = '', path = '/' }) {
  const gtag = window.gtag || function gtag() {};
  gtag('config', 'UA-70164706-7', {
    page_title: title,
    page_path: path,
  });
}