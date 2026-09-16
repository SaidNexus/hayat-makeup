export function getOrCreateUserTag(): string {
  if (typeof window === 'undefined' || !window.localStorage) {
    return 'user_8k4m2x';
  }
  let tag = localStorage.getItem('hy-user-tag') || localStorage.getItem('lk-user-tag');
  if (!tag || /^User_\d+$/i.test(tag) || !/^user_[a-z0-9]{5,8}$/i.test(tag)) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomPart = '';
    for (let i = 0; i < 6; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    tag = `user_${randomPart}`;
    localStorage.setItem('hy-user-tag', tag);
  }
  return tag;
}
